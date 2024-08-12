const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    img1:{type:String, require:true},
    img2:{type:String, require:true},
    img3:{type:String, require:true},
    img4:{type:String, require:true},
    img5:{type:String},
    img6:{type:String},
    img7:{type:String},
    img8:{type:String},

    description:{type:String, require:true},
    color:{type:String, require:true},
    size:{type:String, require:true},

    productId:{type:mongoose.Schema.Types.ObjectId, require:true},

}, {timestamps:true, versionKey:false});

const ProductDetailModel=mongoose.model('productDetails', databaseSchema);  
module.exports=ProductDetailModel;

