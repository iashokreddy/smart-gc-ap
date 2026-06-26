'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Globe, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Home', labelTe: 'హోమ్', href: '/' },
  {
    label: 'Development',
    labelTe: 'అభివృద్ధి',
    href: '/dashboard',
    children: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Veligonda Project', href: '/veligonda' },
      { label: 'Interactive Map', href: '/maps' },
    ],
  },
  {
    label: 'Citizens',
    labelTe: 'పౌరులు',
    href: '/services',
    children: [
      { label: 'Citizen Services', href: '/services' },
      { label: 'Government Schemes', href: '/schemes' },
      { label: 'Grievances', href: '/grievances' },
    ],
  },
  { label: 'Employment', labelTe: 'ఉద్యోగం', href: '/employment' },
  { label: 'Agriculture', labelTe: 'వ్యవసాయం', href: '/agriculture' },
  {
    label: 'More',
    labelTe: 'మరిన్ని',
    href: '#',
    children: [
      { label: 'Education', href: '/education' },
      { label: 'Healthcare', href: '/healthcare' },
      { label: 'News', href: '/news' },
      { label: 'Blog', href: '/blog' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Volunteers', href: '/volunteers' },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'te'>('en');
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-brand-700 dark:text-brand-400">
          <span className="text-saffron-500">🏛️</span>
          <span className="hidden sm:block">Markapuram Portal</span>
          <span className="sm:hidden">MDP</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-700 dark:hover:text-brand-400 transition-colors"
              >
                {lang === 'te' ? item.labelTe : item.label}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
            className="flex items-center gap-1 text-xs px-2 py-1 border rounded-full border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-brand-500 transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-3 h-3" />
            {lang === 'en' ? 'తె' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Notifications */}
          <button
            className="relative p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Login */}
          <Link
            href="/auth/login"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md bg-brand-600 text-white hover:bg-brand-700 transition-colors"
          >
            Login
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pb-4">
          <nav className="container mx-auto px-4 pt-2 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-gray-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {lang === 'te' ? item.labelTe : item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-brand-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/auth/login"
              className="block px-3 py-2 text-sm font-medium text-brand-600 dark:text-brand-400"
              onClick={() => setMobileOpen(false)}
            >
              Login / Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
