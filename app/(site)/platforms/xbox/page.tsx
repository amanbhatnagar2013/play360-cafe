import games from "@/data/games.json";
import GameCard from "@/components/GameCard";

export default function Page() {
  const list = games.filter(g => g.platform.toLowerCase().includes("xbox"));
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Xbox Games</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((g,i) => <GameCard key={i} {...g} />)}
      </div>
    </div>
  );
}
