import { MainLayout } from '@/components/layout/MainLayout';
import { EligibilityCalculator } from '@/components/schemes/EligibilityCalculator';

export default function SchemeEligibilityPage() {
  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Scheme Eligibility Checker</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Use this guided tool for indicative matches. Always verify final criteria on official scheme portals.
        </p>
        <div className="mt-8">
          <EligibilityCalculator />
        </div>
      </section>
    </MainLayout>
  );
}
