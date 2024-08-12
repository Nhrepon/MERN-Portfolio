const BlogPostDetailsModel = require("../model/BlogPostDetailsModel");
const BlogPostModel = require("../model/BlogPostModel");

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