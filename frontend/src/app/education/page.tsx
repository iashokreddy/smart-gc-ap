import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function EducationPage() {
  return (
    <PortalPageTemplate
      title="Education Resources"
      titleTe="విద్యా వనరులు"
      description="Find information about schools, scholarships, hostels, exams, and academic support pathways."
      highlights={[
        'Schools and college information blocks',
        'Scholarship and student support references',
        'Career and competitive exam guidance',
        'Learning resource directory',
      ]}
      ctaLabel="Check Student Schemes"
      ctaHref="/schemes"
    />
  );
}
