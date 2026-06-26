import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function DashboardPage() {
  return (
    <PortalPageTemplate
      title="District Development Dashboard"
      titleTe="జిల్లా అభివృద్ధి డ్యాష్‌బోర్డ్"
      description="Track sector-wise progress for roads, schools, hospitals, irrigation, water, housing, employment, and village/mandal level indicators."
      highlights={[
        'Roads, schools, hospitals, irrigation, agriculture coverage',
        'Village-wise and mandal-wise progress views',
        'Historical comparisons and trend summaries',
        'Source-based reporting with update timestamps',
      ]}
      ctaLabel="Open Interactive Map"
      ctaHref="/maps"
      sourceNote="Data should be sourced from district administration and department publications."
    />
  );
}
