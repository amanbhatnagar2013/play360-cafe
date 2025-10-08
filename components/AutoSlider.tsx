'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

type Slide = { src: string; title: string; tag?: string };

export default function AutoSlider({ slides, intervalMs = 2800 }: { slides: Slide[]; intervalMs?: number }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const paused = useRef(false);

  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }, []);

  const tick = useCallback(() => {
    setIdx((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const start = useCallback(() => {
    stop();
    if (!paused.current) {
      timer.current = setTimeout(tick, intervalMs);
    }
  }, [intervalMs, tick, stop]);

  useEffect(() => {
    start();
    return stop;
  }, [idx, start, stop]);

  return (
    <div
      className="hero slider"
      onMouseEnter={() => { paused.current = true; stop(); }}
      onMouseLeave={() => { paused.current = false; start(); }}
      onTouchStart={() => { paused.current = true; stop(); }}
      onTouchEnd={() => { paused.current = false; start(); }}
    >
      <div className="slides">
        {slides.map((s, i) => (
          <div key={i} className={"slide " + (i === idx ? "active" : "")}>
            <img src={s.src} alt={s.title} />
            <div className="caption">
              <div className="text-sm opacity-70">{s.tag || "Featured"}</div>
              <div className="text-lg font-semibold">{s.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={"dot " + (i === idx ? "active" : "")}
            onClick={() => setIdx(i)}
            aria-label={"Go to slide " + (i + 1)}
          />
        ))}
      </div>
    </div>
  );
}
