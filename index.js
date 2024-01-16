const logEvents = require("./log");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", (msg) => {
  console.log();
  logEvents(msg);
});
myEmitter.emit("event", "Event emitter is created");
