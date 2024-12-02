const sequelize = require("./sequelize");
const models = require("./models");

// sequelize.sync()
//     .then(() => console.log("Database synced"))
//     .catch(err => console.log(err));
    
models.User.create({
    username: "admin",
    password: "admin"
});

models.Post.create({
    date: new Date(),
    title: "title",
    content: "content"
});