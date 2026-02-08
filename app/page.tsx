import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="uppercase tracking-widest text-sm text-neutral-300">
            AI Knowledge System
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-brand leading-tight">
            Build Your <br /> Second Brain
          </h1>

          <p className="mt-6 max-w-xl text-neutral-300 text-lg">
            Capture ideas, summarize knowledge, and interact with your thoughts
            using AI. A calm, intelligent space for deep work.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition"
            >
              Open Dashboard
            </Link>

            <a
              href="https://github.com"
              className="px-6 py-3 border border-white/60 rounded-md hover:bg-white/10 transition"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            ["Notes", "Organized knowledge"],
            ["AI", "Smart summaries"],
            ["Search", "Fast retrieval"],
            ["API", "Public access"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="border border-white/10 p-6 rounded-md hover:border-white/30 transition"
            >
              <h3 className="font-brand text-xl">{title}</h3>
              <p className="text-neutral-400 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
