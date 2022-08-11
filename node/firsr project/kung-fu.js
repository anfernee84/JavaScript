// import fetch from "node-fetch";
// globalThis.fetch = fetch;
// import fetch from "cross-fetch";
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
  {
    make: "Ford",
    model: "Explorer v2",
    type: "suv",
    amount: 0,
    price: 31660,
    onSale: false,
  },
];

const getModelNames = (carArr) => {
  // return carArr.map((car) => car.model);
  ///////////////////////////////////////////////////// v1 /////////////////////////////////////////
  // return carArr
  //   .map((car) => (car.amount > 0 ? car.model : null))
  //   .filter((modelName) => modelName);

  return carArr.filter((car) => car.amount).map((car) => car.model);
};

// console.log(getModelNames(cars));

const applyDiscount = (cars = [], discount = 0) => {
  // //////////// v1/////////////////
  // return cars.map((car) => {
  //   return {
  //     ...car,
  //     price: car.price - discount,
  //   };
  // });
  //////////// v2/////////////////
  return cars.map((car) => ({
    ...car,
    price: car.price - discount,
  }));
};

// console.log(applyDiscount(cars, 10_000));
//
//
//
const filterByPrice = (cars = [], limit = 0) => {
  return cars.filter(({ price }) => price < limit);
};
// console.log(filterByPrice(cars, 25000));
//
//
//
//////////////////////// find ///////////////////////
const getCarByModel = (carArr = [], model = "") => {
  return carArr.find(({ model: carModel }) => carModel === model);
};
// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "4Runner"));
//
//
//
///////////////////////////////// Pizdets ////////////////////////////////////

const filterByHondaAndFord = {
  make: (make) => ["Honda", "Ford"].includes(make),
};

const filterCheapFords = {
  make: (make) => make === "Ford",
  price: (price) => price < 30000,
};

const filterTrucksOnSale = {
  onSale: (onSale) => onSale === true,
  type: (type) => type === "truck",
};

/**
 *
 * @param {Object[]} cars
 * @param {*} filterObject
 *
 * @returns {Object[]}
 */
const filterBy = (cars, filterObject) => {
  const filterKeys = Object.keys(filterObject);
  console.log("filterKeys", filterKeys);

  return cars.filter((car) => {
    const isAllFiltersOk = filterKeys.every((key) => {
      const currentFilterFn = filterObject[key];
      console.log(key, filterObject[key], car[key]);
      return currentFilterFn(car[key]);
    });
    return isAllFiltersOk;
  });
};

// console.log(filterBy(cars, filterByHondaAndFord));
// console.log(
//   "///////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
// );
// console.log(filterBy(cars, filterCheapFords));
//
//
//
const sortAsc = (curr, next) => curr.amount - next.amount;
const sortDesc = (curr, next) => next.amount - curr.amount;

const sortByAmount = (cars = [], sortFn) => {
  return [...cars].sort(sortFn);
};

// console.log(sortByAmount(cars, sortAsc));
// console.log(sortByAmount(cars, sortDesc));

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const filter = (array, cback) => {
  return array.filter(cback);
};

const callback1 = (value) => value >= 3;

const getFruitsWithQuantity = (fruit) => {
  const { quantity } = fruit;
  return quantity >= 120;
};

console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value <= 4));
console.log(filter(fruits, getFruitsWithQuantity));

///////////////////////////// замыкание ///////////////////

const fnA = (parameter) => {
  const innerVariable = " value of inner variable of function A";
  const innerFunction = () => {
    console.log("This is a call of inner function", parameter);
  };
  return innerFunction;
};

const fnB = fnA(555);
console.log(fnB());
//
//
//
// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} is cooking ${dish}`);
// };

const makeSheff = function (name) {
  const makeDish = (dish) => {
    console.log(`${name} is cooking ${dish}`);
  };
  return makeDish;
};

const mango = makeSheff("Mango");
console.log(mango("Kotlets"));
console.log(mango("Cake"));
console.log(mango("Soup"));
//
//
//
const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

// const number1 = 3.6678;
// const number2 = 4.1234;
// console.log(Number(number1.toFixed(3)));
// console.log(Number(number2.toFixed(4)));

const rounder = (places) => {
  return (number) => Number(number.toFixed(places));
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4567));
console.log(rounder3(5.21478));
//
//
//
const SalaryManagerFactory = (employeeName, baseSalary) => {
  let salary = baseSalary;

  return {
    raise(amount) {
      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Current salary ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = SalaryManagerFactory("Onufriy", 5000);

// console.log(salaryManager.current());
// console.log(salaryManager.raise(8000));
// console.log(salaryManager.current());
// console.log(salaryManager.lower(3000));
// console.log(salaryManager.current());

const human = {
  fullName: "Mango",
  showName() {
    console.log("this", this), console.log("this name", this.name);
    const inner = () => {
      console.log("this in inner", this);
    };
    inner();
  },
};

human.showName();

console.log(cars);

const updatedCars = cars.map((car) => ({ ...car, amount: (car.amount += 10) }));
console.table(cars);

const modelToUpdate = "Explorer v2";
const updatedModels = cars.map((car) =>
  car.model === modelToUpdate
    ? {
        ...car,
        model: (car.model = "Lanos"),
      }
    : null
);
console.table(cars);

const dowg = {
  name: "bobik",
  barking() {
    console.log(`${this.name} is barking`);
  },
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.name);
  },
};

// console.log(dowg.showThis());
// console.log(dowg.name);
// console.log(dowg.barking());
// console.log(dowg.showName());
function showThis() {
  console.log("This is in showThis: ", this);
}
const user = {
  username: "Mango",
};
user.showContext = showThis;
user.showContext();
//
//
//
function greetGuest(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const vasya = {
  name: "Vasya",
};
const onufriy = {
  name: "Onufriy",
};

greetGuest.call(vasya, "Hello");
greetGuest.apply(onufriy, ["What`s up"]);
//
//
//
function greet(clientName) {
  return `${clientName}, welcome to "${this.service}"`;
}

const steam = {
  service: "steam",
};
const gmail = {
  service: "gmail",
};

const steamGreeter = greet.bind(steam);
const gmailGreater = greet.bind(gmail);
console.log(steamGreeter("Poly"));
console.log(gmailGreater("Mango"));
//
//
//
///////////////////////////////???????????????????????????????????????????????????
const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  console.log(`Processing task from ${callback()}`);
}

makeMessage(customer.getFullName.bind(customer));
///////////////////////////////???????????????????????????????????????????????????
