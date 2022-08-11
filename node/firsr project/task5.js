const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails); // фильтрация по уникальности в массиве
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};

console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
//
//
//
const animal = {
  paws: 4,
  tail: 1,
};

const dog = Object.create(animal);
dog.name = "Bobik";

console.log(dog.tail);
// console.log(dog.has)
console.log(animal);
console.log(animal.isPrototypeOf(dog));
console.log(dog.hasOwnProperty("legs"));
//
//
//
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }

// const tarantayka = new Car({ brand: "ZAZ", model: "968", price: 500 });
// console.log(tarantayka);

// const auto = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(auto);

// auto.changePrice(1000);
// console.log(auto);
//
//
//
///////////....5.13
class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    // return this.items.splice(this.items.indexOf(itemToRemove), 1);
    return (this.#items = this.#items.filter((item) => item !== itemToRemove));
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//
//
// 5.14
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.#value = (" " + initialValue).slice(1);
  }

  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }
  //   padBoth(str) {
  //     this.#value = str + this.#value + str;
  //   }
  padBoth(str) {
    this.padStart(str); ////////// это как?
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
console.log(builder.initialValue);
//
//
//  5.15  // getters and setters//////////
class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
  #brand;
  #model;
  #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;

    this.#model = model;
    this.#price = price;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    // return (this.#price = newPrice);
    if (newPrice < Car.MAX_PRICE) {
      //// такие свойства доступні только классу, но  не его єкземплЯрам
      this.#price = newPrice;
    }
  }
  get brand() {
    return this.#brand;
  }
  set brand(newBrand) {
    return (this.#brand = newBrand);
  }
  get model() {
    return this.#model;
  }
  set model(newModel) {
    return (this.#model = newModel);
  }
}

const tarantayka = new Car({ brand: "ZAZ", model: "968", price: 500 });
const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(audi.price);
// auto.brand = "Daewoo";
// console.log(auto.brand);
// audi.price = 51000;
// console.log(audi.price);
audi.price = 49000;
console.log(audi.price); // 49000
console.log(Car.checkPrice(20000));

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
