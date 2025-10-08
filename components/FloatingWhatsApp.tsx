'use client';

export default function FloatingWhatsApp({
  phone = '918588961662',
  message = 'Hi Play 360 — I want to book a seat'
}: { phone?: string; message?: string }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 grid place-items-center hover:scale-105 active:scale-95 transition">
        <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8 fill-white" role="img" aria-hidden="true">
          <path d="M26.11 5.89A13.94 13.94 0 1 0 4.27 22.92L3 29l6.18-1.62A13.92 13.92 0 1 0 26.11 5.89zm-2.1 17.9a11.55 11.55 0 0 1-5.48 2.94 11.6 11.6 0 0 1-9.3-2.11l-.67-.43-3.67.96.98-3.58-.45-.71a11.6 11.6 0 1 1 18.57 2.94z"/>
          <path d="M19.11 17.56c-.27-.13-1.59-.79-1.84-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07s-1.15-.42-2.2-1.35c-.81-.72-1.35-1.62-1.51-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.96.94-.96 2.28s.98 2.65 1.12 2.83c.14.18 1.93 2.95 4.67 4.14.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.59-.65 1.81-1.27.22-.62.22-1.15.16-1.27-.06-.12-.25-.2-.52-.33z"/>
        </svg>
      </div>
    </a>
  );
}
