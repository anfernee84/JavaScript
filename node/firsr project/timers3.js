// const sayHi = (phrase, who) => {
//   console.log(`${phrase}, ${who}`);
//   //   console.log(timerId);
// };
// let timer = setTimeout(sayHi, 1000, "Hello", "Vasya");
// // clearTimeout(timerId);
// // console.log(timerId);

// let timerId = setInterval(function tick() {
//   console.log("tick");
//   timerId = setTimeout(tick, 2000);
// }, 2000);
// console.log(timerId);
let counter = 0;
const timerId = setInterval(() => {
  console.log("message");
  counter++;
  if (counter === 5) {
    console.log("Done");
    timerId.unref();
  }
}, 1000);
