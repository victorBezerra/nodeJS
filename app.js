const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

// app.get('/', (req,res)=>{
//   res.send("Hello World!!");
// });

//Aprendendo middleware

app.use( (req, res, next)=>{
  console.log("MIDDLEWARE");
  next();
});

//Fim
app.get('/world', (req, res)=>{
  res.json({
    message: "Olá"
  })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended :false
}));

app.use('/hello', routes);
app.use('/', express.static(path.join(__dirname,'view')));


app.listen(3000, ()=>{
  console.log("EXPRESS started!");
});
