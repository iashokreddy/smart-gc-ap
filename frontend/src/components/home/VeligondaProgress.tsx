import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

const MILESTONES = [
  { label: 'Land acquisition', status: 'done', date: 'Mar 2022' },
  { label: 'Tunnel boring — Phase 1', status: 'done', date: 'Dec 2023' },
  { label: 'Tunnel boring — Phase 2', status: 'progress', date: 'Expected Dec 2024' },
  { label: 'Canal network', status: 'progress', date: 'Expected Jun 2025' },
  { label: 'Command area development', status: 'planned', date: 'Expected 2026' },
  { label: 'Project commissioning', status: 'planned', date: 'Expected 2027' },
];

export function VeligondaProgress() {
  const done = MILESTONES.filter((m) => m.status === 'done').length;
  const pct = Math.round((done / MILESTONES.length) * 100);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Veligonda Project
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Rehabilitation & infrastructure progress tracker
            </p>
          </div>
          <Link
            href="/veligonda"
            className="flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            Full Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          {/* Overall progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-200">Overall Progress</span>
              <span className="font-bold text-brand-700 dark:text-brand-400">{pct}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-brand-700 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Information sourced from official AP government press releases. Published data only.
            </p>
          </div>

          {/* Milestones */}
          <ol className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-4">
            {MILESTONES.map((m) => (
              <li key={m.label} className="ml-5 relative">
                <span
                  className={`absolute -left-7 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full ring-4 ring-white dark:ring-gray-800 ${
                    m.status === 'done'
                      ? 'bg-green-500'
                      : m.status === 'progress'
                      ? 'bg-yellow-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  {m.status === 'done' ? (
                    <CheckCircle className="w-3 h-3 text-white" />
                  ) : (
                    <Clock className="w-3 h-3 text-white" />
                  )}
                </span>
                <div className="flex items-center justify-between">
                  <p
                    className={`text-sm font-medium ${
                      m.status === 'done'
                        ? 'text-gray-800 dark:text-gray-200'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {m.label}
                  </p>
                  <span className="text-xs text-gray-400 ml-4 flex-shrink-0">{m.date}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
