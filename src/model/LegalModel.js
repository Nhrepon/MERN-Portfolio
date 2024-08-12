const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    type:{type:String, require:true, unique:true},
    description:{type:String, require:true},
}, {timestamps:true, versionKey:false});

const LegalModel=mongoose.model('legal', databaseSchema);
module.exports=LegalModel;