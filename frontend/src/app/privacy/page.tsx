import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function PrivacyPage() {
  return (
    <PortalPageTemplate
      title="Privacy Policy"
      description="This portal handles public-service interactions with privacy safeguards, minimal data collection, and accountable processing practices."
      highlights={[
        'Purpose-limited data collection',
        'Secure processing and access controls',
        'User rights and grievance channels for privacy concerns',
      ]}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
