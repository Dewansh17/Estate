import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  content: { type: Object, required: true },
});

export default mongoose.model("Section", sectionSchema);
