const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "ddmmyyy\tHH:MM:SS")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fs.existsSync(path.join(__dirname, "..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", "reqLog.txt"),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

const loggerEvent = (req, res, next) => {
  logEvents(`${req.method}\t ${req.headers.origin}\t${req.path}`);
  console.log(`${req.method} ${req.path}`);
  next();
};

module.exports = { logEvents, loggerEvent };
