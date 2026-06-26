import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function EmergencyPage() {
  return (
    <PortalPageTemplate
      title="Emergency Contacts"
      titleTe="అత్యవసర సంప్రదింపులు"
      description="Quick access to emergency response numbers and district-level helpline points."
      highlights={[
        'Police: 100',
        'Ambulance: 108',
        'Fire: 101',
        'District Helpline: 1800-425-0099',
      ]}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
