var express = require("express");
var router = express.Router();

const data = require("../balls.json");


/* GET users listing. */
router.get("/", function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(data);
});

router.get("/balls/:manufacturer", function (req, res) {
  res.header("Content-Type", "application/json");

  for (i = 0; i < data.length; i++) {
    if (data[i].Manufacturer.toUpperCase() == req.params.manufacturer.toUpperCase()) {
      res.send(data[i].Balls);
    }
  }
});

router.get("/balls/covers/:coverstock", function (req, res) {
  res.header("Content-Type", "application/json");

  let arrayOfBalls = [];

  let coverstock = req.params.coverstock.toUpperCase();
  for (i = 0; i< data.length; i++) {
    for (j = 0; j < data[i].Balls.length; j++) {
      if (data[i].Balls[j].Specs.Coverstock.toUpperCase() == coverstock){
        arrayOfBalls.push(data[i].Balls[j])
      }
    }
  }
  res.send(arrayOfBalls);
});

module.exports = router;
