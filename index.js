const myapp = require("./mylibrary/app.js");

let app = myapp.app;
let todoModel = myapp.todoModel;
var todos = [];
var ids = [];
var dates = [];

app.listen(process.env.PORT || 3000, function () {
  console.log("Server Started");
});

app
  .route("/")
  .get(function (req, res) {
    todos = [];
    ids = [];
    dates = [];
    todoModel.find(function (err, docs) {
      for (const key in docs) {
        todos.push(docs[key].todo);
        ids.push(docs[key].id);
        dates.push(docs[key].date);
      }
      res.render("index", { todos: todos, ids: ids, dates: dates });
    });
  })
  .post(function (req, res) {
    if (req.body.button == "addButton") {
      todoModel.find(function name(err, docs) {
        var d = new Date();
        if (docs.length == 0) {
          new todoModel({
            id: 0,
            todo: req.body.todoText,
            date: d,
          }).save();
        } else {
          var lastIndex = docs.length - 1;
          var id = 0;
          todoModel.find(function (err, docs) {
            var d = new Date();
            for (const key in docs) {
              if (id <= docs[key].id) {
                id = docs[key].id + 1;
              }
            }
            new todoModel({
              id: id,
              todo: req.body.todoText,
              date: d,
            }).save();
          });
        }
      });
      res.redirect("/");
    } else {
      var value = req.body.button;
      var list = value.split(" ");
      console.log(list);
      todoModel.deleteOne({ id: list[1] }, function (err) {
        res.redirect("/");
      });

      // todoModel.findById(1, function (err, doc) {
      //   // console.log(doc);
      // });
      // todoModel.findById()
    }
  });

app.route("/json").get(function (req, res) {
  todoModel.find(function (err, docs) {
    res.send(docs);
  });
});
