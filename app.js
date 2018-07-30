const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/', (req,res)=>{
  res.send("Hello World!!");
});

app.get('/world', (req, res)=>{
  res.json({
    message: "Olá"
  })
});

app.use('/hello', routes);

app.listen(3000, ()=>{
  console.log("EXPRESS started!");
});
