const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema({
  blogPostId: { type: mongoose.Schema.Types.ObjectId, require: true },
  details: { type: String },
}, {timestamps:true, versionKey: false});

const BlogPostDetailsModel = mongoose.model("blogPostDetails", databaseSchema);
module.exports = BlogPostDetailsModel;
