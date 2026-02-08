"use client";

import { useEffect, useState } from "react";
import KnowledgeCard from "@/components/KnowledgeCard";

interface KnowledgeItem {
  _id: string;
  title: string;
  summary: string;
  [key: string]: unknown;
}

export default function Dashboard() {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/knowledge")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-10">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">Knowledge Dashboard</h1>
            <p className="text-neutral-400 mt-1">
              Your saved thoughts, enhanced by AI
            </p>
          </div>

          <button className="px-5 py-3 rounded-xl bg-lime-400 text-black font-semibold hover:bg-lime-300 transition">
            + Add Knowledge
          </button>
        </header>

        {/* Content */}
        {loading ? (
          <p className="text-neutral-400">Loading knowledge…</p>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 p-10 text-center text-neutral-400">
            No knowledge yet. Add your first idea ✨
          </div>
        ) : (
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => (
              <KnowledgeCard key={item._id} item={item} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
