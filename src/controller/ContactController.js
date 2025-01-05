const ContactModel = require("../model/ContactModel");

exports.submitMessage = async (req, res)=>{
    try{
        const reqBody = req.body;
        const data = await ContactModel.create(reqBody);
        res.json({status: "success", data: data});
    }catch (e) {
        res.json({status:"error", message:e.message});
    }
}


exports.messageList = async (req, res)=>{
    try{
        const data = await ContactModel.find();
        res.json({status: "success", data: data});
    }catch (e) {
        res.json({status:"error", message: e.message});
    }
}