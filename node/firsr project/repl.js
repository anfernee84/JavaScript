// console.log("before immediate");
// setImmediate(() => console.log("immediate"));
// console.log("after immediate");
// setInterval(() => console.log("interval"), 1000);
// clearInterval();

console.log("Before");
let timeout = setTimeout(() => console.log("Delayed transaction"), 2000);
let immediate = setImmediate(() => console.log("Immediate execution"));
let interval = setInterval(() => {
  console.log("interval execution");
}, 1000);
let ntick = process.nextTick(() => console.log("nextTick"));
// clearTimeout(timeout);
// clearImmediate(immediate);
// clearInterval(interval);

// console.log("after");

// let myint = setInterval(() => console.log("Hello"), 500);

// let http = require("http");
// let server = new http.Server(function (req, res) {}).listen(8080);
// let timer = setInterval(() => console.log(process.memoryUsage()), 1000);
// setTimeout(() => server.close(clearInterval(timer)), 2500);
// // setInterval(() => console.log(process.memoryUsage()), 1000);
// timer.unref();
interval.unref();
