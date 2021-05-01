const mongoose = require('mongoose');
const DB=process.env.DATABASE;
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connectin succesful throw backend")
}).catch((err)=>{
    console.log(err);
})