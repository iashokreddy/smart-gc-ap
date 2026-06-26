'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { RefreshCcw, AlertTriangle, ExternalLink } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { useLiveNews } from '@/hooks/useLiveNews';
import { formatPublishedTime } from '@/services/newsService';
import { NewsItem } from '@/data/news';

const CATEGORIES: Array<NewsItem['category'] | 'All'> = [
  'All',
  'Development',
  'Schemes',
  'Agriculture',
  'Education',
  'Healthcare',
  'Alerts',
  'General',
];

export default function NewsPage() {
  const { items, loading, error, lastUpdated, refresh } = useLiveNews();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [importantOnly, setImportantOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const byCategory = category === 'All' || item.category === category;
      const byPriority = !importantOnly || item.priority !== 'normal';
      const byQuery = !q || item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q);
      return byCategory && byPriority && byQuery;
    });
  }, [items, query, category, importantOnly]);

  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Live District News</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Recently published and important updates with auto-refresh, source links, and smart filters.
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {lastUpdated ? `Last refreshed ${formatPublishedTime(lastUpdated.toISOString())}` : 'Waiting for first refresh...'}
            </p>
          </div>

          <button
            onClick={refresh}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
          >
            <RefreshCcw className="w-4 h-4" /> Refresh now
          </button>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or summary..."
            className="md:col-span-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as (typeof CATEGORIES)[number])}
            className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <label className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm bg-white dark:bg-gray-900">
            <input
              type="checkbox"
              checked={importantOnly}
              onChange={(e) => setImportantOnly(e.target.checked)}
            />
            Important only
          </label>
        </div>

        {error ? (
          <div className="mt-4 rounded-lg border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 p-3 text-sm text-yellow-900 dark:text-yellow-300">
            Unable to fetch some live feeds right now. Showing verified fallback updates.
          </div>
        ) : null}

        <div className="mt-6 space-y-4">
          {loading && filtered.length === 0 ? (
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-sm text-gray-600 dark:text-gray-300">
              Loading latest updates...
            </div>
          ) : null}

          {filtered.map((item) => (
            <article key={item.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs rounded-full px-2 py-0.5 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400">
                  {item.category}
                </span>
                {item.priority !== 'normal' ? (
                  <span className="inline-flex items-center gap-1 text-xs rounded-full px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                    <AlertTriangle className="w-3 h-3" /> Important
                  </span>
                ) : null}
                <span className="text-xs text-gray-500 dark:text-gray-400">{formatPublishedTime(item.publishedAt)}</span>
              </div>

              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.summary}</p>

              <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p>Published: {new Date(item.publishedAt).toLocaleString('en-IN')}</p>
                <p>Recency: {formatPublishedTime(item.publishedAt)}</p>
                <p>Trust signal: source-linked and refresh-validated feed item</p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span>Source: {item.source}</span>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:underline"
                >
                  Open source <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {!loading && filtered.length === 0 ? (
          <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-sm text-gray-600 dark:text-gray-300">
            No matching updates for current filters. Try broadening your search.
          </div>
        ) : null}

        <div className="mt-8 text-sm text-gray-600 dark:text-gray-300">
          Need deeper context? Visit the <Link href="/blog" className="text-brand-600 dark:text-brand-400 hover:underline">detailed blog section</Link> for long-form explainers.
        </div>
      </section>
    </MainLayout>
  );
}
