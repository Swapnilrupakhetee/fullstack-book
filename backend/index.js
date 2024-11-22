const express= require('express');
const dotenv=require('dotenv').config(); //need to import dotenv
const PORT=process.env.PORT 

const dbConnect=require('../backend/services/dbConnect')
const router=require('router');
const bookRoutes =require('./routes/bookRoutes')

//Initializing the express app
const app=express();


//Connecting to the database
dbConnect(); 

//Middlewares
app.use(express.json());  //without parsing the value from req.body and res.body will show as undefined


//Routes
app.use("/api/book",bookRoutes)


app.get('/',(req,res)=>{
    res.send('Welcome to the API');
})



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

