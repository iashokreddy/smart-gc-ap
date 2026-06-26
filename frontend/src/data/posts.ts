export type PostRecord = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  source: string;
  sourceUrl: string;
  isAIDraft: boolean;
};

export const POSTS: PostRecord[] = [
  {
    id: '1',
    title: 'Irrigation canals improve water access across Markapuram villages',
    slug: 'irrigation-canals-15-villages',
    category: 'Infrastructure',
    date: '2026-06-20',
    excerpt:
      'Recent canal network expansion has improved seasonal water access in multiple villages, based on district-level updates.',
    source: 'District Irrigation Department',
    sourceUrl: 'https://irrigation.ap.gov.in/',
    isAIDraft: false,
  },
  {
    id: '2',
    title: 'Student welfare and scholarship guidance for district learners',
    slug: 'student-scholarship-guidance-markapuram',
    category: 'Education',
    date: '2026-06-18',
    excerpt:
      'A practical guide to scholarship and student support pathways, with references to official education portals.',
    source: 'AP Education Department',
    sourceUrl: 'https://education.ap.gov.in/',
    isAIDraft: true,
  },
];

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
