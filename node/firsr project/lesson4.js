// const autors = {
//   kiwi: 4,
//   chucha: 6,
//   vasya: 2,
//   dodik: 7,
// };

// const ratings = Object.entries(autors);
// for (const [name, rating] of ratings) {
//   // const [name, rating] = entry;
//   console.log(name, rating);
// }

// const { kiwi, chucha, vasya, dodik } = autors;

// console.log(kiwi, chucha, vasya, dodik);

const doMath = (a, b, callback) => callback(a, b);
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(doMath(3, 5, add));
console.log(doMath(5, 7, mul));
console.log(doMath(6, 2, sub));
console.log(doMath(4, 2, div));
//
//
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));
//
//
//
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Mango", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest("Poly", function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});
//
//
//
const carChecking = (car, callback) => {
  console.log(`Checking a car ${car}`);
  console.log(callback(car));
};

carChecking("Porshe", function carWashing(car) {
  return `Car ${car} is washing`;
});

carChecking("Lanos", function carDrying(car) {
  return `Car ${car} is drying`;
});
//
//
//
const processCall = (recepient, onAvailable, onNotAvailable) => {
  const isAvailable = Math.random() > 0.5;
  if (!isAvailable) {
    onNotAvailable(recepient);
    return;
  }
  onAvailable(recepient);
};

const takeCall = (name) => {
  console.log(`Connecting with ${name}`);
};

const activateAnsweringMashine = (name) => {
  console.log(`${name} is busy now. Activating answer mashine`);
};

const leavingHoloMessage = (name) => {
  console.log(`Writing a holomessage for ${name}`);
};

// processCall("Vasya", takeCall, leavingHoloMessage);
// processCall("Onufriy", takeCall, activateAnsweringMashine);
//
//
//
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    // return this.pizzas.includes(pizzaName)
    //   ? onSuccess(pizzaName)
    //   : onError(
    //       `There is no pizza with a name ${pizzaName} in the assortment.`
    //     );
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
//
//
//
function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach((item) => {
    console.log(item);
    if (item > value) {
      filteredNumbers.push(item);
    }
  });
  return filteredNumbers;
}
console.log(filterArray([12, 24, 8, 41, 76], 20));
//
//
//
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));
//
//
//
const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};
const numbers = [5, 10, 15, 20, 25];
numbers.forEach(logMessage);
//
//
//
const filArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};
console.log(filArray([12, 24, 8, 41, 76], 20));
//
//
//
const someFunc = (number) => {
  return `Your array is ${randomArr(number)}`;
};
const randomArr = (number) => {
  const endArr = [];
  let i = 0;
  while (i < number) {
    i++;
    endArr.push(Math.random());
  }
  return endArr;
};
console.log(someFunc(5));
//
//
//
const alarmMessage = (roomNumber, onFire, notOnFire) => {
  const isOnFire = Math.random() > 0.5;
  return isOnFire ? onFire(roomNumber) : notOnFire(roomNumber);
};

const isOk = (roomNumber) => {
  return `Room number ${roomNumber} is ok`;
};

const isNotOk = (roomNumber) => {
  return `Room number ${roomNumber} needs attention`;
};

const undefState = (roomNumber) => {
  return `State of room number ${roomNumber} is unavailable`;
};

console.log(alarmMessage(456, isOk, isNotOk));
console.log(alarmMessage(12, isOk, undefState));
console.log(alarmMessage(367457, isOk, undefState));
//
//
//
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
// Change code below this line

console.log(books.flatMap((book) => book.genres));

users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const getUserNames = (obj) => {
  return obj.map((elem) => elem.name);
};
console.log(getUserNames(users));
//
//
//
// const allGenres = books.flatMap((elem) => elem.genres);
const uniqueGenres = books
  .flatMap((elem) => elem.genres)
  .filter((elem, index, arr) => arr.indexOf(elem) === index);
