const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    storeId:{type:String, require:true},
    storePassword:{type:String, require:true},
    currency:{type:String, require:true},
    successUrl:{type:String, require:true},
    failUrl:{type:String, require:true},
    cancelUrl:{type:String, require:true},
    ipnUrl:{type:String, require:true},
    initUrl:{type:String, require:true},
}, {timestamps:true, versionKey:false});

const PaymentSettingModel=mongoose.model('paymentSetting', databaseSchema);
module.exports=PaymentSettingModel;
