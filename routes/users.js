var express = require('express');
var router = express.Router();

var { User } = require('../models')

router.get('/', async(req, res)=> {
  const exUser = await User.findAll();
  res.send(exUser)
})

module.exports = router;
