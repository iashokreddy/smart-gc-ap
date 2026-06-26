'use client';

import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export function EligibilityCalculator() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ age: '', gender: '', caste: '', occupation: '', income: '' });
  const [results, setResults] = useState<string[] | null>(null);

  const handleCheck = () => {
    // Simple rule-based matching (replace with AI-powered backend call)
    const matched: string[] = [];
    if (form.occupation === 'farmer') matched.push('PM-KISAN', 'MGNREGS');
    if (form.occupation === 'student') matched.push('PM Vishwakarma');
    if (form.occupation === 'unemployed') matched.push('MGNREGS', 'PM SVANidhi');
    if (parseInt(form.age) >= 60) matched.push('Ayushman Bharat PM-JAY');
    if (form.income === 'below_poverty') matched.push('PM Awas Yojana (Gramin)', 'Ayushman Bharat PM-JAY');
    if (form.occupation === 'business') matched.push('PM SVANidhi');
    setResults(matched.length > 0 ? matched : []);
  };

  return (
    <div className="bg-gradient-to-r from-brand-50 to-blue-50 dark:from-brand-950/30 dark:to-blue-950/30 rounded-xl border border-brand-200 dark:border-brand-800 p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">Eligibility Calculator</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Find schemes matching your profile in seconds
            </p>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="sm:ml-auto flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {open ? 'Close' : 'Check Now'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div className="mt-5 pt-5 border-t border-brand-200 dark:border-brand-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {/* Age */}
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-200 mb-1 block">Age</label>
              <input
                type="number"
                min="0"
                max="120"
                placeholder="e.g. 35"
                value={form.age}
                onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-200 mb-1 block">Gender</label>
              <select
                value={form.gender}
                onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </div>

            {/* Caste */}
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-200 mb-1 block">Caste / Category</label>
              <select
                value={form.caste}
                onChange={(e) => setForm((f) => ({ ...f, caste: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Select</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="bc">BC</option>
                <option value="ews">EWS</option>
                <option value="general">General</option>
              </select>
            </div>

            {/* Occupation */}
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-200 mb-1 block">Occupation</label>
              <select
                value={form.occupation}
                onChange={(e) => setForm((f) => ({ ...f, occupation: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Select</option>
                <option value="farmer">Farmer</option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="business">Business</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>

            {/* Income */}
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-200 mb-1 block">Annual Income</label>
              <select
                value={form.income}
                onChange={(e) => setForm((f) => ({ ...f, income: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">Select</option>
                <option value="below_poverty">Below poverty line</option>
                <option value="upto_1l">Up to ₹1 Lakh</option>
                <option value="1l_5l">₹1L – ₹5L</option>
                <option value="above_5l">Above ₹5L</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCheck}
            className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Find Matching Schemes
          </button>

          {results !== null && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              {results.length > 0 ? (
                <>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    {results.length} scheme{results.length !== 1 ? 's' : ''} found for your profile:
                  </p>
                  <ul className="space-y-1">
                    {results.map((r) => (
                      <li key={r} className="text-sm text-brand-700 dark:text-brand-400 flex items-center gap-1">
                        ✓ {r}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 mt-2">
                    * These are indicative results. Please verify eligibility on the official AP government portal.
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No exact matches found. Please visit the official portal or contact your nearest Meeseva center.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
