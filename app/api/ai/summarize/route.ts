import { NextResponse } from "next/server";
import { summarize, autoTag } from "@/lib/ai";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const content: string = body.content || "";

		const summary = await summarize(content);
		const tags = await autoTag(content);

		return NextResponse.json({ summary, tags });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: "Failed to summarize" }, { status: 500 });
	}
}

export async function GET() {
	return NextResponse.json({ message: "POST only" }, { status: 405 });
}
