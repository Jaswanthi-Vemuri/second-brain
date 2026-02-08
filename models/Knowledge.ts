import mongoose from "mongoose";

const KnowledgeSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    type: {
      type: String,
      enum: ["note", "link", "insight"],
    },
    sourceUrl: String,
    tags: [String],
    summary: String,
    embedding: [Number],
  },
  { timestamps: true }
);

export default mongoose.models.Knowledge ||
  mongoose.model("Knowledge", KnowledgeSchema);
