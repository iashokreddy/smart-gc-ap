import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function TermsPage() {
  return (
    <PortalPageTemplate
      title="Terms of Use"
      description="Use this portal responsibly and verify critical decisions against official notifications and department communications."
      highlights={[
        'Informational usage guidance',
        'Accuracy and source-verification expectations',
        'Responsible use and legal compliance',
      ]}
      ctaLabel="Back to Home"
      ctaHref="/"
    />
  );
}
