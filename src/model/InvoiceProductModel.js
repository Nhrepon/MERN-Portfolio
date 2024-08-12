const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, require:true},
    productId:{type:mongoose.Schema.Types.ObjectId, require:true},
    invoiceId:{type:mongoose.Schema.Types.ObjectId, require:true},
    quantity:{type:String, require:true},
    price:{type:String, require:true},
    color:{type:String, require:true},
    size:{type:String, require:true},   
}, {timestamps:true, versionKey:false});

const InvoiceProductModel=mongoose.model('invoiceProducts', databaseSchema);

module.exports=InvoiceProductModel;
