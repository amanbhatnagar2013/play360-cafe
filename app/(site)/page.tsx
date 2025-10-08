import Link from "next/link";
import games from "../../data/games.json";
import GameCard from "../../components/GameCard";
import AutoSlider from "../../components/AutoSlider";
import GameMarquee from "../../components/GameMarquee";
import dynamic from "next/dynamic";

const CafeMap = dynamic(() => import("../../components/CafeMapLeaflet"), { ssr: false });

const slides = [
  { src: "/games/slide1.png", title: "FIFA 23 — Multiplayer Nights", tag: "PS5" },
  { src: "/games/slide2.png", title: "Modern Warfare II — LAN Party", tag: "PS5" },
  { src: "/games/slide4.png", title: "Gran Turismo 7 — Racing Wheel", tag: "Simulator" },
  { src: "/games/slide5.png", title: "Forza Horizon 5 — Open Roads", tag: "Xbox" },
  { src: "/games/slide7.png", title: "Rocket League — 2v2/3v3", tag: "PC" },
  { src: "/games/slide10.png", title: "EA FC 24 — Weekend Tournaments", tag: "PS5" },
];

const strip = slides.map(s => ({ src: s.src, title: s.title }));

export default function Home() {
  const list = games as any[];
  const top = list.slice(0, 8);
  const newArrivals = list.filter((g:any) => g.isNew).slice(0, 6);

  return (
    <div className="container py-8 space-y-10">
      {/* Hero */}
      <section className="space-y-4">
        <AutoSlider slides={slides} />
        <div className="flex gap-4 justify-center mt-4">
          <Link href="/booking" className="btn">Book a Seat</Link>
          <Link href="/platforms/playstation" className="btn">Browse Games</Link>
        </div>
      </section>

      {/* Trending strip */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Trending Now</h2>
        <GameMarquee items={strip} />
      </section>

      {/* New Arrivals */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold">New Arrivals</h2>
          <Link href="/platforms/playstation" className="text-sm opacity-80 hover:opacity-100">See all</Link>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newArrivals.map((g:any, i:number) => <GameCard key={i} {...g} />)}
        </div>
      </section>

      {/* Quick Book CTA */}
      <section className="card grid md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-1">Quick Book — Seat/Console</h3>
          <p className="opacity-80 text-sm">Call/WhatsApp to check availability and reserve instantly. Online booking with payment is coming soon.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/booking" className="btn">Book Now</Link>
          <a href="https://wa.me/918588961662?text=Hi%20Play%20360%20—%20I%20want%20to%20book%20a%20seat" target="_blank" className="btn">WhatsApp</a>
        </div>
      </section>

      {/* Store Highlights */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Store Highlights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {title: 'Play 360 Tee', price: 599},
            {title: 'Pro Gamer Cap', price: 499},
            {title: 'Speed Mousepad XL', price: 699}
          ].map((p, i) => (
            <div key={i} className="card">
              <div className="font-semibold">{p.title}</div>
              <div className="opacity-70 text-sm">Merch — Coming Soon</div>
              <div className="mt-2">₹{p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Titles */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Titles</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {top.map((g,i) => <GameCard key={i} {...(g as any)} />)}
        </div>
      </section>

      {/* Visit & Map */}
      <section className="card">
        <h3 className="text-xl font-semibold mb-2">Visit Play 360</h3>
        <p>32-A, Shakti Khand 2, Ground Floor, Indirapuram, Ghaziabad • Open 12:30 PM – 9:15 PM</p>
        <p>Call/WhatsApp: 8588961662</p>
      </section>

      <section className="card">
        <h3 className="text-xl font-semibold mb-2">Find Us on Map</h3>
        <CafeMap lat={28.6385} lng={77.3610} logoUrl="/logo.png" />
      </section>
    </div>
  );
}
