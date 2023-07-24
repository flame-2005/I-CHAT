const mongoose = require('mongoose');
const {Schema} = mongoose;


const ChatsSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    discription: {
        type:String,
        require:true
    },
    font: {
        type:String,
    },
    file: {
        type:String,
    },
    fontWeight: {
        type:String,
    },
    fontStrick: {
        type:String,
    },
    hyperLink: {
        type:String,
    },
    textLink: {
        type:String,
    },
    codeSnippet: {
        type:String,
    },
    codeBlock: {
        type:String,
    },
    bulletList: {
        type:String
    },
    noList: {
        type:String
    },
    date: {
        type:Date,
        default:Date.now
    },
    name:{
        type : String,
    },
    filePath:{
        type : String,
    },
    fileName:{
        type:String
    }
    

  });

module.exports = mongoose.model('Chats',ChatsSchema)