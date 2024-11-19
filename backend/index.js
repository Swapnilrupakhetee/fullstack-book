const express= require('express');
require('dotenv').config //need to import dotenv
const PORT=process.env.PORT || 7001
const app=express();

app.get('/',(req,res)=>{
    res.send('Welcome to the API');
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
