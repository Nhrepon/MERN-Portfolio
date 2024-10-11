const mongoose  = require("mongoose");
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

exports.categoryById = async(req, res)=>{
    try {
        const {id} = req.params;
        const data = await BlogPostCategoryModel.find({_id:id});
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

exports.deleteCategory = async(req, res)=>{
    try {
        const {id} = req.params;
        const data = await BlogPostCategoryModel.deleteOne({_id:id});
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"error", message:error});
    }
}


exports.updateCategory = async(req, res)=>{
    try {
        const reqBody = req.body;
        const data = await BlogPostCategoryModel.updateOne({_id:reqBody._id}, reqBody);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"error", message:error});
    }
}


exports.createBlogPost = async(req, res)=>{
    //const session = await mongoose.startSession();
    try {
        const reqBody = req.body;
        const {userId}= req.headers;
        
        //await session.startTransaction();
        const data =await BlogPostModel.create({title: reqBody.title, thumbnail:reqBody.thumbnail, tags: reqBody.tags, userId: userId, categoryId: reqBody.categoryId, url: reqBody.url });
        const blogId = data._id;
        const postDetails =await BlogPostDetailsModel.create({blogPostId: blogId , details: reqBody.details});
        //await session.commitTransaction();
        //session.endSession();


        res.json({status:"success", data:data, details:postDetails});
    } catch (error) {
        //await session.abortTransaction();
        //session.endSession();
       res.json({status:"error", message:error});
    }
}



exports.blogList = async(req, res)=>{
    try {
        const joinWithCategory = {$lookup:{
            from:"blogpostcategories",
            localField:"categoryId",
            foreignField:"_id",
            as:"category"
        }}
        const unwindCategory = {$unwind:"$category"}
        const projection = {$project:{
            'userId':0,
            
        }}
        const data = await BlogPostModel.aggregate([
            joinWithCategory,
            unwindCategory,
            projection
        ]);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed", message:error});
    }
}