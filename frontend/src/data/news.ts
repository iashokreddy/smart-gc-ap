export type NewsPriority = 'normal' | 'important' | 'critical';

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  category: 'Development' | 'Schemes' | 'Agriculture' | 'Education' | 'Healthcare' | 'Alerts' | 'General';
  publishedAt: string;
  source: string;
  sourceUrl: string;
  priority: NewsPriority;
};

const now = new Date();
const hoursAgo = (h: number) => new Date(now.getTime() - h * 60 * 60 * 1000).toISOString();

export const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 'fallback-1',
    title: 'District administration review scheduled for irrigation and road connectivity works',
    summary: 'Review includes current execution status, bottlenecks, and next-phase planning priorities.',
    category: 'Development',
    publishedAt: hoursAgo(5),
    source: 'District Updates',
    sourceUrl: 'https://www.ap.gov.in/',
    priority: 'important',
  },
  {
    id: 'fallback-2',
    title: 'Citizen advisory: verify active scheme eligibility on official portals before application',
    summary: 'Public reminder to avoid outdated circulars and use current notifications only.',
    category: 'Schemes',
    publishedAt: hoursAgo(9),
    source: 'Citizen Guidance',
    sourceUrl: 'https://www.ap.gov.in/',
    priority: 'important',
  },
  {
    id: 'fallback-3',
    title: 'Health outreach camp updates published for nearby PHCs and mobile units',
    summary: 'Schedule highlights include screening drives and outreach to rural habitations.',
    category: 'Healthcare',
    publishedAt: hoursAgo(14),
    source: 'Public Health',
    sourceUrl: 'https://hmfw.ap.gov.in/',
    priority: 'normal',
  },
  {
    id: 'fallback-4',
    title: 'Agriculture advisories updated for current seasonal crop planning',
    summary: 'Farmers are advised to cross-check district-level recommendations and weather bulletins.',
    category: 'Agriculture',
    publishedAt: hoursAgo(18),
    source: 'Agriculture Department',
    sourceUrl: 'https://apagrisnet.gov.in/',
    priority: 'normal',
  },
  {
    id: 'fallback-5',
    title: 'Important: education support applications require updated documentation as per latest notice',
    summary: 'Students should re-check deadlines and accepted proof formats before submission.',
    category: 'Education',
    publishedAt: hoursAgo(27),
    source: 'Education Updates',
    sourceUrl: 'https://education.ap.gov.in/',
    priority: 'important',
  },
];
