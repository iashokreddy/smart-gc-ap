import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function AgriculturePage() {
  return (
    <PortalPageTemplate
      title="Agriculture Advisory"
      titleTe="వ్యవసాయ సలహాలు"
      description="Access crop advisories, rainfall/weather pointers, market trends, and farmer support references."
      highlights={[
        'Crop and seasonal advisory updates',
        'Market and mandi-related information links',
        'Subsidy and insurance guidance references',
        'Water and disease alert awareness',
      ]}
      ctaLabel="View Government Schemes"
      ctaHref="/schemes"
    />
  );
}
