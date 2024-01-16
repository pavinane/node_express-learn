const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Page not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});
server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running " + PORT);
  }
});
