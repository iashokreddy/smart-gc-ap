import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/layout/MainLayout';
import { POSTS, getPostBySlug } from '@/data/posts';

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
      </article>
    </MainLayout>
  );
}
