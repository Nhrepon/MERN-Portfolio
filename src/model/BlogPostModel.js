const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    thumbnail: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, require: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, require: true },
    tags: {type: String},
    url: {type: String},
  },
  { timestamps: true, versionKey: false }
);
const BlogPostModel = mongoose.model("blogPosts", databaseSchema);
module.exports = BlogPostModel;
