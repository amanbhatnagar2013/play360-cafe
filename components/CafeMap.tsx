
'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

type Props = { lat: number; lng: number; zoom?: number; logoUrl?: string };

const MAP_STYLE: any = [
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.attraction', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.government', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.medical', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.park', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.place_of_worship', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.school', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.sports_complex', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }
];

export default function CafeMap({ lat, lng, zoom = 16, logoUrl = '/logo.png' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!ready || !ref.current || !(window as any).google) return;
    const g = (window as any).google;

    const map = new g.maps.Map(ref.current, {
      center: { lat, lng },
      zoom,
      disableDefaultUI: false,
      mapTypeControl: false,
      styles: MAP_STYLE
    });

    new g.maps.Marker({
      position: { lat, lng },
      map,
      title: 'Play 360 Esports Cafe',
      icon: { url: logoUrl, scaledSize: new g.maps.Size(48, 48) }
    });
  }, [ready, lat, lng, zoom, logoUrl]);

  if (!apiKey) {
    const q = encodeURIComponent('Play 360 Esports Cafe, Indirapuram');
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#222]">
        <iframe
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
      <div ref={ref} className="aspect-video w-full rounded-xl overflow-hidden border border-[#222]" />
    </div>
  );
}
