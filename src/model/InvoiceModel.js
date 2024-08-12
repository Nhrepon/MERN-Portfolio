const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, require:true},
    payable:{type:String, require:true},
    userDetails:{type:String, require:true},
    shippingDetails:{type:String, require:true},

    transactionId:{type:String, require:true},
    validationId:{type:String, require:true},
    paymentStatus:{type:String, require:true},

    deliveryStatus:{type:String, require:true},

    total:{type:String, require:true},
    vat:{type:String, require:true},


}, {timestamps:true, versionKey:false});

const InvoiceModel=mongoose.model('invoices', databaseSchema);
module.exports=InvoiceModel;
