const express= require('express');
const dotenv=require('dotenv').config(); //need to import dotenv
const PORT=process.env.PORT 
const app=express();


app.get('/',(req,res)=>{
    res.send('Welcome to the API');
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
