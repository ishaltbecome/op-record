const sequelize = require("./sequelize");
const models = require("./models");

// sequelize.sync({force: true})
//     .then(() => console.log("Database synced"))
//     .catch(err => console.log(err));
    
// models.User.create({
//     username: "admin",
//     password: "admin"
// });

// models.Post.sync({force: true})
//     .then(() => console.log("Database synced"))
//     .catch(err => console.log(err));

// models.Post.create({
//     date: new Date("2024-11-30"),
//     title: "Заголовок статьи",
//     content: "Текст статьи сгенерированный скриптом, который создает запись в БД"
// });

models.Post.bulkCreate([
    {
        date: new Date("2024-12-01"),
        title: "Зимний вечер",
        content: "Снег тихо падает на землю, создавая белоснежный покров. В воздухе витает запах хвои, а вдалеке слышен треск горящего костра. Люди собираются в кругу, делятся историями и смеются, наслаждаясь атмосферой зимнего вечера."
    },
    {
        date: new Date("2024-12-02"),
        title: "Путешествие в горы",
        content: "Пробираясь по узким тропинкам, мы восходим к вершине горы. Каждый шаг требует усилий, но виды, открывающиеся перед нами, стоят того. Снег на склонах сверкает на солнце, а свежий воздух наполняет легкие новыми силами."
    },
    {
        date: new Date("2024-12-03"),
        title: "Летний закат",
        content: "Солнце нестись к горизонту, окрашивая небо в невероятные оттенки оранжевого и розового. Ветер нежно колышет траву, а где-то вдали слышен крик птиц. Этот момент создает ощущение гармонии и уюта, заставляя забыть о повседневной суете."
    }
]);

// models.Post.destroy({
//     where: {
//         id: 2
//     }
// });