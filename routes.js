const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Op report");
});

module.exports = router;