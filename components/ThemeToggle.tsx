'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const isDark = saved ? saved === 'dark' : true;
    setDark(isDark);
    if (isDark) document.documentElement.classList.add('dark');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const root = document.documentElement.classList;
    if (next) {
      root.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="rounded-xl p-2 border border-transparent hover:border-[#333]">
      {dark ? (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M21.64 13A9 9 0 1111 2.36a7 7 0 1010.64 10.64z"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h4v-2H1v2zm10 9h2v-4h-2v4zm7.03-16.03l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM17 13h4v-2h-4v2zM6.76 19.16l-1.79 1.79 1.79 1.79 1.8-1.79-1.8-1.79zM13 1h-2v4h2V1zm3.24 18.16l1.8 1.79 1.79-1.79-1.79-1.79-1.8 1.79z"/>
        </svg>
      )}
    </button>
  );
}
