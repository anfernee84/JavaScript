function showThis() {
  console.log(`This in showThis`, this);
}
showThis();

const person = {
  name: "Vasya",
};
person.showContext = showThis;
person.showContext();
//
//
// //////////////////////// bind //////////////////////////
const customer = {
  firstName: "Onufriy",
  secondName: "Pupkin",
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  },
};

function greeting(callback) {
  return `We're happy to see you ${callback()}`;
}

console.log(greeting(customer.getFullName.bind(customer)));
//
//
//////////////////////////// call /////////////////////////////
function helloBastard(hello) {
  return `${hello} ${this.getFullName()}`;
}

console.log(helloBastard.call(customer, "Hi"));
// console.log(helloBastard.apply(customer, ["hi"]));
//
//

const bird = {
  name: "parrot",
  color: "green",
  getInfo() {
    return `${this.color} ${this.name}`;
  },
};

function getAnAnimal(greeting) {
  return `${greeting}! You've got a ${this.color} ${this.name}`;
}

// console.log(getAnAnimal(bird.getInfo.bind(bird)));
console.log(getAnAnimal.apply(bird, ["Awesome"]));
//
//
//

const counter = {
  value: 0,
  increment(value) {
    console.log(`increment -> this`, this);
    this.value += value;
  },
  decrement(value) {
    console.log(`decremenmmt -> this`, this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};
updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
//
//
//
const objC = {
  z: 5,
};
console.log(objC);

objB = Object.create(objC);
objB.y = 2;
console.log(objB.z);
