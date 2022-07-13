const express = require('express'),
router = express.Router(),
Service = require('../models/Service')

router.get('/', (req, res) => {
  res.send('It works!');
});

module.exports = router;
