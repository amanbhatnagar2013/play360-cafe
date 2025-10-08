'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import ThemeToggle from "./ThemeToggle";

const NavLink = ({ href, children }: { href: Route; children: React.ReactNode }) => {
  const path = usePathname();
  const active = path === href;
  return (
    <Link href={href} className={"px-2 py-1 rounded-md transition " + (active ? "text-accent" : "hover:text-accent/90")}>
      {children}
    </Link>
  );
};

export function Navbar() {
  return (
    <header className="border-b border-[#1f1f1f] sticky top-0 bg-[#0D0D0D]/80 dark:bg-[#0D0D0D]/80 backdrop-blur z-50">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Play 360" width={40} height={40} />
          <span className="text-lg font-semibold tracking-wide">Play 360 Esports Café</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-sm">
          <NavLink href="/platforms/playstation">PlayStation</NavLink>
          <NavLink href="/platforms/xbox">Xbox</NavLink>
          <NavLink href="/platforms/pc">PC</NavLink>
          <NavLink href="/menu">Menu</NavLink>
          <NavLink href="/store">Store</NavLink>
          <Link href="/booking" className="btn">Book Now</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
