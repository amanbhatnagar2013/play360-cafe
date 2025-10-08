import Link from "next/link";
import games from "../../data/games.json";
import GameCard from "../../components/GameCard";

export default function Home() {
  const top = games.slice(0, 8);
  return (
    <div className="container py-10 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Play 360 Esports Café</h1>
        <p className="opacity-80 max-w-2xl mx-auto">Indirapuram’s gaming hub — PS5/PS4, Xbox, PC, Racing Wheel, café snacks, parties and merch.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/booking" className="btn">Book a Seat</Link>
          <Link href="/store" className="btn">Shop Merch</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Trending Games</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {top.map((g,i) => <GameCard key={i} {...g} />)}
        </div>
      </section>
      <section className="card">
        <h3 className="text-xl font-semibold mb-2">Location & Hours</h3>
        <p>32-A, Shakti Khand 2, Ground Floor, Indirapuram, Ghaziabad</p>
        <p>Open 12:30 PM – 9:15 PM • Call/WhatsApp: 8588961662</p>
      </section>
    </div>
  );
}
