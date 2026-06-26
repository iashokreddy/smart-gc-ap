import { Calendar, MapPin } from 'lucide-react';

const EVENTS = [
  {
    id: '1',
    title: 'Health Camp — PHC Markapuram',
    date: '2026-06-30',
    location: 'PHC Markapuram',
    type: 'Healthcare',
    color: 'border-red-400',
  },
  {
    id: '2',
    title: 'Farmer Advisory Meet — Kharif Season',
    date: '2026-07-03',
    location: 'Agriculture Dept., Markapuram',
    type: 'Agriculture',
    color: 'border-green-400',
  },
  {
    id: '3',
    title: 'Job Fair — Government Polytechnic',
    date: '2026-07-10',
    location: 'Govt. Polytechnic, Markapuram',
    type: 'Employment',
    color: 'border-blue-400',
  },
];

export function UpcomingEvents() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 container mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {EVENTS.map((event) => (
          <div
            key={event.id}
            className={`bg-white dark:bg-gray-800 rounded-xl border-l-4 ${event.color} border border-gray-200 dark:border-gray-700 p-4 shadow-sm`}
          >
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 block">
              {event.type}
            </span>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{event.title}</h3>
            <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
