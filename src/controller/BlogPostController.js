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



exports.deleteBlogPost = async(req, res)=>{
    //const session = await mongoose.startSession();
    try {
        const {id} = req.params;
        const data = await BlogPostModel.deleteOne({_id:id});
        const postDetails =await BlogPostDetailsModel.deleteOne({blogPostId:id});


        res.json({status:"success", data:data, details: postDetails});
        
        
    } catch (error) {
        
       res.json({status:"error", message:error});
    }
}



exports.blogList = async(req, res)=>{
    try {
        const joinWithDetails = {$lookup:{
            from:"blogpostdetails",
            localField:"_id",
            foreignField:"blogPostId",
            as:"details"
        }}
        const unwindDetails = {$unwind:"$details"}

        const joinWithCategory = {$lookup:{
                from:"blogpostcategories",
                localField:"categoryId",
                foreignField:"_id",
                as:"category"
            }}
        const unwindCategory = {$unwind:"$category"}

        const joinWithUser = {$lookup:{
                from:"profiles",
                localField:"userId",
                foreignField:"userId",
                as:"user"
            }}
        const unwindUser = {$unwind:"$user"}

        const projection = {$project:{
            'title':1,
            'thumbnail':1,
            'tags':1,
            'url':1,
            'createdAt':1,
            'updatedAt':1,
            'details.details':1,
            'category.categoryName':1,
            'category.categoryDescription':1,
            'category.categoryImage':1,
            'user.userName':1,

        }}
        const data = await BlogPostModel.aggregate([
            joinWithDetails,
            unwindDetails,
            joinWithCategory,
            unwindCategory,
            joinWithUser,
            unwindUser,
            projection,
            { $sort : { updatedAt : -1 } }
        ]);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed", message:error});
    }
}







exports.singleBlog = async (req, res)=>{
    try
    {
        const {url} = req.params;
        const matchStage = {$match:{url:url}}
        const joinWithDetails = {$lookup:{
                from:"blogpostdetails",
                localField:"_id",
                foreignField:"blogPostId",
                as:"details"
            }}
        const unwindDetails = {$unwind:"$details"}

        const joinWithCategory = {$lookup:{
                from:"blogpostcategories",
                localField:"categoryId",
                foreignField:"_id",
                as:"category"
            }}
        const unwindCategory = {$unwind:"$category"}

        const joinWithUser = {$lookup:{
                from:"profiles",
                localField:"userId",
                foreignField:"userId",
                as:"user"
            }}
        const unwindUser = {$unwind:"$user"}

        const projection = {$project:{
                'title':1,
                'thumbnail':1,
                'tags':1,
                'url':1,
                'createdAt':1,
                'updatedAt':1,
                'details.details':1,
                'category.categoryName':1,
                'category.categoryDescription':1,
                'category.categoryImage':1,
                'user.userName':1,

            }}
        const data = await BlogPostModel.aggregate([
            matchStage,
            joinWithDetails,
            unwindDetails,
            joinWithCategory,
            unwindCategory,
            joinWithUser,
            unwindUser,
            projection,
        ]);
        if (!data) {
            return res.status(404).json({ status: "error", message: "Blog post not found" });
        }
        res.json({ status: "success", data:data });
    } catch (e) {
        res.status(500).json({ status: "error", message: e.message });
    }

}

