'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { NewsItem } from '@/data/news';
import { getLiveNews } from '@/services/newsService';

const REFRESH_INTERVAL_MS = 8 * 60 * 1000;

export function useLiveNews() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const refresh = useCallback(async () => {
    try {
      setError(null);
      const data = await getLiveNews();
      setItems(data);
      setLastUpdated(new Date());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch latest updates');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, REFRESH_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [refresh]);

  const important = useMemo(
    () => items.filter((item) => item.priority === 'important' || item.priority === 'critical'),
    [items],
  );

  return {
    items,
    important,
    loading,
    error,
    lastUpdated,
    refresh,
  };
}
