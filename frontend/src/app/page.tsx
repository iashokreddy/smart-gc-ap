import { Suspense } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BreakingNews } from '@/components/home/BreakingNews';
import { DevelopmentDashboardPreview } from '@/components/home/DevelopmentDashboardPreview';
import { FeaturedSchemes } from '@/components/home/FeaturedSchemes';
import { VeligondaProgress } from '@/components/home/VeligondaProgress';
import { LatestPosts } from '@/components/home/LatestPosts';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { InteractiveMap } from '@/components/maps/InteractiveMap';
import { PhotoGallery } from '@/components/gallery/PhotoGallery';
import { QuickServices } from '@/components/home/QuickServices';
import { EmergencyContacts } from '@/components/home/EmergencyContacts';
import { AIChatbot } from '@/components/chatbot/AIChatbot';
import { MainLayout } from '@/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      {/* Accessibility: skip navigation */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <main id="main-content">
        {/* Breaking news ticker */}
        <Suspense fallback={null}>
          <BreakingNews />
        </Suspense>

        {/* Hero */}
        <HeroSection />

        {/* Quick service shortcuts */}
        <QuickServices />

        {/* Development dashboard preview */}
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl" />}>
          <DevelopmentDashboardPreview />
        </Suspense>

        {/* Featured government schemes */}
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl" />}>
          <FeaturedSchemes />
        </Suspense>

        {/* Veligonda Project progress */}
        <Suspense fallback={null}>
          <VeligondaProgress />
        </Suspense>

        {/* Latest blog posts */}
        <Suspense fallback={null}>
          <LatestPosts />
        </Suspense>

        {/* Upcoming events */}
        <Suspense fallback={null}>
          <UpcomingEvents />
        </Suspense>

        {/* Interactive development map */}
        <section className="py-12 px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Development Map
          </h2>
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl" />}>
            <InteractiveMap height="450px" />
          </Suspense>
        </section>

        {/* Photo gallery */}
        <Suspense fallback={null}>
          <PhotoGallery limit={8} />
        </Suspense>

        {/* Emergency contacts */}
        <EmergencyContacts />
      </main>

      {/* Floating AI Chatbot */}
      <AIChatbot />
    </MainLayout>
  );
}
