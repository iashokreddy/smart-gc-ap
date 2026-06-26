import { FALLBACK_NEWS, NewsItem, NewsPriority } from '@/data/news';

const FEED_URLS = [
  'https://news.google.com/rss/search?q=Markapuram+OR+Prakasam+district+Andhra+Pradesh+when:7d&hl=en-IN&gl=IN&ceid=IN:en',
  'https://news.google.com/rss/search?q=Andhra+Pradesh+government+schemes+when:7d&hl=en-IN&gl=IN&ceid=IN:en',
  'https://news.google.com/rss/search?q=public+health+camp+Andhra+Pradesh+when:7d&hl=en-IN&gl=IN&ceid=IN:en',
];

const IMPORTANT_KEYWORDS = [
  'important',
  'urgent',
  'emergency',
  'alert',
  'warning',
  'deadline',
  'approved',
  'launch',
  'released',
  'critical',
];

function parseDate(value?: string | null): string {
  if (!value) return new Date().toISOString();
  const t = Date.parse(value);
  if (Number.isNaN(t)) return new Date().toISOString();
  return new Date(t).toISOString();
}

function inferCategory(title: string): NewsItem['category'] {
  const t = title.toLowerCase();
  if (t.includes('health') || t.includes('medical') || t.includes('hospital')) return 'Healthcare';
  if (t.includes('education') || t.includes('student') || t.includes('school')) return 'Education';
  if (t.includes('farm') || t.includes('agri') || t.includes('crop')) return 'Agriculture';
  if (t.includes('scheme') || t.includes('welfare') || t.includes('benefit')) return 'Schemes';
  if (t.includes('alert') || t.includes('warning') || t.includes('emergency')) return 'Alerts';
  if (t.includes('road') || t.includes('project') || t.includes('irrigation') || t.includes('development')) return 'Development';
  return 'General';
}

function inferPriority(title: string): NewsPriority {
  const t = title.toLowerCase();
  if (IMPORTANT_KEYWORDS.some((k) => t.includes(k))) return 'important';
  return 'normal';
}

function parseRss(xml: string, feedSource: string): NewsItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const parseError = doc.querySelector('parsererror');
  if (parseError) return [];

  const items = Array.from(doc.querySelectorAll('item'));
  return items.slice(0, 12).map((item, idx) => {
    const title = item.querySelector('title')?.textContent?.trim() || 'Untitled update';
    const link = item.querySelector('link')?.textContent?.trim() || '#';
    const pubDate = parseDate(item.querySelector('pubDate')?.textContent);
    const descriptionRaw = item.querySelector('description')?.textContent?.replace(/<[^>]+>/g, ' ') || '';
    const summary = descriptionRaw.trim().slice(0, 220) || 'Please open source link for full update details.';

    return {
      id: `${feedSource}-${idx}-${title.slice(0, 32)}`,
      title,
      summary,
      category: inferCategory(title),
      publishedAt: pubDate,
      source: feedSource,
      sourceUrl: link,
      priority: inferPriority(title),
    } satisfies NewsItem;
  });
}

function dedupeAndSort(items: NewsItem[]): NewsItem[] {
  const seen = new Set<string>();
  const deduped: NewsItem[] = [];

  for (const item of items) {
    const key = `${item.title.toLowerCase()}|${item.sourceUrl}`;
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(item);
    }
  }

  return deduped.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

async function fetchOneFeed(feedUrl: string): Promise<NewsItem[]> {
  const proxied = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
  const response = await fetch(proxied, { cache: 'no-store' });
  if (!response.ok) return [];
  const xml = await response.text();
  return parseRss(xml, 'Google News');
}

export async function getLiveNews(): Promise<NewsItem[]> {
  const allResults = await Promise.allSettled(FEED_URLS.map((url) => fetchOneFeed(url)));
  const live = allResults
    .filter((r): r is PromiseFulfilledResult<NewsItem[]> => r.status === 'fulfilled')
    .flatMap((r) => r.value);

  const merged = dedupeAndSort([...live, ...FALLBACK_NEWS]);
  return merged.slice(0, 40);
}

export function formatPublishedTime(dateIso: string): string {
  const date = new Date(dateIso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const mins = Math.floor(diffMs / (1000 * 60));

  if (mins < 60) return `${Math.max(mins, 1)} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;

  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
