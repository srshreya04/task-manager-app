const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs"); // Set EJS as the template engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = []; // Array to store tasks

// Home route
app.get("/", (req, res) => {
  res.render("index", { tasks });
});

// Add a task
app.post("/add", (req, res) => {
  const task = req.body.task;
  if (task) tasks.push(task);
  res.redirect("/");
});

// Delete a task
app.post("/delete", (req, res) => {
  const taskIndex = req.body.taskIndex;
  if (taskIndex !== undefined) tasks.splice(taskIndex, 1);
  res.redirect("/");
});

// Server listens on the provided port (Railway sets PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
