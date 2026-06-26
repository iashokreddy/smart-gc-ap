import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function VeligondaPage() {
  return (
    <PortalPageTemplate
      title="Veligonda Project"
      titleTe="వెలిగొండ ప్రాజెక్ట్"
      description="Dedicated section for project overview, rehabilitation timelines, maps, milestone tracking, documents, and official progress updates."
      highlights={[
        'Project overview and milestone tracker',
        'Rehabilitation village updates and timelines',
        'Official documents and FAQ section',
        'Photo evidence and map-linked project points',
      ]}
      ctaLabel="View Project Map"
      ctaHref="/maps"
      sourceNote="Publish only officially released information; clearly mark unavailable or pending data."
    />
  );
}
