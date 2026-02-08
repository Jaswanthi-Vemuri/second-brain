import { NextResponse } from "next/server";
import Knowledge from "@/models/Knowledge";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();
  const { query } = await req.json();

  const results = await Knowledge.find({
    $text: { $search: query },
  });

  return NextResponse.json({
    answer: results.map(r => r.summary).join("\n"),
    sources: results,
  });
}
