const express = require('express'),
router = express.Router(),
Alumni = require('../models/Alumni');

router.get('/alumni/register',(req,res)=>{
    res.send('alumni registration form')
})


module.exports = router;