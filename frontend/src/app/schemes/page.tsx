import type { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';
import { SchemeSearch } from '@/components/schemes/SchemeSearch';
import { EligibilityCalculator } from '@/components/schemes/EligibilityCalculator';
import { SchemeFilters } from '@/components/schemes/SchemeFilters';

export const metadata: Metadata = {
  title: 'Government Schemes',
  description: 'Find government schemes and benefits you are eligible for in Markapuram District, Andhra Pradesh.',
};

export default function SchemesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Government Schemes
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Search and filter 150+ government schemes available for citizens of Markapuram District.
          </p>
        </div>

        {/* Eligibility calculator banner */}
        <EligibilityCalculator />

        <div className="mt-8 flex flex-col lg:flex-row gap-6">
          {/* Sidebar filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <SchemeFilters />
          </aside>

          {/* Search results */}
          <main className="flex-1 min-w-0">
            <SchemeSearch />
          </main>
        </div>
      </div>
    </MainLayout>
  );
}
