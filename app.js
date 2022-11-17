const express = require("express");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("pages/signup");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
