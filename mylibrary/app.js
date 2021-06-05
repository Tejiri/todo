const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Tejiri1995:Firefox1995@todo.fioh0.mongodb.net/todo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const todoSchema = new mongoose.Schema({
  id: Number,
  todo: String,
  date: Date,
});

const todoModel = mongoose.model("todo", todoSchema);
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static("public"));

module.exports = {
  app: app,
  todoSchema: todoSchema,
  todoModel: todoModel,
};
