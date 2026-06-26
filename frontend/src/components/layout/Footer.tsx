import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Markapuram Portal</h3>
            <p className="text-sm text-gray-400 mb-3">
              Official digital development portal for Markapuram District, Andhra Pradesh.
            </p>
            <p className="text-xs text-gray-500">
              Information sourced from official Government of Andhra Pradesh websites and district administration.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Citizens</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Government Schemes', href: '/schemes' },
                { label: 'Citizen Services', href: '/services' },
                { label: 'Grievances', href: '/grievances' },
                { label: 'Employment', href: '/employment' },
                { label: 'Agriculture', href: '/agriculture' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development */}
          <div>
            <h4 className="text-white font-semibold mb-3">Development</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Development Dashboard', href: '/dashboard' },
                { label: 'Veligonda Project', href: '/veligonda' },
                { label: 'Interactive Maps', href: '/maps' },
                { label: 'News', href: '/news' },
                { label: 'Media Gallery', href: '/gallery' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <address className="not-italic text-sm space-y-2 text-gray-400">
              <p>Markapuram District Collectorate</p>
              <p>Prakasam District, Andhra Pradesh</p>
              <p>
                <a href="tel:1800-425-0099" className="hover:text-white">
                  Helpline: 1800-425-0099
                </a>
              </p>
              <p>
                <a href="mailto:collector@markapuram.ap.gov.in" className="hover:text-white">
                  collector@markapuram.ap.gov.in
                </a>
              </p>
            </address>
            <div className="mt-4 space-y-1 text-sm">
              <p className="font-medium text-white">Emergency Numbers</p>
              <p>Police: 100 | Ambulance: 108 | Fire: 101</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Markapuram District Administration. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-gray-300">Accessibility</Link>
            <Link href="/disclaimer" className="hover:text-gray-300">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
