import menu from "@/data/menu.json";

export default function MenuPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Café Menu</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((m,i) => (
          <div key={i} className="card flex justify-between">
            <div>{m.item} {m.veg ? "🟢" : "🔴"}</div>
            <div>₹{m.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
