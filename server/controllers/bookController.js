const db = require('../db')
const books = require('../models/books')
const getAllBooks =  async (req,res) =>
{
    const genre = req.query.genre;
    const author = req.query.author;
    let where = {};
    if (genre) {
      where.genre = genre;
    }
    if (author) {
      where.author = author;
    }
  
    const Books= await books.findAll({where});
    if(Books&&Books.length&&Books.length>0){
        res.status(200).json({
            Books}) 
        
    }
    else{
        res.status(400).send("no books")
    }
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