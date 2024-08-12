const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    email:{type:String, require:true},
    otp:{type:String, require:true}
}, {timestamps:true, versionKey:false});

const OtpModel=mongoose.model('otps', databaseSchema);
module.exports=OtpModel;

