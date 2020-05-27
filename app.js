const express=require('express');
const app=express();
const mongoose=require('mongoose')
const bodyParser = require("body-parser");
require('dotenv/config')


app.use(bodyParser.json());


//import routes
const postRoute =require('./routes/posts')

//middleware
app.use('/posts',postRoute);

//routes
app.get("/", (req, res) => {
  res.send("We are at home");
});


//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,{ useNewUrlParser: true , useNewUrlParser: true  },()=>{
      console.log('COnnected to mongo');
      
  }
);

//LISTENING
app.listen(process.env.PORT || 3000);