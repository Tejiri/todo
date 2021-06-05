function server() {
  const express = require("express");

  const app = express();

  app.listen(3000);

  return app;
}

module.exports = {
  server: server(),
};
