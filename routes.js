const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
  req.name = 'Victor'
  console.log("MIDDLEWARE ROUTER",req.name);
  next();
});

router.get('/', (req,res,next) => {
  next(new Error('error'));
});

router.get('/a+r', (req, res)=>{
  res.send('router a?r');
});

router.get('/params/:name', (req, res)=>{
  res.json({
    params: req.params,
    host: req.host,
  })
});

router.post('/body', (req, res)=>{
  res.json(req.body.name)
});

router.get('/res', (req, res) =>{
  res.send('teste');
});

module.exports = router;
