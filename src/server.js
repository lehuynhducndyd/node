const express = require("express"); //common js
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.hostname;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//static files
app.use(express.static(path.join(__dirname, "public")));
//khai bao route
app.get("/", (req, res) => {
  res.render("sample.ejs");
});
app.get("/abc", (req, res) => {
  res.send("hello world");
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
