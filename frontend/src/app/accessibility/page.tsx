import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function AccessibilityPage() {
  return (
    <PortalPageTemplate
      title="Accessibility Statement"
      description="The portal is designed with mobile-first and accessibility-focused principles aligned with WCAG guidelines."
      highlights={[
        'Keyboard and screen-reader conscious structure',
        'Color contrast and responsive layout support',
        'Continuous accessibility improvements',
      ]}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
