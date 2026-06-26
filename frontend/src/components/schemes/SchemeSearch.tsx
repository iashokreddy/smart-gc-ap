'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { CURRENT_SCHEMES } from '@/data/schemes';

const ALL_SCHEMES = CURRENT_SCHEMES.map((s) => ({
  id: s.id,
  slug: s.slug,
  name: s.name,
  category: s.category,
  description: s.description,
  eligibility: s.eligibility,
}));

export function SchemeSearch() {
  const [query, setQuery] = useState('');

  const filtered = ALL_SCHEMES.filter((s) => {
    const q = query.toLowerCase();
    return !q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.eligibility.some((e) => e.toLowerCase().includes(q));
  });

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search schemes by name, category, or eligibility..."
          className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
          aria-label="Search schemes"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {filtered.length} scheme{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* Scheme cards */}
      <div className="space-y-4">
        {filtered.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white">{scheme.name}</h3>
                  <span className="text-xs px-2 py-0.5 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 rounded-full">
                    {scheme.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{scheme.description}</p>
                <div className="flex flex-wrap gap-1">
                  {scheme.eligibility.map((e) => (
                    <span key={e} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={`/schemes/${scheme.slug}`}
                className="flex-shrink-0 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline whitespace-nowrap"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No schemes found for &quot;{query}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
