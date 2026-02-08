import { openai } from "./ai";

export async function getEmbedding(input: string) {
	if (!input) return [] as number[];
	try {
		const res = await openai.embeddings.create({
			model: "text-embedding-3-small",
			input,
		});
		return res.data?.[0]?.embedding || [];
	} catch (err) {
		console.error("embedding error", err);
		return [];
	}
}

export default getEmbedding;
