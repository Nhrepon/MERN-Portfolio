const express=require('express');
const UserController = require('../controller/UserController');
const BlogPostController = require('../controller/BlogPostController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const router=express.Router();




router.post("/userRegistration",UserController.userRegistration);
router.post("/userLogin",UserController.userLogin);
router.post("/userLogout",UserController.userLogout);
router.post("/userVerify/:email",AuthMiddleware ,UserController.userVerify);
router.get("/userProfileRead", AuthMiddleware, UserController.userProfileRead);
router.post("/userProfileUpdate", AuthMiddleware, UserController.userProfileUpdate);
router.post("/userProfileDelete/:id", AuthMiddleware, UserController.userProfileDelete);


// Blog post category router 
router.get("/category", BlogPostController.category);
router.get("/categoryById", BlogPostController.categoryById);
router.get("/categoryDelete/:id", BlogPostController.deleteCategory);
router.post("/updateCategory", BlogPostController.updateCategory);
router.post("/create-category", BlogPostController.createCategory);



//Blog post router
router.post("/createBlogPost", AuthMiddleware, BlogPostController.createBlogPost);
router.get("/deleteBlogPost/:id", AuthMiddleware, BlogPostController.deleteBlogPost);
router.get("/blogList", BlogPostController.blogList);




















module.exports=router;

