export type SchemeRecord = {
  id: string;
  slug: string;
  name: string;
  nameTe: string;
  category: string;
  description: string;
  benefits: string;
  eligibility: string[];
  status: 'active';
  sourceName: string;
  sourceUrl: string;
  lastVerified: string;
};

// Note: Keep only currently active programs and re-verify periodically.
export const CURRENT_SCHEMES: SchemeRecord[] = [
  {
    id: '1',
    slug: 'pm-kisan',
    name: 'PM-KISAN',
    nameTe: 'పీఎం-కిసాన్',
    category: 'Farmers',
    description: 'Income support program for eligible farmer families through periodic direct benefit transfer.',
    benefits: 'Direct income support installments to eligible farmer households.',
    eligibility: ['Farmers', 'Landholding farmer families'],
    status: 'active',
    sourceName: 'PM-KISAN Official Portal',
    sourceUrl: 'https://pmkisan.gov.in/',
    lastVerified: '2026-06-26',
  },
  {
    id: '2',
    slug: 'mgnregs',
    name: 'MGNREGS',
    nameTe: 'ఎంజీఎన్‌ఆర్‌ఈజీఎస్',
    category: 'Employment',
    description: 'Rural employment guarantee program providing wage employment for eligible households.',
    benefits: 'Up to 100 days wage employment per rural household (as per program norms).',
    eligibility: ['Rural adults', 'Job card holders'],
    status: 'active',
    sourceName: 'MGNREGA Official Portal',
    sourceUrl: 'https://nrega.nic.in/',
    lastVerified: '2026-06-26',
  },
  {
    id: '3',
    slug: 'pmay-g',
    name: 'PM Awas Yojana (Gramin)',
    nameTe: 'పీఎం ఆవాస్ యోజన (గ్రామీణ)',
    category: 'Housing',
    description: 'Rural housing support for eligible families under PMAY-G guidelines.',
    benefits: 'Financial assistance for pucca house construction in rural areas.',
    eligibility: ['Rural poor families', 'Program beneficiaries as per SECC/State list'],
    status: 'active',
    sourceName: 'PMAY-G Official Portal',
    sourceUrl: 'https://pmayg.nic.in/',
    lastVerified: '2026-06-26',
  },
  {
    id: '4',
    slug: 'pmjay',
    name: 'Ayushman Bharat PM-JAY',
    nameTe: 'ఆయుష్మాన్ భారత్ పీఎం-జే',
    category: 'Healthcare',
    description: 'Health assurance scheme for eligible families through empanelled hospitals.',
    benefits: 'Cashless health coverage for listed treatments (as per scheme terms).',
    eligibility: ['Eligible beneficiary families'],
    status: 'active',
    sourceName: 'PM-JAY Official Portal',
    sourceUrl: 'https://pmjay.gov.in/',
    lastVerified: '2026-06-26',
  },
  {
    id: '5',
    slug: 'pm-svanidhi',
    name: 'PM SVANidhi',
    nameTe: 'పీఎం స్వనిధి',
    category: 'Livelihood',
    description: 'Working capital loan support for eligible street vendors.',
    benefits: 'Collateral-free working capital loans with digital/payment incentives as applicable.',
    eligibility: ['Street vendors with valid eligibility documents'],
    status: 'active',
    sourceName: 'PM SVANidhi Portal',
    sourceUrl: 'https://pmsvanidhi.mohua.gov.in/',
    lastVerified: '2026-06-26',
  },
  {
    id: '6',
    slug: 'pm-vishwakarma',
    name: 'PM Vishwakarma',
    nameTe: 'పీఎం విశ్వకర్మ',
    category: 'Skill Development',
    description: 'Support package for traditional artisans and craftspeople.',
    benefits: 'Skill training, toolkit support, and concessional credit (as notified).',
    eligibility: ['Eligible traditional artisans and craftspeople'],
    status: 'active',
    sourceName: 'PM Vishwakarma Portal',
    sourceUrl: 'https://pmvishwakarma.gov.in/',
    lastVerified: '2026-06-26',
  },
];

export function getSchemeBySlug(slug: string) {
  return CURRENT_SCHEMES.find((s) => s.slug === slug);
}
