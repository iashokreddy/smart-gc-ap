'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Radio } from 'lucide-react'
import { useLiveNews } from '@/hooks/useLiveNews'
import { formatPublishedTime } from '@/services/newsService'

export function BreakingNews() {
  const { items, important, loading, lastUpdated } = useLiveNews()
  const [index, setIndex] = useState(0)

  const tickerItems = important.length > 0 ? important : items

  useEffect(() => {
    if (!tickerItems.length) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % tickerItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [tickerItems.length])

  useEffect(() => {
    setIndex(0)
  }, [tickerItems.length])

  const activeItem = tickerItems[index]

  return (
    <div className="bg-red-600 text-white text-sm py-2 px-4 flex items-center gap-3 overflow-hidden">
      <div className="flex items-center gap-1.5 flex-shrink-0 font-bold">
        <Radio className="w-3.5 h-3.5 animate-pulse" />
        <span>LATEST</span>
      </div>
      <div className="h-4 w-px bg-red-400 flex-shrink-0" />
      {loading ? (
        <div className="truncate" aria-live="polite" aria-atomic="true">
          Loading latest verified updates...
        </div>
      ) : activeItem ? (
        <Link
          href="/news"
          key={activeItem.id}
          className="animate-fade-in truncate hover:underline"
          aria-live="polite"
          aria-atomic="true"
          title={activeItem.title}
        >
          {activeItem.priority !== 'normal' ? '⚠️ ' : ''}
          {activeItem.title} · {formatPublishedTime(activeItem.publishedAt)}
          {lastUpdated ? ` · refreshed ${formatPublishedTime(lastUpdated.toISOString())}` : ''}
        </Link>
      ) : (
        <div className="truncate" aria-live="polite" aria-atomic="true">
          No updates at the moment. Please check back shortly.
        </div>
      )}
    </div>
  )
}
