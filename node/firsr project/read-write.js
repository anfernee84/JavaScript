// const fs = require("fs");

// console.log("start");

// const file = fs.readFile("./index.js", (error, file) => {
//   console.log(error);
//   console.log("file info", file);
// });
// // console.log(file.toString());
// console.log(file);

// console.log("end");

const fs = require("fs");

// console.log("start");

// let data = null;

// fs.readFile("./index.js", (err, file) => {
//   if (err) {
//     throw err;
//   }
//   data = file;

//   fs.writeFileSync("./file.back", data, (error) => {
//     if (error) throw error;
//   });
// });
fs.open(__filename, "r", (err, file) => console.log("IO!"));
setImmediate(() => console.log("immediate"));
process.nextTick(() => console.log("nextTick"));
