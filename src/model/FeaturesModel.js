const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    name:{type:String, require:true},
    description:{type:String, require:true},
    image:{type:String, require:true},
}, {timestamps:true, versionKey:false});

const FeaturesModel=mongoose.model('features', databaseSchema);
module.exports=FeaturesModel;
