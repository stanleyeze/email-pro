const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const emails = require("./routes/emails");
const users = require("./routes/users");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/emailpro")
  .then(() => {
    console.log("Connected to mongodb database...");
  })
  .catch((err) => {
    console.log("Could not connect to the database...", err);
  });

//body passer middleware
app.use(express.json());
//app.use(express.urlencoded()); form
app.use(express.static("public"));
app.use(helmet());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan is enambled", config.get("mail"));
}

app.use("/api/emails", emails);
app.use("/api/users", users);

app.listen(3000, () => {
  console.log("listening at port 3000...");
});
