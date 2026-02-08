import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Knowledge from "@/models/Knowledge";
import { summarize, autoTag } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body?.content) {
      return NextResponse.json({ error: "Missing `content` in request body" }, { status: 400 });
    }

    const summary = "AI summary temporarily disabled";
    const tags = ["manual", "test"];

    const knowledge = await Knowledge.create({
      ...body,
      summary,
      tags,
    });

    return NextResponse.json(knowledge);
  } catch (err: unknown) {
    console.error("/api/knowledge POST error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  const items = await Knowledge.find().sort({ createdAt: -1 });
  return NextResponse.json(items);
}
