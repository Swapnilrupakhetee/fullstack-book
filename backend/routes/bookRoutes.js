const express = require('express')
const router=express.Router() //function to help efficiently manage routes
const Book=require('../models/book');



router.post('/add',async(req,res)=>{
    try{
        console.log(req.body)
       const books=req.body;
       const newBooks=await Book.create(books);
       console.log("Books created")
       res.status(201).json({
        books: newBooks,
        message: 'Book added successfully'
       })


    }
    catch(err){
        console.log("Error: " + err);
        res.status(404).send.json({message: err});
    }
})


module.exports=router;
