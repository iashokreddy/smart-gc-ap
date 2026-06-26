'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SECTORS = [
  { name: 'Roads', completed: 78, inProgress: 15, planned: 7 },
  { name: 'Schools', completed: 85, inProgress: 10, planned: 5 },
  { name: 'Hospitals', completed: 62, inProgress: 25, planned: 13 },
  { name: 'Irrigation', completed: 55, inProgress: 30, planned: 15 },
  { name: 'Housing', completed: 70, inProgress: 20, planned: 10 },
  { name: 'Water', completed: 80, inProgress: 12, planned: 8 },
];

const SUMMARY_STATS = [
  { label: 'Total Projects', value: 524 },
  { label: 'Completed', value: 378 },
  { label: 'In Progress', value: 112 },
  { label: 'Planned', value: 34 },
];

export function DevelopmentDashboardPreview() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Development Dashboard</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sector-wise project completion status</p>
        </div>
        <Link
          href="/dashboard"
          className="flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
        >
          View Full Dashboard <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {SUMMARY_STATS.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center shadow-sm"
          >
            <div className="text-3xl font-extrabold text-brand-700 dark:text-brand-400">{value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={SECTORS} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis unit="%" tick={{ fontSize: 12 }} />
            <Tooltip formatter={(v: number) => `${v}%`} />
            <Bar dataKey="completed" name="Completed" fill="#2563eb" radius={[4, 4, 0, 0]} />
            <Bar dataKey="inProgress" name="In Progress" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="planned" name="Planned" fill="#d1d5db" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-400 mt-2 text-center">
          * Data sourced from district administration. Last updated: June 2026.
        </p>
      </div>
    </section>
  );
}
