'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

type Props = { lat: number; lng: number; zoom?: number; logoUrl?: string };

export default function CafeMapLeaflet({ lat, lng, zoom = 16, logoUrl = '/logo.png' }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready || !mapRef.current || !(window as any).L) return;
    const L = (window as any).L;

    const map = L.map(mapRef.current, { zoomControl: true }).setView([lat, lng], zoom);

    // Dark minimal tiles (Carto "Dark Matter")
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap & CARTO',
      maxZoom: 19
    }).addTo(map);

    const icon = L.icon({ iconUrl: logoUrl, iconSize: [48, 48], iconAnchor: [24, 48], popupAnchor: [0, -40] });
    const marker = L.marker([lat, lng], { icon }).addTo(map);
    marker.bindPopup('<b>Play 360 Esports Cafe</b><br/>Open 12:30 PM – 9:15 PM');
  }, [ready, lat, lng, zoom, logoUrl]);

  return (
    <div className="relative">
      {/* Leaflet CSS via CDN */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      {/* Leaflet JS via CDN */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
      <div ref={mapRef} className="aspect-video w-full rounded-xl overflow-hidden border border-[#222]" />
    </div>
  );
}
