type Item = { src: string; title: string };
export default function GameMarquee({ items }: { items: Item[] }) {
  const row = [...items, ...items];
  return (<div className="marquee"><div className="flex gap-4 animate-marquee">
    {row.map((it, i) => (<div key={i} className="min-w-[220px]">
      <div className="relative rounded-xl overflow-hidden border border-[#222] hover:shadow-glowPink transition">
        <img src={it.src} alt={it.title} className="w-[220px] h-[124px] object-cover" />
        <div className="absolute left-2 bottom-2 text-xs bg-black/50 px-2 py-1 rounded">{it.title}</div>
      </div></div>))}</div></div>);
}
