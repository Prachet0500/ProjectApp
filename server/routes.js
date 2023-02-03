const {Router}=require('express');
const bookController = require('./controllers/bookController')
const route = Router();

route.get('/',(req,res)=>{
    res.send('using library')
})

route.get('/books',bookController.getAllBooks)

route.post('/books',bookController.addBook)


module.exports=route;