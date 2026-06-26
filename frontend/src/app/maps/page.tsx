import { MainLayout } from '@/components/layout/MainLayout';
import { InteractiveMap } from '@/components/maps/InteractiveMap';

export default function MapsPage() {
  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Interactive Maps</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Explore villages, roads, schools, hospitals, government offices, and development works.
        </p>
        <div className="mt-8">
          <InteractiveMap height="560px" />
        </div>
      </section>
    </MainLayout>
  );
}
