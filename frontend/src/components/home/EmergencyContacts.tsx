const CONTACTS = [
  { label: 'Police', number: '100' },
  { label: 'Ambulance', number: '108' },
  { label: 'Fire', number: '101' },
  { label: 'Women Helpline', number: '181' },
  { label: 'Child Helpline', number: '1098' },
  { label: 'District Helpline', number: '1800-425-0099' },
];

export function EmergencyContacts() {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-red-50 dark:bg-red-950/20">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold text-red-700 dark:text-red-400 mb-4">Emergency Contacts</h2>
        <div className="flex flex-wrap gap-3">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={`tel:${c.number}`}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{c.label}:</span>
              <span className="text-sm font-bold text-red-600 dark:text-red-400">{c.number}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
