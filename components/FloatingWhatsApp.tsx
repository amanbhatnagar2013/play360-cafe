'use client';

export default function FloatingWhatsApp({
  phone = '918588961662',
  message = 'Hi Play 360 — I want to book a seat',
  variant = 'glyph' // 'glyph' (phone only) or 'logo' (bubble)
}: { phone?: string; message?: string; variant?: 'glyph' | 'logo' }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const src = variant === 'logo' ? '/wa-logo.svg' : '/wa-glyph.svg';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50"
    >
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-full grid place-items-center shadow-lg ring-1 ring-black/10 hover:scale-105 active:scale-95 transition"
        style={{ background: 'linear-gradient(180deg,#25D366 0%, #1ebe5d 100%)' }}
      >
        <img src={src} alt="" className="w-6 h-6 md:w-7 md:h-7 select-none pointer-events-none" />
      </div>
    </a>
  );
}
