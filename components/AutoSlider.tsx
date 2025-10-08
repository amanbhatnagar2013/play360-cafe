'use client';
import { useEffect, useRef, useState } from 'react';
type Slide = { src: string; title: string; tag?: string };
export default function AutoSlider({ slides, intervalMs=2800 }: { slides: Slide[]; intervalMs?: number }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setTimeout(() => setIdx((idx + 1) % slides.length), intervalMs);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [idx, intervalMs, slides.length]);

  return (
    <div className="hero slider">
      <div className="slides">
        {slides.map((s, i) => (
          <div key={i} className={"slide " + (i===idx ? "active": "")}>
            <img src={s.src} alt={s.title} />
            <div className="caption">
              <div className="text-sm opacity-70">{s.tag || "Featured"}</div>
              <div className="text-lg font-semibold">{s.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_,i)=> (
          <button key={i} className={"dot " + (i===idx ? "active": "")} onClick={()=>setIdx(i)} aria-label={"Go to slide " + (i+1)} />
        ))}
      </div>
    </div>
  );
}
