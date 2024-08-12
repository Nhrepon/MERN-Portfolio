const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    brandName:{type:String, require:true, unique:true},
    brandDescription:{type:String},
    brandImage:{type:String, require:true},
    brandCode:{type:String}
}, {timestamps:true, versionKey:false});

const BrandModel=mongoose.model('brands', databaseSchema);
module.exports=BrandModel;