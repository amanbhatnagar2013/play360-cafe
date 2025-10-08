'use client';
import Link from "next/link";
export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/918588961662?text=Hi%20Play%20360%20—%20I%20want%20to%20book%20a%20seat"
      target="_blank"
      className="fixed right-4 bottom-4 z-50 rounded-full bg-accent text-black px-4 py-3 shadow-glow hover:shadow-glowPink transition font-semibold"
      aria-label="Chat on WhatsApp"
    >
      💬 WhatsApp
    </Link>
  );
}
