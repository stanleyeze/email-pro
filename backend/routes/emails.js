const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/", (req, res) => {
  console.log(req.body);

  //perfore the soting here

  //return sorted
  res.send(req.body.email);
});

router.delete("/:id", (req, res) => {
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

module.exports = router;
