const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.get('/', (req,res)=>{
  res.render('index', {
    message: "HELLO PUG"
  });
  // res.send("Hello World!!");
});

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
app.use('/index', express.static(path.join(__dirname,'public')));

app.use((err,req,res,next)=>{
  res.status(500)
    .json({
      message: 'ERRO'
    })
});

app.listen(3000, ()=>{
  console.log("EXPRESS started!");
});
