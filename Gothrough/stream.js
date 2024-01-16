const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "File", "bigFile.txt"), {
  encoding: "utf8",
});
const ws = fs.createWriteStream(path.join(__dirname, "File", "newBigFile.txt"));

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// datachunk or pipe  used on user preference

rs.pipe(ws);
