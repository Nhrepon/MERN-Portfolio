const express=require('express');
const UserController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const router=express.Router();



router.post("/userRegistration",UserController.userRegistration);
router.post("/userLogin",UserController.userLogin);
router.post("/userLogout",UserController.userLogout);
router.post("/userVerify/:email",AuthMiddleware ,UserController.userVerify);
router.get("/userProfileRead", AuthMiddleware, UserController.userProfileRead);
router.post("/userProfileUpdate", AuthMiddleware, UserController.userProfileUpdate);
router.post("/userProfileDelete/:id", AuthMiddleware, UserController.userProfileDelete);


// Blog post router 
router.post("", );























module.exports=router;

