import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function VolunteerRegisterPage() {
  return (
    <PortalPageTemplate
      title="Volunteer Registration"
      titleTe="వాలంటీర్ నమోదు"
      description="Complete registration with your area details. Approved volunteers will be notified through official channels."
      highlights={[
        'Registration submission',
        'Approval and assignment lifecycle',
        'Role-based volunteer management in admin panel',
      ]}
      ctaLabel="Back to Volunteers"
      ctaHref="/volunteers"
    />
  );
}
