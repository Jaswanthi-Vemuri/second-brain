import { connectDB } from "@/lib/db";
import Knowledge from "@/models/Knowledge";
import KnowledgeCard from "@/components/KnowledgeCard";

export default async function Page({ params }: { params: { id: string } }) {
  await connectDB();
  const item = await Knowledge.findById(params.id).lean();

  if (!item) return <div className="p-8">Item not found.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <KnowledgeCard item={item} />
      <section className="mt-6">
        <h3 className="font-semibold">Content</h3>
        <div className="mt-2 whitespace-pre-wrap text-gray-700">{item.content}</div>
      </section>
    </div>
  );
}