// console.log(allGenres);
console.log(uniqueGenres);
//
//
//
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average);
//
//
//
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(({ age }) => age > minAge && age < maxAge);
};
console.log(getUsersWithAge(users, 30, 40));
//
//
//
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };
console.log(getUsersWithFriend(users, "Goldie Gentry"));
//
//
//
const getFriends = (users) => {
  return users
    .flatMap(({ friends }) => friends)
    .filter((elem, index, arr) => arr.indexOf(elem) === index);
};
console.log(getFriends(users));
//
//
//
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive).map((user) => user.name);
};
console.log(getActiveUsers(users));
//
//
//
const fltr = function (array, test) {
  const ftrdArr = [];
  for (const el of array) {
    console.log(el);
    let passed = test(el);
    if (passed) {
      ftrdArr.push(el);
    }
  }
  return ftrdArr;
};

const callback1 = (value) => {
  return value >= 3;
};

console.log(fltr([1, 2, 3, 4, 5], callback1));
//
//
//
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";
const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find(({ author }) => author == AUTHOR);
console.log(bookWithTitle);
console.log(bookByAuthor);
//
//
//
const getUserWithEmail = (users, mail) => {
  return users.find(({ email }) => email == mail);
};
console.dir(getUserWithEmail(users, "elmahead@omatom.com"));
//
//
//
const isEveryUserActive = (users) => {
  return users.every(({ isActive }) => isActive);
};
console.log(isEveryUserActive(users));
//
//
//
const isAnyUserActive = (users) => {
  return users.some(({ isActive }) => isActive);
};
console.log(isAnyUserActive(users));
//
//
//
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((prev, curr) => curr + prev, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime, averagePlayTime);
//
//
//
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line
// const { playtime, gamesPlayed } = players;
// console.log(playtime, gamesPlayed);
// const totalTime = players.reduce(
//   (totalTime, player) => totalTime + player.playtime / player.gamesPlayed,
//   0
// );
const totalTime = players.reduce(
  (totalTime, { playtime, gamesPlayed }) => totalTime + playtime / gamesPlayed,
  0
);

// const totalAveragePlaytimePerGame =
console.log(totalTime);
//
//
//
const calculateTotalBalance = (users) => {
  return users.reduce((total, { balance }) => total + balance, 0);
};
console.log(calculateTotalBalance(users));
//
//
//
const getTotalFriendCount = (users) => {
  return users.reduce((total, { friends }) => total + friends.length, 0);
};
console.log(getTotalFriendCount(users));
//
//
//
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();
const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(
  ascendingReleaseDates,
  descendingReleaseDates,
  authorsInAlphabetOrder,
  authorsInReversedOrder
);
//
//
//
const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
console.log(
  sortedByAuthorName,
  "//////",
  sortedByReversedAuthorName,
  "//////",
  sortedByAscendingRating,
  "//////",
  sortedByDescentingRating
);

// const sortByAscendingBalance = (users) => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
//
//
//
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
  // .sort((a, b) => a.rating - b.rating)
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));
console.log(names);
//
//
//
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((user1, user2) => user1.friends.length - user2.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendCount(users));
//
//
//
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((user, i, arr) => arr.indexOf(user) === i)
    .sort((a, b) => a.localeCompare(b));
};
console.log(getSortedFriends(users));
//
//
//
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter(({ gender: usergender }) => usergender == gender)
    .reduce((acc, { balance }) => acc + balance, 0);
};
console.log(getTotalBalanceByGender(users, "female"));
//
//
//
////////////////////// callback kung-fu ///////////////////////////

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

///////////////////// collect all likes /////////////////////////

const countLikes = (tweets) =>
  tweets.reduce((totalLikes, { likes }) => totalLikes + likes, 0);

console.log(countLikes(tweets));

///////////////////// collect tags array ////////////////////////

const getTags = (tweets = []) => {
  return tweets.reduce((allTags, { tags }) => {
    allTags.push(...tags);
    return allTags;
  }, []);
};
console.log(getTags(tweets));
//////////////////// collect unique tags ////////////////////////

const tags = getTags(tweets);
////////////////////////////////////////////////////////////////
const getTagsStats = (acc = {}, tag = "") => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
};
///////////////////////////////////////////////////////////////////
const countTags = (tags) => tags.reduce(getTagsStats, {});
console.log(countTags(tags));
//
//
//
