const mongoose = require('mongoose');

const databaseSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, require: true},
    categoryName: {type: String, require: true, unique: true},
    categoryDescription:{type:String},
    categoryImage:{type: String}
}, {timestamps: true, versionKey: false});
const BlogPostCategoryModel = mongoose.model('blogPostCategory', databaseSchema);
module.exports = BlogPostCategoryModel;