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

router.get("/posts", async (req, res) => {
  try {
    const posts = await models.Post.findAll();
    res.render("posts", { title: "Posts", posts });
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

module.exports = router;