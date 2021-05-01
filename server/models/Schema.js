const mongoose = require('mongoose');
const newSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    photo:{
        type:String
    }
})
const MF= new mongoose.model("MF",newSchema);
module.exports=MF;