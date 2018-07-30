const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.json({
    message: 'hello world'
  })
});

router.get('/a+r', (req, res)=>{
  res.send('router a?r');
});

module.exports = router;
