var express = require('express');
var router = express.Router();

const data = require("../balls.json");

let manufacturers = {"1": ["storm", "ebonite", "brunswick"],}

/* GET users listing. */
router.get('/', function(req, res) {
  res.header("Content-Type",'application/json');
  res.send(data);
});

module.exports = router;
