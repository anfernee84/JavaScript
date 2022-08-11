// function printNumbers(from, to) {
//   let current = from;
//   let timerId = setInterval(function () {
//     console.log(current);
//     if (current == to) timerId.unref();

//     current++;
//   }, 1000);
// }
// printNumbers(5, 10);

// function printNumbers(from, to) {
//   let current = from;
//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) setTimeout(go, 1000);
//     current++;
//   }, 1000);
// }

// printNumbers(5, 10);

// function miltiTimer(start, multiplier, end) {
//   let current = start;
//   let multitimer = setInterval(() => {
//     if (current >= end) {
//       multitimer.unref();
//     }

//     current *= multiplier;
//     console.log(current);
//   }, 1000);
// }

// miltiTimer(2, 5, 1000000);

function multiNUmbers(start, step, finish) {
  let current = start;
  setTimeout(function run() {
    if (current <= finish) {
      console.log(current);
      current *= step;
      setTimeout(run, 1000);
    }
  });
}

multiNUmbers(2, 5, 100000);

function multiInterval(begin, shag, end) {
  let now = begin;
  let miltiplier = setInterval(() => {
    if (now <= end) {
      console.log(now);
      now *= shag;
    }
    miltiplier.unref();
  }, 500);
}

multiInterval(2, 5, 100000);
