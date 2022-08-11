function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  //   allpoints = classPoints.push(yourPoints);
  //   p0sum = 0;
  //   classPoints.forEach((element) => {
  //     p0sum += element;
  //   });
  //   output = yourPoints > (p0sum / allpoints) ? true : false;
  //   return output;
  const average =
    classPoints.reduce((preev, current) => preev + current, yourPoints) /
    (classPoints.length + 1);
  console.log(average);
  console.log(yourPoints > average);
  return yourPoints > average;
}

betterThanAverage([4, 3, 2, 3, 4, 5, 3, 2], 4);

// var min = function (list) {
//   console.log(Math.min(...list));
//   return Math.min(...list);
// };

// var max = function (list) {
//   console.log(Math.max(...list));
//   return Math.max(...list);
// };

function max(arr) {
  l = [...arr].sort((a, b) => b - a)[0];
  console.log(l);
}

const min = (arr) => {
  l = [...arr].sort((a, b) => a - b)[0];
  console.log(l);
};

min([2, 4, 9, 6, -5, 14, -87]);
max([2, 4, 9, 6, -5, 14, -87]);

// function stringToArray(string) {
//   return string.split(" ");
// }

function stringToArray(string) {
  let result = [];
  let split = function foo(string) {
    console.log("start...: " + string); //2

    for (let i = 0; i < string.length; i++) {
      let character = string.charAt(i);
      if (character === " ") {
        let element = string.slice(0, i);
        console.log("before adding to array...: " + element); //3
        result.push(element);
        foo(string.slice(i + 1));
        console.log("before return: " + string); //4
        return;
      }
    }

    console.log("after for loop: " + string);
    result.push(string);
  };

  console.log("before invoking split function: " + string); //1
  split(string);
  console.log(result);
  return result;
}
stringToArray("I love donuts");

// stringToArray("sdfgvd fhjdt ds jhyjtjy sf");

// function grow(x) {
//   const p0 = x.reduce((current, value) => {
//     return current * value;
//   }, 1);
//   console.log(p0);
//   return p0;
// }

const grow = (arr) => console.log(eval(arr.join("*")));

grow([1, 2, 3, 4]);

const greet = (name) => {
  return `Hello, ${name} how are you doing today?`;
};
console.log(greet("Vasya"));

function past(h, m, s) {
  // return h * 3600000 + m * 60000 + s * 1000;
  const setTime = new Date().setHours(h, m, s);
  const midmight = new Date().setHours(0, 0, 0);
  return Math.ceil(setTime - midmight);
}

console.log(past(1, 0, 1));

const opposite = (number) => 0 - number;
console.log(opposite(0));

function countPositivesSumNegatives(input) {
  // if (input == null || !input.length) return [];
  // arr = [0, 0];
  // input.forEach((element) => {
  //   if (element > 0) arr[0]++;
  //   if (element < 0) arr[1] += element;
  // });
  // return arr;

  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce(
    (arr, n) => {
      if (n > 0) arr[0]++;
      if (n > 0) arr[1] += n;
      return arr;
    },
    [0, 0]
  );
}

console.log(
  countPositivesSumNegatives([2, 4, 65, 5, 3, 2, -6, -3, -5, -6, -4])
);

const reverseSeq = (number) => {
  // arr = [];
  // while (number > 0) {
  //   arr.push(number--);
  // }
  // return arr;
  return Array(number)
    .fill(0)
    .map((el, ind) => number - ind);
};

console.log(reverseSeq(5));

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("rsgfgba"));

/////////////////////////////////////////////////////////////////////////////////////////
class SmallestIntegerFinder {
  findSmallestInt(args) {
    // this.args = args;
    // return Math.min(...args);
    // return args.sort((a, b) => a - b)[0];
    return args.reduce((prev, curr) => (prev < curr ? prev : curr));
  }
}
// console.log(SmallestIntegerFinder.findSmallestInt([34, -345, -1, 100]));
let testarr = new SmallestIntegerFinder();
console.log(testarr.findSmallestInt([34, -345, -1, 100]));
//////////////////////////////////////////////////////////////////////////////////////////

const mindigit = (arr) => {
  return Math.min.apply(0, arr);
};

console.log(mindigit([34, -345, -1, 100]));

