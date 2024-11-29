const mongoose = require('mongoose');

const databaseSchema = mongoose.Schema({
        name: {type: String, default: "NHRepon portfolio"},
        category: {type: String, default: "category"},
        filePath: {type: String, required: true},
    },
    {timestamps:true, versionKey:false});

const FileModel = mongoose.model("files", databaseSchema);

module.exports = FileModel;