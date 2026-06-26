'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Leaflet must be loaded client-side only
const MapContainer = dynamic(() => import('react-leaflet').then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((m) => m.Popup), { ssr: false });

interface MapPoint {
  id: string;
  lat: number;
  lng: number;
  label: string;
  type: 'hospital' | 'school' | 'road' | 'office' | 'project';
}

const SAMPLE_POINTS: MapPoint[] = [
  { id: '1', lat: 15.7375, lng: 79.2656, label: 'Markapuram Town', type: 'office' },
  { id: '2', lat: 15.7200, lng: 79.2500, label: 'Government Hospital', type: 'hospital' },
  { id: '3', lat: 15.7450, lng: 79.2800, label: 'Zilla Parishad High School', type: 'school' },
  { id: '4', lat: 15.6900, lng: 79.2400, label: 'Veligonda Dam Site', type: 'project' },
];

interface InteractiveMapProps {
  height?: string;
  points?: MapPoint[];
}

export function InteractiveMap({ height = '400px', points = SAMPLE_POINTS }: InteractiveMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fix Leaflet's default marker icons in Next.js
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require('leaflet');
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl"
        style={{ height }}
      />
    );
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm" style={{ height }}>
      <MapContainer
        center={[15.7375, 79.2656]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>
              <strong>{p.label}</strong>
              <br />
              <span className="capitalize text-gray-500">{p.type}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
