const mongoose=require('mongoose');
const dotenv =require('dotenv').config();

const dbConnect=async()=>{mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log("The Error is",err);

})
}

module.exports=dbConnect;