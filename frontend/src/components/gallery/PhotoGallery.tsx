import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PhotoGalleryProps {
  limit?: number;
}

const MOCK_PHOTOS = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  src: `https://picsum.photos/seed/markapuram${i + 1}/400/300`,
  alt: `Development photo ${i + 1}`,
  caption: ['Road Construction NH-65', 'School Renovation', 'Health Camp', 'Veligonda Site', 'Canal Work', 'Tree Plantation', 'Job Fair', 'Farmer Meet'][i],
}));

export function PhotoGallery({ limit = 8 }: PhotoGalleryProps) {
  const photos = MOCK_PHOTOS.slice(0, limit);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Photo Gallery</h2>
          <Link
            href="/gallery"
            className="flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl aspect-video bg-gray-200 dark:bg-gray-700 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-white text-xs font-medium">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
