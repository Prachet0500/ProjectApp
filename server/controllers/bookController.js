const db = require('../db')
const books = require('../models/books')
const genre=require("../models/genres")
const {Op}=require('sequelize');
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
    const priceLow=req.query.priceLow||0;
    const priceHigh=req.query.priceHigh||Number.MAX_VALUE;
    where.price={[Op.between]:[priceLow,priceHigh]}
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
    const Genre =await genre.findOne({where:{"genre":req.body.genre}});
    if(Book==null){ 
        const Books = await books.create(req.body);
        if(Genre==null){
            const Genres = await genre.create({genre:req.body.genre});
            Books.message=`new genre ${req.body.genre}created`;
        }
    
        res.status(200).json({Books});
    }
    else{
        res.status(400).send("book already exists")
    }
   

}


module.exports={getAllBooks,addBook};