import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';

type PortalPageTemplateProps = {
  title: string;
  titleTe?: string;
  description: string;
  highlights?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  sourceNote?: string;
};

export function PortalPageTemplate({
  title,
  titleTe,
  description,
  highlights = [],
  ctaLabel,
  ctaHref,
  sourceNote,
}: PortalPageTemplateProps) {
  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">{title}</h1>
          {titleTe ? <p className="mt-2 text-lg font-telugu text-gray-600 dark:text-gray-300">{titleTe}</p> : null}
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>

          {highlights.length > 0 && (
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-sm text-gray-700 dark:text-gray-200"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {(ctaLabel && ctaHref) && (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>
          )}

          {sourceNote ? (
            <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">{sourceNote}</p>
          ) : null}
        </div>
      </section>
    </MainLayout>
  );
}
