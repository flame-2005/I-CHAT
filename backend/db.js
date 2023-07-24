const multer = require('multer');
var mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inote?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const connectToMongo =  () => {
    mongoose.connect(mongoURI, async() => {
        console.log("connected to mongo successfully")
    })
}
module.exports = connectToMongo;