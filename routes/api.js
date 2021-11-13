var express = require("express");
var router = express.Router();

const data = require("../balls.json");

let manufacturers = { 1: ["storm", "ebonite", "brunswick"] };

/* GET users listing. */
router.get("/", function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(data);
});

router.get("/balls/:manufacturer", function (req, res) {
  res.header("Content-Type", "application/json");
  for (i = 0; i < data.length; i++) {
    if (data[i].Manufacturer == req.params.manufacturer) {
      console.log(true);
      res.send(data[i].Balls);
    }
  }
});

router.get("/balls/covers/:coverstock", function (req, res) {
  res.header("Content-Type", "application/json");
  let coverstock = req.params.coverstock;

  const foundBalls = {};

  for (let i = 0; i < Object.keys(data).length; i++) {}

  res.send(console.log("Fish"));
});

module.exports = router;
