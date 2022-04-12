const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello World router!");
  });

router.post('/register',(req,res)=>{
   res.send(req.body);
})  

module.exports = router;