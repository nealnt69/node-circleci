const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello World! updated now lala test!!!");
    res.end();
  })
  .listen(8080, "0.0.0.0");
