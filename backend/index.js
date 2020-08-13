const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const app = express("morgan");

//body passer middleware
app.use(express.json());
//app.use(express.urlencoded()); form
app.use(express.static("public"));
app.use(helmet());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan is enambled", config.get("name"));
}

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/api/list", (req, res) => {
  console.log(req.body);

  //perfore the soting here

  //return sorted
  res.send(req.body.email);
});

app.delete("/api/list/:id", (req, res) => {
  //check if course exists...
  const course = courses.find((c) => c.id === req.params.id);
  if (!course)
    return res.status(400).send("The course with given ID not found!");

  const index = couses.indexOf(course);
  courses.slice(index, 1);

  //perfore the soting here

  //return sorted
  res.send(course);
});

app.listen(3000, () => {
  console.log("listening at port 3000...");
});
