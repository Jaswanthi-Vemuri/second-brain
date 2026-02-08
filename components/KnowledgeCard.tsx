import Link from "next/link";

interface KnowledgeCardProps {
  item: {
    _id: string;
    title: string;
    summary: string;
    tags?: string[];
  };
}

export default function KnowledgeCard({ item }: KnowledgeCardProps) {
  return (
    <Link href={`/knowledge/${item._id}`}>
      <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-lime-400 transition cursor-pointer">
        
        <h2 className="font-semibold text-lg group-hover:text-lime-400 transition">
          {item.title}
        </h2>

        <p className="text-sm text-neutral-400 mt-2 line-clamp-3">
          {item.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {item.tags?.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
