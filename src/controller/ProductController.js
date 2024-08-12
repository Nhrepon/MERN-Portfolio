const BrandModel = require('../model/BrandModel');
const CategoryModel = require('../model/CategoryModel');
const ProductModel=require('../model/ProductModel');


exports.createProduct=async(req, res) => {
    try {
        const reqBody=req.body;
        const data=await ProductModel.create(reqBody);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed",message:error});
    }
    
}



exports.readProduct=async(req, res) => {
    try {
        const data=await ProductModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed",message:error});
    }
    
}






exports.updateProduct=async(req, res) => {
    try {
        const {id}=req.params;
        const reqBody=req.body;
        const data=await ProductModel.updateOne({_id:id},reqBody);
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed",message:error});
    }
    
}





exports.deleteProduct=async(req, res) => {
    try {
        const {id}=req.params;
        const data=await ProductModel.deleteOne({_id:id});
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed",message:error});
    }
    
}




exports.brandList=async(req, res)=>{
    try {

        const data=await BrandModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed", message:error});
    }
}




exports.categoryList=async(req, res)=>{
    try {

        const data=await CategoryModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed", message:error});
    }
}





exports.productByBrand=async(req, res)=>{
    try {
        const brandId=req.params.id;
        const data=await ProductModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed", message:error});
    }
}





exports.productByCategory=async(req, res)=>{
    try {

        const data=await ProductModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed", message:error});
    }
}




exports.b=async(req, res)=>{
    try {

        const data=await ProductModel.find();
        res.json({status:"success", data:data});
    } catch (error) {
        res.json({status:"failed", message:error});
    }
}