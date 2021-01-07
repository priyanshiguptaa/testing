var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
const mongoose = require('mongoose');
var hsts = require('hsts');
const url =require('./connection');
var passport =require('passport');
var localStrategy =require('passport-local');
const app= express();
app.set("view engine", "ejs");
let ejs = require('ejs');
const router =express.Router;
var dummy = require('./dummyModel');
//var indexRouter = require('./routes/index');

 //app.use("/indexRouter",index);

const restaurantRoute = require('./routes/restaurantRoute');
const userRoute = require('./routes/userRoute');
const atmRoute= require('./routes/atmRoute');



app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Headers', 'Strict-Transport-Security: max-age=5184000');
  next();
});

app.use(hsts({ maxAge: 5184000 }));


      
        
app.get('/', function(req, res){
        res.render("homee.ejs");
    });


app.use('/dummy',dummyRoute);
//<a href="restaurant/restaurantDetails">VEIW ALL RESTAURANTS</a>
module.exports = app;