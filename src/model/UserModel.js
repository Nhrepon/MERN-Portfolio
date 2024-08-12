const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    email:{type:String, require:true, unique: true, lowercase:true, trim:true},
    password:{type:String, require:true}

},{
    timestamps:true, versionKey:false
});

const UserModel=mongoose.model('users', databaseSchema);

module.exports = UserModel;