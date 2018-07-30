const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req,res)=>{
  res.send("Hello World!!");
});

// http.createServer(app).listen(3000, ()=>{
//   console.log("EXPRESS STARTED!");
// });

app.listen(3000, ()=>{
  console.log("EXPRESS started!");
});
