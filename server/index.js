const express=require('express');
const sequelize = require('./db');
const libraryRoutes=require('./Routers/bookRoutes')
var bodyParser = require('body-parser');



const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 4000;
app.get('/test',(req,res)=>{
    res.json({ok: true})
})
app.use('/library',libraryRoutes)
 app.listen(PORT,()=>console.log(`server is now running on port ${PORT}`));

sequelize.sync({}).catch(error=>{console.log(error);})

 