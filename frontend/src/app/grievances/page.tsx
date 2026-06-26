import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function GrievancesPage() {
  return (
    <PortalPageTemplate
      title="Grievances & Civic Issues"
      titleTe="ఫిర్యాదులు మరియు పౌర సమస్యలు"
      description="File civic complaints, monitor progress, and receive status updates from relevant departments."
      highlights={[
        'Create and track grievance tickets',
        'Open / In-progress / Resolved states',
        'Department-level categorization support',
        'Escalation-ready grievance records',
      ]}
      ctaLabel="Go to Citizen Services"
      ctaHref="/services"
    />
  );
}
