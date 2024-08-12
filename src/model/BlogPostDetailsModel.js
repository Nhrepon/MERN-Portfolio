const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema({
  blogPostId: { type: mongoose.Schema.Types.ObjectId, require: true },
  details: { type: String },
}, {timestamps:true, versionKey: false});

const BlogPostDetailsModel = ("blogPostDetails", databaseSchema);
module.exports = BlogPostDetailsModel;
