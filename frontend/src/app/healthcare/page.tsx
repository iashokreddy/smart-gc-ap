import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function HealthcarePage() {
  return (
    <PortalPageTemplate
      title="Healthcare Services"
      titleTe="ఆరోగ్య సేవలు"
      description="Locate hospitals, health camps, emergency support links, and public health program references."
      highlights={[
        'Hospitals and camp listing support',
        'Emergency numbers and health links',
        'Vaccination and public health updates',
        'Government health program awareness',
      ]}
      ctaLabel="Emergency Contacts"
      ctaHref="/"
    />
  );
}
