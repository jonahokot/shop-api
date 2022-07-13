const express = require('express'),
router = express.Router(),
Facilitator = require('../models/Facilitator');

router.get('/facilitator/register',(req,res)=>{
    res.send('facilitator registration form')
})


module.exports = router;