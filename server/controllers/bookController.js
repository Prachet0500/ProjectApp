const db = require('../db')
const books = require('../models/books')
const getAllBooks =  async (req,res) =>
{
    console.log('books',books)
    const Books= await books.findAll();
    res.status(200).json({
        Books
    })
}
const addBook =  async (req,res) =>
{   const Book = await books.findOne({where:{"bookname":req.body.bookname}});
    if(Book==null){ 
        const Books = await books.create(req.body);
        res.status(200).json({Books});
    }
    else{
        res.status(400).send("book already exists")
    }
   

}


module.exports={getAllBooks,addBook};