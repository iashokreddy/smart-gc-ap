import Link from 'next/link';
import { ArrowRight, Users, Clock } from 'lucide-react';
import { CURRENT_SCHEMES } from '@/data/schemes';

const SCHEMES = CURRENT_SCHEMES.slice(0, 3).map((s) => ({
  id: s.id,
  name: s.name,
  nameTe: s.nameTe,
  category: s.category,
  description: s.description,
  deadline: 'Active',
  eligibility: s.eligibility.join(', '),
  href: `/schemes/${s.slug}`,
}));

const CATEGORY_COLORS: Record<string, string> = {
  Women: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  Farmers: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Students: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
};

export function FeaturedSchemes() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Government Schemes</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Find schemes you are eligible for
          </p>
        </div>
        <Link
          href="/schemes"
          className="flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
        >
          All Schemes <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SCHEMES.map((scheme) => (
          <Link
            key={scheme.id}
            href={scheme.href}
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[scheme.category] ?? 'bg-gray-100 text-gray-600'}`}
              >
                {scheme.category}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              {scheme.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-telugu mb-2">
              {scheme.nameTe}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {scheme.description}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" /> {scheme.eligibility}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {scheme.deadline}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Eligibility calculator CTA */}
      <div className="mt-8 p-5 bg-brand-50 dark:bg-brand-950/30 rounded-xl border border-brand-200 dark:border-brand-800 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">Not sure which schemes you qualify for?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Use our AI-powered eligibility calculator to find the right schemes for your profile.
          </p>
        </div>
        <Link
          href="/schemes/eligibility"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Check Eligibility <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
