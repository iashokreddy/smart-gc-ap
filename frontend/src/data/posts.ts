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
  sections: Array<{
    title: string;
    summary: string;
    blocks: string[];
  }>;
  tags: string[];
  lastUpdated: string;
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
    sections: [
      {
        title: 'Project Scope',
        summary: 'Overview of canal extension and village coverage in the current phase.',
        blocks: [
          'Canal strengthening and branch channel work are focused on improving seasonal distribution.',
          'Priority coverage is given to areas with recurring water stress during crop cycles.',
          'Field-level execution follows department-approved alignment and monitoring checkpoints.',
        ],
      },
      {
        title: 'Expected Public Impact',
        summary: 'How this work can improve farming and local livelihoods.',
        blocks: [
          'Improved irrigation access can stabilize crop planning in kharif/rabi seasons.',
          'Reduced dependence on irregular local water sources in targeted villages.',
          'Potential positive effect on farm productivity when combined with advisory services.',
        ],
      },
      {
        title: 'Verification & Sources',
        summary: 'Cross-check guidance for readers before acting on project updates.',
        blocks: [
          'Readers should verify milestone claims against official department releases.',
          'For administrative decisions, use gazette/public notice copies as primary reference.',
          'This article is informational and should not replace official engineering notices.',
        ],
      },
    ],
    tags: ['Irrigation', 'Infrastructure', 'Rural Development'],
    lastUpdated: '2026-06-26',
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
    sections: [
      {
        title: 'Scholarship Discovery Flow',
        summary: 'Step-by-step approach students can follow to identify suitable support programs.',
        blocks: [
          'Start with eligibility filters: category, academic level, and family income bracket.',
          'Shortlist matching programs and verify timelines from official education portals.',
          'Track application status through designated portals and district education offices.',
        ],
      },
      {
        title: 'Documentation Checklist',
        summary: 'Common document categories frequently needed for student support applications.',
        blocks: [
          'Identity and residence records as required by the active notification.',
          'Academic proof, admission details, and institution-related certificates.',
          'Income/category documents based on scheme eligibility rules.',
        ],
      },
      {
        title: 'Important Caution',
        summary: 'Why students should validate every key detail before submission.',
        blocks: [
          'Scheme rules and deadlines may change through fresh circulars.',
          'Always cross-check in official portals before final submission.',
          'For unresolved issues, escalate through authorized helpdesks only.',
        ],
      },
    ],
    tags: ['Education', 'Scholarships', 'Student Welfare'],
    lastUpdated: '2026-06-26',
  },
];

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
