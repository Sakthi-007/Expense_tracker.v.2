/*
const express=require('express')
var bodyParser=require('body-parser')

const Author = require("./models/author")
// const mongose=require('mongoose')

// mongose.connect("mongodb://localhost:27017/Mern")
// .then(()=> console.log("Db connected"))
// .catch(()=> console.log("Db failed"))

// const schema=mongose.Schema;
// const Author=new Schema({
//   name:String,
//   email:String

// });
// const authormodel = mongose.model("author",Author)
// console.log(authormodel.find({}.then(data=> console.log(data))));

const app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
const static=express.static("static")
app.use("/",static);

// app.get('/',(req,res)=>{
//     res.send('Hello World')
//     res.json({
//         name:"Sakthi Vignesh",
//     })
// })
// app.post("/hi",(req,res)=>{
//     console.log(req.body)
//     console.log("Onnum varala")
//     res.json({
//         name:req.body.name,
//         date:req.body.date,
//         description:req.body.description,
//         amount:req.body.amount,
//         ...req.body
//     })
// })
app.get("/todos/:id",async(req,res)=>{
    const {id:id} =req.params;
const apiEndpoint = "https://jsonplaceholder.typicode.com/todos";
const address = id;
// Construct the full URL with the address as a query parameter
const fullUrl = `${apiEndpoint}?id=${address}`;
if(id>200)
{
    res.send("NOT found")
}
// Make the GET request using the fetch API
fetch(fullUrl)
  .then(res => {
    // Check if the request was successful (status code 200)
    if (res.ok) {
      // Parse the JSON response
      return res.json();
    } else {
      // Handle errors if the request was not successful
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }
  })
  .then(data => {
    // Process the JSON data
    console.log("Details retrieved successfully:", data);
    res.json(data)
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error("Error fetching data:", error);
  });
})
/*
 app.get("/todos",async(req,res)=>{

try{
    const todos=fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>response.json())
    .then(json => res.json(JSON.stringify(json)))
    //.then((json)=>res.json(json))
}
catch(error){
    res.status(503).json({
        error:"Api Failed"
    })
    }
*/
// // const todos=fetch("https://jsonplaceholder.typicode.com/todos/2")
// // .then((response)=>response.json())
// // .then((json)=>res.json(json))
// //ASYNC and AWAIT 0
// const response=await fetch("https://jsonplaceholder.typicode.com/todos")
// const todos = await response.json()
// res.json(todos)
/*
 })

//Dynamic path number to express
app.get("/todos/:id",async(req,res)=>{
    
    const {id:todoId} =req.params;
    res.json({JSON})
   // res.json(json)
    //ASYNC and AWAIT 0
 /*   const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json()
    res.json(todos)
   */ 
    //})
/*
app.get("/hi",(req,res)=>{
    console.log(req.query)
    console.log("Onnum varala")
res.json(req.query)

    // res.json({
    //     name:req.query.name,
    //     date:req.query.date,
    //     description:req.query.description,
    //     amount:req.query.amount,
        
    // })
})

/*
app.get("*",(req,res)=>{
    res.json({
        name:"Nalla Thambi"
    });
})

app.listen(3500,()=>{
    console.log('Running successfull');
})


*/

// app.post("\authors",aysnc (req,res) => {
// const {name,address}=
//   try {
//   const data = await author.save();
//   res.status(201).json(data);
// }
// author.save().then((data)=>res.status(201).json(data)).catch((error)=>{
//   res.json({
//     error:error.message  })
// })
// })


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Author = require("./models/author");
const cors=require('cors')
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/blogs")
  .then(() => console.log("db connected"))
  .catch(() => console.log("db connection failed"));

const authorModel = Author;

console.log(authorModel.find({}).then((data) => console.log(data)));

app.use(bodyParser.json());
const static = express.static("static");
app.use("/", static);
 app.use(cors())

app.post("/authors", (req, res) => {
  const { name, Amount } = req.body;
  const author = Author({
    name,
    Amount,
  });

  author.save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({
      error: error.message
    }));
});


// app.post("/authors", async(req,res) => {
//   const{id}=req.params;
//   const {name,address}=req.body;

//   const author = await Author.findById(id);
//   if(!author){
//     res.status(404).json({
//       error:"Author not found"
//     });
//     return;
//   }
//   author.name=name ? name:author.name;
//   author.address=address ? address:author.address;
//   await author.save();
//   res.json(author);
// })



/*
app.post("/hi", (req, res) => {
  console.log(req.body);
  res.json({
    name: req.body.name,
    description: req.body.description,
    i_date: req.body.i_date,
    amount: req.body.amount,
  });
});

app.get("/todos", async (req, res) => {
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => response.json())
  //   .then((json) => res.json(json));
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    res.json(todos);
  } catch (error) {
    res.status(503).json({
      error: "API call failed",
    });
  }
});
*//*/
app.get("/todos/:id", async (req, res) => {
  const { id: todoId } = req.params;
  res.status(400).json({ todoId });
});

app.get("", (req, res) => {
  res.json({});
});

/*app.get("/hi", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});*/

app.listen(3000, () => {
  console.log("app running");
});