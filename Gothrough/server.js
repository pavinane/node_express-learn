const fsPromises = require("fs").promises;
const path = require("path");

// set path using join through directory and file name
//  utf8 : It's make result value make a string

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "File", "sample.txt"),
      "utf8"
    );
    console.log(data);

    // writeFile used to create a new file and conntent
    await fsPromises.writeFile(
      path.join(__dirname, "File", "write.txt"),
      "create write file successfully"
    );
    console.log("Create write file successfully");

    // appendFile used to update the content on existing file or create a new file
    await fsPromises.appendFile(
      path.join(__dirname, "File", "write.txt"),
      "\n\n append can use update the file content or add the data to writefile"
    );
    console.log("Create append file successfully");
    // renamefile used to rename the existing file
    await fsPromises.rename(
      path.join(__dirname, "File", "write.txt"),
      path.join(__dirname, "File", "newWrite.txt")
    );
    console.log("Rename file  create successfully");

    // unlink used to delete the existing file
    // await fsPromises.unlink(path.join(__dirname, "File", "newWrite.txt"));
  } catch (error) {
    console.log(error);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, "File", "sample.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "File", "write.txt"),
//   "create write file successfully",
//   (err) => {
//     if (err) throw err;

//     console.log("Create write file successfully");
//     fs.appendFile(
//       path.join(__dirname, "File", "write.txt"),
//       "\n\n append can use update the file content or add the data to writefile",
//       (err) => {
//         if (err) throw err;
//         console.log("Create append file successfully");

//         fs.rename(
//           path.join(__dirname, "File", "change.txt"),
//           path.join(__dirname, "File", "renamed.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename file  create successfully");
//           }
//         );
//       }
//     );
//   }
// );

//exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`there is a uncaught error : ${err}`);
  process.exit(1);
});
