const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId, require:true},
    userId:{type:mongoose.Schema.Types.ObjectId, require:true},
    color:{type:String, require:true},
    quantity:{type:String, require:true},
    size:{type:String, require:true},
}, {timestamps:true, versionKey:false});

const CartModel=mongoose.model('carts', databaseSchema);
module.exports=CartModel;