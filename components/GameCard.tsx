type Props = { title: string; platform: string; tags?: string[]; isNew?: boolean };
export default function GameCard({ title, platform, tags, isNew }: Props) {
  return (<div className="card hover:shadow-glow transition">
    <div className="flex items-center justify-between">
      <div className="font-semibold">{title}</div>
      {isNew && <span className="text-xs px-2 py-1 rounded bg-accent text-black">NEW</span>}
    </div><div className="opacity-70 text-xs mt-1">{platform}</div>
    {tags?.length ? <div className="mt-2 text-xs opacity-80">{tags.join(" • ")}</div> : null}
  </div>);
}
