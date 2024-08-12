const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    categoryName:{type:String, require:true, unique:true},
    categoryDescription:{type:String},
    categoryImage:{type:String, require:true},
    categoryCode:{type:String}
}, {timestamps:true, versionKey:false});

const CategoryModel=mongoose.model('categories', databaseSchema);
module.exports=CategoryModel;