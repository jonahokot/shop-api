const express = require('express'),
router = express.Router(),
Course = require('../models/Course')

router.get('/', (req, res) => {
  res.send('It works!');
});

module.exports = router;
