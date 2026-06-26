import { MainLayout } from '@/components/layout/MainLayout';
import { PhotoGallery } from '@/components/gallery/PhotoGallery';

export default function GalleryPage() {
  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Media Gallery</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Images and visual records from district programs, public events, and development works.
        </p>
        <div className="mt-8">
          <PhotoGallery limit={24} />
        </div>
      </section>
    </MainLayout>
  );
}
