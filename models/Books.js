const mongoose = require("../config/mongoose");
const {Schema} = mongoose;
const {Types} = Schema;

const bookSchema = new Schema ({
    title:{
       type: String,
       trim: true,
       required: "Enter title of the book"
    },
    author:{
        type:String,
        trim: true,
        required: "Enter the name of the author"
    },
    year:{
        type:Number,
        required: "Enter the year of the book"
    },
    location:{
        type:String,
        trim: true,
        required: "Enter location of book setting"
    },
    paragraph:{
        type:String,
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

