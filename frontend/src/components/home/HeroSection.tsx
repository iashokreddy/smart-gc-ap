import Link from 'next/link';
import { ArrowRight, MapPin, Users, TrendingUp, Landmark } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)', backgroundSize: '100px 100px' }} />
      </div>

      {/* Saffron + Green accent stripes (Indian flag colors) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 via-white to-forest-500" />

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-saffron-400" />
            <span className="text-sm text-blue-200">Markapuram District, Andhra Pradesh</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Markapuram{' '}
            <span className="text-saffron-400">Digital</span>{' '}
            Development Portal
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-3 font-telugu">
            మార్కాపురం డిజిటల్ అభివృద్ధి పోర్టల్
          </p>

          <p className="text-base md:text-lg text-blue-200 mb-8 max-w-2xl">
            Your transparent window into district development — government schemes, civic services, employment, and verified public information in Telugu and English.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/schemes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              Explore Schemes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
            >
              Citizen Services
            </Link>
            <Link
              href="/grievances"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest-500 hover:bg-forest-600 text-white font-semibold rounded-lg transition-colors"
            >
              File Grievance
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Landmark, label: 'Government Schemes', value: '150+' },
            { icon: Users, label: 'Registered Citizens', value: '12,000+' },
            { icon: TrendingUp, label: 'Projects Tracked', value: '500+' },
            { icon: MapPin, label: 'Villages Covered', value: '200+' },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-4"
            >
              <Icon className="w-8 h-8 text-saffron-400 flex-shrink-0" />
              <div>
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-xs text-blue-200">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