const getAverage = (...args) => {
  return (
    Array.from(args).reduce((prev, curr) => prev + curr) /
    Array.from(args).length
  );
};
console.log(getAverage(1, 2, 3, 4, 5, 6, 7, 8));
///////////////////////////////////////////////////////////////////////////////////////////
String.prototype.toJadenCase = function () {
  // str = this.toLowerCase().split(" ");

  // for (let i = 0; i < str.length; i++) {
  //   str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  // }

  // return str.join(" ");

  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

/**
 *
 * @param {Array} list
 */
function filter_list(list = []) {
  // Return a new array with the strings filtered out
  return list.filter((val) => typeof val === "number");
}

console.log(filter_list([1, 4, 6, "f", true, null]));

const stringToNumber = function (str) {
  newstr = "";
  for (i of str) {
    // if () {
    //   newstr += i;
    // }
    if (parseInt(i) || i == 0 || i == "-") {
      newstr += i;
    }
    // console.log(i);
  }
  return parseInt(newstr);
};

console.log(stringToNumber("-7"));

function openOrSenior(data) {
  // output = [];
  // for (item of data) {
  //   item[0] >= 55 && item[1] > 7 ? output.push("Senior") : output.push("Open");
  // }
  // return output;
  return data.map(([...args]) =>
    args[0] > 54 && args[1] > 7 ? "Senior" : "Open"
  );
  // return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);

function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(
    (val) => val == "needle"
  )}`;
  // return haystack.findIndex((val) => val == "needle");
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);

function reverseWords(str) {
  // return str.split("").reverse().join("").split(" ").reverse().join(" ");
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

function invert(array = []) {
  return array.map((val) => -val);
}

console.log(invert([1, -2, 3, -4, 5]));

function squareSum(numbers = []) {
  // sum = 0;
  // for (num of numbers) {
  //   sum += Math.pow(num, 2);
  // }
  // return sum;
  return numbers.length == 0
    ? 0
    : numbers.reduce((prev, curr) => prev + Math.pow(curr, 2), 0);
}

console.log(squareSum([16, 14, -17, -13, 16, -4, -17, 9]));
//////////////////////////////е**нутая задача///////////////////////////////////////////
/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/

function SeriesSum(n) {
  // let sum = 1;
  // divider = 1;
  // if (!n) return "0.00";
  // for (let index = 0; index < n - 1; index++) {
  //   divider += 3;
  //   sum += 1 / divider;
  // }
  let s = 0;
  for (i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

console.log(SeriesSum(5));
/////////////////////////////////////////////////////////////////////////////////////////

const XO = (str) => {
  // let x = 0;
  // let o = 0;
  // for (let i of str) {
  //   if (i.toLowerCase() == "x") {
  //     x++;
  //   }
  //   if (i.toLowerCase() == "o") {
  //     o++;
  //   }
  // }
  // return x == o;
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x == "x").length === str.filter((o) => o == "o").length
  );
};
console.log(XO("xxOo"));

const findNextSquare = (sq) => {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
};

console.log(findNextSquare(144));

function fakeBin(x) {
  return x
    .split("")
    .map((elem) => (elem < 5 ? 0 : 1))
    .join("");
}

console.log(fakeBin("45385593107843568"));

function disemvowel(s = "") {
  // dictionary = ["a", "e", "i", "o", "u"];
  // return s
  //   .split("")
  //   .map((elem) => (dictionary.includes(elem.toLowerCase()) ? "" : elem))
  //   .join("");
  return s.replace(/[aeiou]/gi, "");
}

console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));

function DNAStrand(dna) {
  //   newstring = "";
  //   for (item of dna) {
  //     switch (item) {
  //       case "A":
  //         newstring += "T";
  //         break;
  //       case "T":
  //         newstring += "A";
  //         break;
  //       case "C":
  //         newstring += "G";
  //         break;
  //       case "G":
  //         newstring += "C";
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   return newstring;
  // }
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  // return dna
  //   .split("")
  //   .map((elem) => pairs[elem])
  //   .join("");
  return dna.replace(/./gi, (elem) => pairs[elem]);
}

console.log(DNAStrand("ATCG"));

function paperwork(n, m) {
  return !n || !m || n <= 0 || m <= 0 ? 0 : m * n;
}

console.log(paperwork(5, 5));

function nbYear(p0, percent, aug, p) {
  count = 0;
  while (p0 < p) {
    p0 += Math.floor(p0 * (percent / 100) + aug);
    count++;
  }
  console.log(p0);
  return count;
}

console.log(nbYear(1000, 2, 50, 1214));

function getMiddle(s) {
  return s.length % 2 == 0
    ? s.substr(s.length / 2 - 1, 2)
    : s[Math.round(s.length / 2) - 1];

  // return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle("testin"));

function makeUpperCase(str) {
  return str.toUpperCase();
}

function points(games) {
  // your code here
}
