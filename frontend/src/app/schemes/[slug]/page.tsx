import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/layout/MainLayout';
import { CURRENT_SCHEMES, getSchemeBySlug } from '@/data/schemes';

type Params = { slug: string };

export function generateStaticParams() {
  return CURRENT_SCHEMES.map((s) => ({ slug: s.slug }));
}

export default async function SchemeDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const scheme = getSchemeBySlug(slug);
  if (!scheme) return notFound();

  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">{scheme.name}</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400 font-telugu">{scheme.nameTe}</p>

        <div className="mt-4 inline-flex px-3 py-1 rounded-full text-xs font-medium bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400">
          {scheme.category} • Active
        </div>

        <p className="mt-5 text-gray-700 dark:text-gray-200">{scheme.description}</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">Benefits</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{scheme.benefits}</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">Eligibility</h2>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300 list-disc pl-5">
              {scheme.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50 text-sm">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Source:</span> {scheme.sourceName}
          </p>
          <p className="mt-1 text-gray-700 dark:text-gray-200 break-all">
            <span className="font-semibold">Official URL:</span>{' '}
            <a href={scheme.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">
              {scheme.sourceUrl}
            </a>
          </p>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Last Verified: {scheme.lastVerified}</p>
        </div>
      </section>
    </MainLayout>
  );
}
