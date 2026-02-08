import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  console.warn("OPENAI_API_KEY is not set. AI calls will fail without a key.");
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function summarize(content: string) {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Summarize concisely." },
        { role: "user", content },
      ],
    });

    return res?.choices?.[0]?.message?.content ?? "";
  } catch (err: unknown) {
    console.error("AI summarize error:", err);
    throw new Error(err instanceof Error ? err.message : "Failed to summarize");
  }
}

export async function autoTag(content: string) {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Extract 3-5 relevant tags as comma separated words.",
        },
        { role: "user", content },
      ],
    });

    const tagsRaw = res?.choices?.[0]?.message?.content ?? "";
    return tagsRaw.split(",").map((t: string) => t.trim()).filter(Boolean);
  } catch (err: unknown) {
    console.error("AI autoTag error:", err);
    return [];
  }
}
