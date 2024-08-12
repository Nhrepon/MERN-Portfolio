const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String, require:true},
    price:{type:String, require:true},
    image:{type:String, require:true},

    productId:{type:mongoose.Schema.Types.ObjectId, require:true},

}, {timestamps:true, versionKey:false});

const ProductSliderModel=mongoose.model('productSliders', databaseSchema);
module.exports=ProductSliderModel;
