import mongoose, { Schema, models } from "mongoose";

const modelSchema = new Schema({
  type: { type: String, required: true },
  downloads: { type: Number, required: true, default: 0 },
  likes: { type: Number, required: true, default: 0 },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  featured: { type: Boolean, required: true, default: false },
  icon: { type: String, default: "/snowflake.png" },
  code: {
    type: String,
    required: true,
    default: "CURRENTLY THIS MODEL DOES NOT HAVE ANY CODE",
  },
  useCases: { type: String },
});

const Model = models.Model || mongoose.model("Model", modelSchema);

export default Model;
