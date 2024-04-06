// const express=require('express')
// var bodyParser=require('body-parser')
// const app=express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))

// const mongose=require('mongoose')

/*mongose.connect("mongodb://localhost:27017/Mern")
.then(()=> console.log("Db connected"))
.catch(()=> console.log("Db failed"))
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Author = new Schema({
  name: String,
  Amount: Number,
});

const author = mongoose.model("authors", Author);

module.exports = author;