import Link from 'next/link';
import {
  FileText,
  Briefcase,
  AlertCircle,
  MapPin,
  Phone,
  HeartPulse,
  GraduationCap,
  Tractor,
} from 'lucide-react';

const SERVICES = [
  { label: 'Schemes', labelTe: 'పథకాలు', icon: FileText, href: '/schemes', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
  { label: 'Employment', labelTe: 'ఉద్యోగం', icon: Briefcase, href: '/employment', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' },
  { label: 'Grievances', labelTe: 'ఫిర్యాదులు', icon: AlertCircle, href: '/grievances', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' },
  { label: 'Maps', labelTe: 'మ్యాప్స్', icon: MapPin, href: '/maps', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
  { label: 'Healthcare', labelTe: 'ఆరోగ్యం', icon: HeartPulse, href: '/healthcare', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' },
  { label: 'Education', labelTe: 'విద్య', icon: GraduationCap, href: '/education', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' },
  { label: 'Agriculture', labelTe: 'వ్యవసాయం', icon: Tractor, href: '/agriculture', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' },
  { label: 'Emergency', labelTe: 'అత్యవసరం', icon: Phone, href: '/emergency', color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400' },
];

export function QuickServices() {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {SERVICES.map(({ label, icon: Icon, href, color }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-200 text-center leading-tight">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
