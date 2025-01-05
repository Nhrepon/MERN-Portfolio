const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    subject:{type:String},
    message:{type:String},
}, {timestamps:true, versionKey:false});

const ContactModel = mongoose.model("contacts", databaseSchema);
module.exports = ContactModel;