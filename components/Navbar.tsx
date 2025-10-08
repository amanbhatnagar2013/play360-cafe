import Link from "next/link";
import Image from "next/image";
export function Navbar() {
  return (
    <header className="border-b border-[#1f1f1f] sticky top-0 bg-[#0D0D0D]/80 backdrop-blur z-50">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Play 360" width={40} height={40} />
          <span className="text-lg font-semibold tracking-wide">Play 360 Esports Café</span>
        </Link>
        <nav className="ml-auto flex items-center gap-5 text-sm">
          <Link href="/platforms/playstation">PlayStation</Link>
          <Link href="/platforms/xbox">Xbox</Link>
          <Link href="/platforms/pc">PC</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/store">Store</Link>
          <Link href="/booking" className="btn">Book Now</Link>
        </nav>
      </div>
    </header>
  );
}
