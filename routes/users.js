var express = require("express");
var router = express.Router();

router.get((req, res, next) => {
  console.log("Page Url : ", req.url);
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
