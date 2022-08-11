//
//
//

// const Animal = function (options) {
//   this.name = options.name;
//   this.color = options.color;
//   //   this.voice = function () {
//   //     console.log("Base voice from ", this.name);
//   //   };
// };

// Animal.prototype.voice = function () {
//   console.log("Base voice from ", this.name);
// };

// // const dog = new Animal({ name: "Rex", color: "#fff" });
// // console.log(dog.voice());

// const Cat = function (options) {
//   Animal.apply(this, arguments);
//   this.hasTail = options.hasTail;
//   this.type = "cat";
// };

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// const cat = new Cat({ name: "murzik", color: "#000", hasTail: true });
// console.log(cat);

class Animal {
  static type = "ANIMAL";
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }
  voice() {
    console.log(`Voice from ${this.name}`);
  }
}

const dog = new Animal({ name: "Rex", color: "#000" });
console.log(dog);

class Cat extends Animal {
  static description = "Cat class";
  constructor(options) {
    super(options);
    this.hasTail = options.hasTail;
    this.type = "cat";
    this.age = options.age;
  }
  voice() {
    // super.voice();
    console.log(`${this.name} says meow!!!`);
  }
  action() {
    console.log(`${this.type} ${this.name} is moving`);
  }
  get ageInfo() {
    return this.age * 7;
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const kitty = new Cat({ name: "vaska", color: "white", hasTail: true, age: 3 });
/// Examples
// Object.prototype.print = function () {
//   console.log(`i'm an object of ${this} `);
// };
// kitty.print();

// Array.prototype.myMap = function () {
//   console.log("Array to log", this);
//   return this.map.apply(this, arguments);
// };

// console.log([1, 2, 3, 4].myMap((elem) => elem ** 2));

// String.prototype.toTag = function (tagName) {
//   return `<${tagName}><${this}></${tagName}>`;
// };

// console.log("eminem".toTag("strong"));

// Number.prototype.toBigInt = function () {
//   return BigInt(this);
// };
// const number = 42;
// console.log(number.toBigInt());

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = "50%";
  }
}

const circ = new Circle({
  selector: "#circle",
  size: 90,
  color: "green",
});
//
//
//
const person = {
  age: this.age,
  name: this.name,
  job: this.job,
  sayHello() {
    console.log(
      `Hello, i'm ${this.name}, i'm ${this.age} years old. I work for as a/an ${this.job}`
    );
    return;
  },
};

const vasya = Object.create(person);
vasya.age = 25;
vasya.name = "Vasya";
vasya.job = "engineer";

const onufriy = {
  name: "Onufriy",
  age: 31,
  job: "plumber",
};

console.log(vasya.sayHello());
console.log(person.isPrototypeOf(vasya));
console.log(vasya);
console.log(vasya.hasOwnProperty("sayHello"));
console.log(person.hasOwnProperty("sayHello"));
console.log(Object.keys(vasya));
// console.log(person.sayHello.bind(onufriy)());
console.log(person.sayHello.call(onufriy));

//////////////////////////////////////////// add method to object
Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

const arr = new Array(1, 2, 3, 4, 5, 6);
console.log(arr);
console.log(arr.multBy(3));
//
//
//

const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
  this.sell = function (thing) {
    this.sales += 1;
    return `Manager ${this.name} sold ${thing}`;
  };
};

const ilonMusk = new Manager("Ilon Musk", 8);
const maryPoppins = new Manager("Mary Poppins", 12);
console.log("Ilon Musk total sales: ", ilonMusk.sales);
console.log(ilonMusk.sell("Tesla"));
console.log("Ilon Musk total sales: ", ilonMusk.sales);
