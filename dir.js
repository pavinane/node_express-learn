const fs = require("fs");
const path = require("path");

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Create Folder");
  });
}

process.on("uncaughtException", (err) => {
  console.log(`there is a uncaught error : ${err}`);
  process.exit(1);
});
