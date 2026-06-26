import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function NewsPage() {
  return (
    <PortalPageTemplate
      title="District News"
      titleTe="జిల్లా వార్తలు"
      description="Read categorized updates across district development, government announcements, and public-interest information."
      highlights={[
        'District and state update categories',
        'Development, agriculture, education, healthcare coverage',
        'Clear source attribution and timestamps',
        'Verified-only publication policy',
      ]}
      ctaLabel="Go to Blog"
      ctaHref="/blog"
    />
  );
}
