'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FILTER_GROUPS = [
  {
    label: 'Category',
    options: ['All', 'Women', 'Farmers', 'Students', 'Senior Citizens', 'Youth', 'Disabled', 'Housing', 'Employment'],
  },
  {
    label: 'Caste / Community',
    options: ['All', 'SC', 'ST', 'BC', 'Minority', 'EWS', 'General'],
  },
  {
    label: 'Age Group',
    options: ['All', 'Children (0-14)', 'Youth (15-35)', 'Adults (36-60)', 'Senior (60+)'],
  },
  {
    label: 'Gender',
    options: ['All', 'Male', 'Female', 'Transgender'],
  },
];

export function SchemeFilters() {
  const [expanded, setExpanded] = useState<string[]>(['Category']);
  const [selected, setSelected] = useState<Record<string, string>>({});

  const toggle = (group: string) =>
    setExpanded((prev) => prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-900 dark:text-white">
        Filter Schemes
      </div>

      {FILTER_GROUPS.map((group) => (
        <div key={group.label} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
          <button
            onClick={() => toggle(group.label)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            {group.label}
            {expanded.includes(group.label) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {expanded.includes(group.label) && (
            <div className="px-4 pb-3 space-y-1.5">
              {group.options.map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={group.label}
                    value={opt}
                    checked={selected[group.label] === opt || (opt === 'All' && !selected[group.label])}
                    onChange={() => setSelected((prev) => ({ ...prev, [group.label]: opt }))}
                    className="text-brand-600 focus:ring-brand-500"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
