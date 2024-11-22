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

router.get('/all',async(req,res)=>{
    try{
        const allBooks = await Book.find();
        res.json(allBooks);

    }
    catch(err)
    {
        res.status(500).json({message: err});

    }
})
router.get('/:id',async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        res.json(book);

    }
    catch(err)
    {
        res.status(500).json({message: err});
    }
})

router.put('/:id',async(req,res)=>{
    try{
        console.log(req.params.id);
        console.log(req.body);
        const {id}=req.params;

        const updatedData=req.body;
        const newBook=await Book.findByIdAndUpdate(id,updatedData,{new:true});
        res.json(newBook);

    }
    catch(err)
    {
        res.status(500).json({message: err});
    }

}
)

router.delete("/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deletedBook=await Book.findByIdAndDelete(id);
        res.status(200).json({message:"Book deleted"});
        
    }
    catch(err){
        res.status(500).json({message: err});
    }
})

module.exports=router;
