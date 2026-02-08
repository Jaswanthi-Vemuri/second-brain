"use client";

import { useState } from "react";

export default function KnowledgeForm() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [type, setType] = useState("note");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch("/api/ai/summarize", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, content, type }),
			});
			if (!res.ok) throw new Error("Request failed");
			const data = await res.json();
			// keep UX simple: notify user and clear form
			alert("Saved — summary and tags returned\n" + JSON.stringify(data));
			setTitle("");
			setContent("");
			setType("note");
		} catch (err) {
			console.error(err);
			alert("Failed to save");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label className="block text-sm font-medium">Title</label>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="mt-1 block w-full rounded-md border px-3 py-2"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Content</label>
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					rows={6}
					className="mt-1 block w-full rounded-md border px-3 py-2"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Type</label>
				<select
					value={type}
					onChange={(e) => setType(e.target.value)}
					className="mt-1 block w-full rounded-md border px-3 py-2"
				>
					<option value="note">Note</option>
					<option value="link">Link</option>
					<option value="insight">Insight</option>
				</select>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md"
				>
					{loading ? "Saving..." : "Save"}
				</button>
			</div>
		</form>
	);
}
