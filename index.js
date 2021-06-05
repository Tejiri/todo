const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function () {
  console.log("Server Started");
});

app
  .route("/")
  .get(function (req, res) {
    res.sendFile(__dirname + "/index.html");
  })
  .post(function (req, res) {
    res.send(req.body.number1);
    console.log(req.body.number1);
  });
