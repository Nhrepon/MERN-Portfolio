const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String, require:true},
    image:{type:String, require:true},
    code:{type:String, require:true},
    qty:{type:String, require:true},
    price:{type:String, require:true},
    discount:{type:Boolean},
    discountPrice:{type:String},
    star:{type:String},
    stock:{type:String},
    remark:{type:String},
    categoryId:{type:mongoose.Schema.Types.ObjectId, require:true},
    brandId:{type:mongoose.Schema.Types.ObjectId, require:true},

},{timestamps:true, versionKey:false});

const ProductModel=mongoose.model("products", databaseSchema);
module.exports=ProductModel;