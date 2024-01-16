const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;
const cors = require("cors");
const { loggerEvent } = require("./middleware/log");
const errorHandler = require("./middleware/errorHandling");

app.use(loggerEvent);

// Cors Origin Resource Sharing

const WhiteList = [
  "http://localhost:3500",
  "http://127.0.0.1:5500",
  "https://www.google.com/",
];

const corsOption = {
  origin: (origin, callback) => {
    if (WhiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowedby CORS"));
    }
  },
  opitonSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use("/", require("./routes/root"));
app.use("/subdir", require("./routes/subDir"));
app.use("/employee", require("./routes/api/employee"));

//  blow code used for get method only
// app.get("/*", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html")); // set a staus code for error page
// });

//  this type of code user for all methods

app.all("/*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html")); // set a staus code for error page
  } else if (req.accepts("json")) {
    res.json({ error: "404 not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

app.get(
  "/oldPage(.html)?",
  (req, res, next) => {
    console.log("page is running");
    next();
  },
  (req, res) => {
    res.send("Next syntax is add");
  }
);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Running ${PORT}`));
