import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { POSTS } from '@/data/posts';

export default function BlogPage() {
  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Blog & Insights</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Detailed posts with section-wise breakdowns, block-level points, and source references.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {POSTS.map((post) => (
            <article key={post.id} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800 shadow-sm">
              <p className="text-xs font-medium text-brand-700 dark:text-brand-400">{post.category}</p>
              <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{post.title}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>

              <div className="mt-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Sections</p>
                <ul className="mt-2 text-sm list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1">
                  {post.sections.map((s) => (
                    <li key={s.title}>{s.title}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Updated: {post.lastUpdated}</span>
                <Link href={`/blog/${post.slug}`} className="text-brand-600 dark:text-brand-400 hover:underline font-medium">
                  See more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
