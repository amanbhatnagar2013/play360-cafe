import Link from "next/link";
import games from "@/data/games.json";
import GameCard from "@/components/GameCard";
import AutoSlider from "@/components/AutoSlider";
import GameMarquee from "@/components/GameMarquee";

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
  const top = games.slice(0, 8);
  return (
    <div className="container py-8 space-y-10">
      <section className="space-y-4">
        <AutoSlider slides={slides} />
        <div className="flex gap-4 justify-center mt-4">
          <Link href="/booking" className="btn">Book a Seat</Link>
          <Link href="/platforms/playstation" className="btn">Browse Games</Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Trending Now</h2>
        <GameMarquee items={strip} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Titles</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {top.map((g,i) => <GameCard key={i} {...g} />)}
        </div>
      </section>

      <section className="card">
        <h3 className="text-xl font-semibold mb-2">Visit Play 360</h3>
        <p>32-A, Shakti Khand 2, Ground Floor, Indirapuram, Ghaziabad • Open 12:30 PM – 9:15 PM</p>
        <p>Call/WhatsApp: 8588961662</p>
      </section>
    </div>
  );
}
