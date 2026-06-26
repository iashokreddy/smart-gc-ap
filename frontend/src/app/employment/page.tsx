import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function EmploymentPage() {
  return (
    <PortalPageTemplate
      title="Employment & Careers"
      titleTe="ఉద్యోగాలు మరియు కెరీర్"
      description="Discover government jobs, private opportunities, apprenticeships, and skill development pathways."
      highlights={[
        'Government and private job listings',
        'Skill training and apprenticeship programs',
        'Career guidance and interview preparation',
        'Resume support and recruitment updates',
      ]}
      ctaLabel="Browse Citizen Services"
      ctaHref="/services"
    />
  );
}
