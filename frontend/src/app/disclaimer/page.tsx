import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function DisclaimerPage() {
  return (
    <PortalPageTemplate
      title="Disclaimer"
      description="Portal content is intended for public awareness. Final authority remains with official government orders and department portals."
      highlights={[
        'Official sources take precedence',
        'No guarantee for unpublished/provisional information',
        'Users should verify high-impact decisions independently',
      ]}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
