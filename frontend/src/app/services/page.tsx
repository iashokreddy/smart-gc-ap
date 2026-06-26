import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function ServicesPage() {
  return (
    <PortalPageTemplate
      title="Citizen Services"
      titleTe="పౌర సేవలు"
      description="Submit grievances, report civic issues, track status, and send suggestions with optional location and media evidence."
      highlights={[
        'Online grievance submission with tracking',
        'Issue categorization and routing',
        'Image upload and location attachment',
        'Citizen feedback and service notifications',
      ]}
      ctaLabel="Raise a Grievance"
      ctaHref="/grievances"
    />
  );
}
