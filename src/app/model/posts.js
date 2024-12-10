import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  imgUrl: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.models.posts || mongoose.model("posts", PostsSchema);
