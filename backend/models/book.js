const {Schema} = require('mongoose');

const bookSchema=new Schema({
    title:{
        type:String,
        required:true
    }
    ,
    author:{
        type:String,
        required:true
    },
    publicationYear:{
        type:Date,
        required:true
    }
})
module.exports = mongoose.model("Book", bookSchema);