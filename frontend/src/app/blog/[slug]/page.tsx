import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/layout/MainLayout';
import { POSTS, getPostBySlug } from '@/data/posts';
import { SITE_OWNER } from '@/data/siteOwner';

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-10 max-w-4xl">
        <p className="text-xs font-medium text-brand-700 dark:text-brand-400">{post.category}</p>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">{post.title}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{post.excerpt}</p>

        <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-sm">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Publication Date:</span> {new Date(post.date).toLocaleDateString('en-IN')}
          </p>
          <p className="text-gray-700 dark:text-gray-200 mt-1">
            <span className="font-semibold">Last Updated:</span> {post.lastUpdated}
          </p>
          <p className="text-gray-700 dark:text-gray-200 mt-1">
            <span className="font-semibold">Source:</span> {post.source}
          </p>
          <p className="text-gray-700 dark:text-gray-200 mt-1 break-all">
            <span className="font-semibold">Official Link:</span>{' '}
            <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">
              {post.sourceUrl}
            </a>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {post.isAIDraft
              ? 'AI-assisted draft. Editorial verification recommended before citation.'
              : 'Verified informational summary based on public sources.'}
          </p>
        </div>

        <section className="mt-8 space-y-5">
          {post.sections.map((section, index) => (
            <div key={section.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {index + 1}. {section.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{section.summary}</p>
              <div className="mt-3 grid gap-2">
                {section.blocks.map((block, blockIndex) => (
                  <div key={block} className="rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-3 text-sm text-gray-700 dark:text-gray-200">
                    <span className="font-semibold mr-2">Block {index + 1}.{blockIndex + 1}</span>
                    {block}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div className="mt-8 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-950/20 p-4 text-sm">
          <p className="font-semibold text-gray-900 dark:text-white">Site Owner / Editor</p>
          <p className="mt-1 text-gray-700 dark:text-gray-200">{SITE_OWNER.name}</p>
          <p className="text-gray-700 dark:text-gray-200">Phone: {SITE_OWNER.phone}</p>
          <p className="text-gray-700 dark:text-gray-200">Email: {SITE_OWNER.email}</p>
        </div>
      </article>
    </MainLayout>
  );
}
