const express=require('express');
const ProductController=require('../controller/ProductController');
const UserController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const router=express.Router();



router.post("/userRegistration",UserController.userRegistration);
router.post("/userLogin",UserController.userLogin);
router.post("/userLogout",UserController.userLogout);
router.post("/userVerify/:email",AuthMiddleware ,UserController.userVerify);
router.get("/userProfileRead", AuthMiddleware, UserController.userProfileRead);
router.post("/userProfileUpdate/:id", AuthMiddleware, UserController.userProfileUpdate);
router.post("/userProfileDelete/:id", AuthMiddleware, UserController.userProfileDelete);


// Blog post router 
router.post("", );



router.post("/createProduct",ProductController.createProduct);
router.get("/readProduct",ProductController.readProduct);
router.post("/updateProduct/:id",ProductController.updateProduct);
router.post("/deleteProduct/:id",ProductController.deleteProduct);
router.get("/brandList", ProductController.brandList);
router.get("/categoryList", ProductController.categoryList);
router.get("/productByBrand/:id", ProductController.productByBrand);
router.get("/productByCategory/:id", ProductController.productByCategory);






















module.exports=router;

