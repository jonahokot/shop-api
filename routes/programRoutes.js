const express = require('express'),
router = express.Router(),
Program = require('../models/Program');

router.get('/program/register',(req,res)=>{
    res.send('program registration form')
})


module.exports = router;