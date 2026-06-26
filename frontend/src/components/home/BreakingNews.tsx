'use client';

import { useEffect, useState } from 'react';
import { Radio } from 'lucide-react';

const MOCK_UPDATES = [
  'New road construction completed on NH-65 stretch — Markapuram to Giddalur',
  'YSR Asara scheme: applications open until July 15, 2026',
  'Veligonda Phase-2 tunneling progress: 87% complete',
  'Upcoming health camp at PHC Markapuram on June 30, 2026',
  'District collector review meeting on irrigation projects — June 28, 2026',
];

export function BreakingNews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % MOCK_UPDATES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white text-sm py-2 px-4 flex items-center gap-3 overflow-hidden">
      <div className="flex items-center gap-1.5 flex-shrink-0 font-bold">
        <Radio className="w-3.5 h-3.5 animate-pulse" />
        <span>LATEST</span>
      </div>
      <div className="h-4 w-px bg-red-400 flex-shrink-0" />
      <div
        key={index}
        className="animate-fade-in truncate"
        aria-live="polite"
        aria-atomic="true"
      >
        {MOCK_UPDATES[index]}
      </div>
    </div>
  );
}
