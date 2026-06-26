import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function VolunteersPage() {
  return (
    <PortalPageTemplate
      title="Volunteer Management"
      titleTe="వాలంటీర్ నిర్వహణ"
      description="Register volunteers, assign areas, track participation, and coordinate civic support efforts."
      highlights={[
        'Volunteer registration and approval workflow',
        'Area assignment and task coordination',
        'Attendance and event participation tracking',
        'Training material and performance overview',
      ]}
      ctaLabel="Register as Volunteer"
      ctaHref="/volunteers/register"
    />
  );
}
