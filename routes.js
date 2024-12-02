const router = require("express").Router();

const models = require("./models");

router.get("/", async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.render("index", { title: "Users", users });
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

module.exports = router;