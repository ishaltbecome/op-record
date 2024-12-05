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
  const post = undefined;
  res.render("posts", { title: "Posts", post });
});

router.get("/posts/:inputDate", async (req, res) => {
  try {
    const post = await models.Post.findOne({where: {date: req.params.inputDate}});
    res.render("posts", { title: "Posts", post });
    console.log(post.dataValues);
    
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

module.exports = router;