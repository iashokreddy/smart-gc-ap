import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function BlogPage() {
  return (
    <PortalPageTemplate
      title="Blog & Insights"
      titleTe="బ్లాగ్ మరియు విశ్లేషణలు"
      description="Explore editorial and AI-assisted articles with clear separation between factual reporting and opinion content."
      highlights={[
        'Draft → review → publish editorial workflow',
        'Revision history and source transparency',
        'Opinion labeling for non-factual commentary',
        'Category-wise content browsing',
      ]}
      ctaLabel="Read News"
      ctaHref="/news"
    />
  );
}
