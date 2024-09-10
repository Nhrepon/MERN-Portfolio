const BlogPostCategoryModel = require("../model/BlogPostCategoryModel");
const BlogPostDetailsModel = require("../model/BlogPostDetailsModel");
const BlogPostModel = require("../model/BlogPostModel");


exports.category = async(req, res)=>{
    try {
        const data = await BlogPostCategoryModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"error", message:error});
    }
}

exports.createCategory = async(req, res)=>{
    try {
        const reqBody = req.body;
        const {userId}=req.headers;
        reqBody.userId=userId;
        const data = await BlogPostCategoryModel.create(reqBody);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"error", message:error});
    }
}

exports.createBlogPost = async(req, res)=>{
    try {
        const reqBody = req.body;
        
        const data = BlogPostModel.create({title: reqBody.title, thumbnail:reqBody.thumbnail});
        reqBody.blogPostId = data[0]["_id"];
        const postDetails = BlogPostDetailsModel.create(reqBody.details);
        res.json({status:"success", data:data, details:postDetails});
    } catch (error) {
       res.json({status:"error", message:error});
    }
}