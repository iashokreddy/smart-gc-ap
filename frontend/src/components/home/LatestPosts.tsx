import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { POSTS } from '@/data/posts';

export function LatestPosts() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Updates</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Verified news and development updates
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                {post.isAIDraft && (
                  <span className="text-xs px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                    AI-assisted draft
                  </span>
                )}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-700 dark:hover:text-brand-400 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                <span>Source: {post.source}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
