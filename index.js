const path = require("path");
const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");

const routes = require("./routes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));