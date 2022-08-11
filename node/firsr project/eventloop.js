const fs = require("fs");

console.log("start"); //1

setTimeout(() => console.log("Set timeout 1"), 0); //6

setImmediate(() => console.log("Set immediate")); //9

fs.readFile("./index.js", () => {
  setTimeout(() => console.log("readfile setTimeout")); //11
  setImmediate(() => console.log("readfile setiiediate")); //10
  process.nextTick(() => console.log("readfile nextTick")); //8
});

Promise.resolve().then(() => {
  console.log("Promise"); //4
  process.nextTick(() => console.log("Promise next Tick")); //5
});

process.nextTick(() => console.log("nExt Tick")); //3
setTimeout(() => console.log("set timeout2"), 0); //7
console.log("end"); //2
