const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static("/dist"));
app.get("*", function(req, res) {
  res.sendfile("/dist/index.html");
});
app.listen(port);
