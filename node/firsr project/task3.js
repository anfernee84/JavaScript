const supposedName = "name";
const supposedJob = "job";
const supposedEmail = "email";

const user = {
  [supposedName]: "Vasya Pupkin",
  [supposedJob]: "plumber",
  [supposedEmail]: "vasya@mail.ua",
};

console.log(user);

const keys = [];
const value = [];

for (let i in user) {
  keys.push(i);
  value.push(user[i]);
}

// console.log(keys, value);

const drinkingPlumber = Object.create(user);

drinkingPlumber.favouriteDrink = "Mix of vodka and beer";
drinkingPlumber.minLitersToDrink = 2;
drinkingPlumber.favouriteSongs = [
  "Only shot of vjdka on the table",
  "I`m too drunk to get my sofa",
];

const drinkingPlumberCountProperty = (person) => {
  for (const key in person) {
    //   if (Object.hasOwnProperty.call(drinkingPlumber, key)) {
    if (person.hasOwnProperty(key)) {
      console.log(key, ":", person[key]);
    }
  }

  return Object.keys(person).length;
};

console.log(drinkingPlumberCountProperty(drinkingPlumber));

// const drinkingPlumberKeys = Object.keys(drinkingPlumber);
// for (const key of drinkingPlumberKeys) {
//   console.log(drinkingPlumber[key]);
// }

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

console.log("colors = ", hexColors, rgbColors);

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  for (const i of products) {
    if (i.name === productName) {
      return i.price;
    }
  }
  return null;

  // Change code above this line
}

console.log(getProductPrice("Radar"));

const getAllPropValues = (propName) => {
  const propArr = [];
  for (prod of products) {
    if (Object.keys(prod).includes(propName)) propArr.push(prod[propName]);
  }

  return propArr;
};

console.log(getAllPropValues("price"));

function calculateTotalPrice(productName) {
  for (prod of products) {
    if (Object.values(prod).includes(productName)) {
      // console.log(Object.values(prod));
      return prod.price * prod.quantity;
    }
  }
  return 0;
}

console.log(calculateTotalPrice("Scanner"));

const car = {
  brand: "Lanos",
  hp: 85,
  consumption_avg: 8,
};

const {
  brand,
  hp,
  consumption_avg: drinks_fuel,
  manual = "https://manuals.com/lanos.pdf",
} = car;

console.table({ ...car, manual });
console.log(drinks_fuel);

const forecast = {
  today: {
    high: 18,
    low: 10,
  },
  tomorrow: {
    high: 19,
    low: 16,
    icon: "https://icons.com/1.png",
  },
};

const {
  today: { high, low, icon = "https://icons.com/2.png" },
  tomorrow: { high: highTomorrow, low: lowTomorrow, icon: iconTomorrow },
} = forecast;

console.log(high, low, icon, highTomorrow, lowTomorrow, iconTomorrow);
console.table({ high, low, icon, highTomorrow, lowTomorrow, iconTomorrow });

const data = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};

const sum = (obj) => {
  const { first, second, third, fourth } = obj;
  return (first + second + third + fourth) / 4;
};
console.log(sum(data));

const numbers = [34, 56, 7, 54, 3, 45, 67, 8, 6];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

const arr1 = [2354, 456, 3, 5, 567, 234, 465, 786];
const arr2 = [5, 23, 578, 234, 47, 980, 2134, 237098, 236];
const arr3 = [798, 678, 234, 467, 123, 780, 456, 234];
const allDigits = [...arr1, ...arr2, ...arr3];
console.log(Math.max(...allDigits));
console.log(Math.min(...allDigits));

const base = {
  mode: "default",
  level: 1,
  score: 0,
  theme: "light",
  playTime: 0,
  rang: "newbee",
};

const updated = {
  mode: "default",
  level: 5,
  theme: "dark",
  playTime: 32468794,
  score: 6576574324357,
};

console.log({ ...base, ...updated });
console.log(Object.assign({}, base, updated));

const makeTask = (data) => {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  const defaults = { completed, category, priority };
  return { ...defaults, ...data };
};

const issue = {
  text: "shshsrt",
  category: "Hommade",
  priority: "Low",
};

console.log(makeTask(issue));

function add(...args) {
  return args.reduce((prev, curr) => curr + prev, 0);
  // Change code above this line
}
console.log(add(74, 11, 62, 46, 12, 36));

function addOverNum(numone, ...args) {
  //   let total = 0;

  //   for (const arg of args) {
  //     if (arg > numone) {
  //       total += arg;
  //     }
  //   }
  //   return total;
  sortedArr = args.filter((elem) => elem > numone);
  return sortedArr.length > 0
    ? sortedArr.reduce((prev, curr) => prev + curr)
    : 0;
  // Change code above this line
}
console.log(addOverNum(50, 15, 27));

function findMatches(arr, ...args) {
  const matches = []; // Don't change this line

  // args.forEach(elem =>{
  //   if (arr.includes(elem))
  // matches.push(elem)
  // })

  // Change code above this line
  return [...arr, ...args].filter((e, index, arr) => arr.indexOf(e) !== index);
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    const { books } = this;
    // Change code below this line
    // const bookIndex = books.indexOf(oldName);
    books.splice(books.indexOf(oldName), 1, newName);

    // Change code above this line
  },
};

bookShelf.updateBook("Haze", "Dungeon chronicles");
console.log(bookShelf.books);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

//   // Change code below this line
//   updatePotionName(...args) {
//     const { potions } = this;
//     potions.splice(potions.indexOf(args[0]), 1, args[1]);
//     return potions;
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     potions.splice(potions.indexOf(potionName), 1);
//     return potions;
//   },
//   addPotion(potionName) {
//     const { potions } = this;
//     potions.push(potionName);
//     return;
//   },
//   getPotions() {
//     const { potions } = this;
//     return potions;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Drunk walk"));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Drunk walk", "Drunk run"));

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    const { potions } = this;
    return potions.find((potion) => potion.name === newPotion.name)
      ? `Error! Potion ${newPotion.name} is already in your inventory!`
      : potions.push(newPotion);
  },

  removePotion(potionName) {
    const { potions } = this;
    const potionIndex = this.potions.findIndex(
      (potion) => potion.name === potionName
    );
    return potionIndex != -1
      ? potions.splice(potionIndex, 1)
      : `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;
    const potionIndex = potions.findIndex((potion) => potion.name === oldName);
    console.log(potionIndex);
    return potionIndex != -1
      ? potions.splice(potionIndex, 1, {
          name: newName,
          price: potions[potionIndex].price,
        })
      : `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Magic balls", price: 1000 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.getPotions());
