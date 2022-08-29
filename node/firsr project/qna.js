const objPrototype = {
  logObjId() {
    return `${this.id} is ${this.name}`;
  },
  currentName() {
    return `Current name is ${this.name}`;
  },
};

const user1 = {
  id: 1,
  name: "Vasya",
  __proto__: objPrototype,
};

const user2 = {
  id: 2,
  name: "Onufriy",
  __proto__: objPrototype,
};

// console.log(user1.logObjId());
// console.log(user2.currentName());
// console.log(user1.currentName());

// const myArr = new Array(3, 5, 67, 4, 3, 2, 4, 5, 7, 8, 2);
// const mySet = new Set(myArr);
// console.log(...mySet);

// const obj = {
//   testkey: "key",
// };
// obj["key"] = "val";

// console.log(obj);
// const myMap = new Map();
// myMap.set("key", "val");
// console.log(myMap);
// console.log(myMap.size);
class SimpleService {
  serviceUrl;
  constructor(url) {
    this.serviceUrl = url;
  }
  getData() {
    console.log(`We're tryin to get some data from ${this.serviceUrl}----`);
  }
}

class SpecialService extends SimpleService {
  static test = 4;
  // constructor() {
  //   super();
  // }
  config = new Array("test params");

  getData() {
    console.log(
      `SpecialService trying to get some data from ${this.serviceUrl} with ${this.config}`
    );
  }
}

const srv = new SpecialService("https://test.com");

srv.getData();
//
//
//
//
//
//* database content ------------------------------
const relatedData = [
  { id: 42, type: "season", season_number: 1, related_series: 43 },
  {
    id: 43,
    type: "series",
    title: "Breaking Good",
    genres: ["comedy", "sci-fi"],
  },
];

const relations = {
  episode: "related_season",
  season: "related_series",
};

//* дані які просто зараз вже у нас завантажені скриптом, і в процесі обробки
const dataInProcess = [
  { id: 1, type: "movie", title: "The Quest", genres: ["drama"] },
  { id: 2, type: "episode", episode_number: 1, related_season: 42 },
];

//* -----------------------------------------------
// потрібно дістатись до поля _title_ - навіть якщо напряму тайтла немає
const meta = [];
const fieldToFind = "title";

for (let i = 0; i < dataInProcess.length; i += 1) {
  const title = resolveField.call(dataInProcess[i], fieldToFind);
  meta.push(title);
}

//*-------------------------------------------
function resolveField(fieldName) {
  debugger;
  if (this[fieldName]) {
    return this[fieldName];
  }

  const linkToParent = relations[this.type]; // related_season

  //* тут ми йдемо в базу даних і знаходимо parent item по заданому ID
  const parentItem = relatedData.find((item) => item.id === this[linkToParent]);

  if (parentItem) {
    return resolveField.call(parentItem, fieldToFind);
  }

  return null;
}

//* запускаємо приклад
console.log(meta);
//
//
//
//
//
//
//
//
//
//
// Параметри що обов'язково мають бути наявні
// const mandatoryKeys = ["accountName"];

// /**
//  * Список що поєднує функцію-валідатор і відповідний параметр.
//  * Якщо параметра тут немає - то він НЕ ПІДТРИМУЄТЬСЯ (див. строку 409)
//  *
//  * @type {{[paramName: string]: Function }}
//  */
// const validators = {
//   accountName: validateAccountName,
//   limit: validateLimit,
// };

// //* функції-валідатори -----------------------------------------------------

// function validateAccountName(accountName = null) {
//   if (!accountName?.length) {
//     return "[accountName] cannot be empty";
//   }

//   return null; // null - помилки немає, валідні дані
// }

// function validateLimit(limit) {
//   if (!parseInt(limit, 10) || limit.replace(/\d/g, "").length > 0) {
//     return "[limit] must be a number";
//   }

//   return null; // null - помилки немає, валідні дані
// }

// //* основне рішення --------------------------------------------------------
// const initContext = function (context = {}) {
//   // тут відбуваються всякі дії на ініціалізацію об'єкта _context_
//   if (!context.validationErrors) {
//     context.validationErrors = [];
//   }
//   // ...
//   // ...
//   // повертається функція, що запам'ятовує свій контекст створення,
//   // і у будь-який потрібний далі момент готова закінчити
//   // ініціалізацію об'єкта _context_
//   return function parseCommand(command = []) {
//     command.forEach((arg) => {
//       const [key, value] = arg.split("=");
//       // debugger;

//       // якщо параметра немає в списку з валідаторами - то він не підтримуваний
//       if (!(key in validators)) {
//         context.validationErrors.push(`Unsupported parameter: [${key}]`);
//         return;
//       }

//       context[key] = value; // кожний розпізнаний параметр додається в _context_

//       // якщо валідатор повернув помилку - додаємо в список
//       const error = validators[key](value);
//       if (error) {
//         context.validationErrors.push(error);
//       }
//     });

//     // перевірка обов'язкових параметрів
//     mandatoryKeys.forEach((key) => {
//       if (!(key in context)) {
//         context.validationErrors.push(validators[key]());
//       }
//     });
//   };
// };

//* приклади використання
//* var 1
// const context1 = { existingKey: "existing value" };
// let parseCommandForContext = initContext(context1);
// // // проходить ряд інших дій, отримуємо _command_

// const command1 = ["accountName=test-acc-name", "limit=10"];
// parseCommandForContext(command1);
// console.log(`valid command [${command1}]`, context1);

//* var 2
// const context2 = {};
// parseCommandForContext = initContext(context2);

// проходить ряд інших дій, отримуємо _command_
// const command2 = ["accountName=test-acc-name"];
// parseCommandForContext(command2);
// console.log(`valid command [${command2}]`, context2);

//* var 3
// const context3 = { validationErrors: [] };
// parseCommandForContext = initContext(context3);

// // проходить ряд інших дій, отримуємо _command_
// const command3 = ['limit=10abc12', 'test=42', 'from=2022-08-05'];
// parseCommandForContext(command3);
// console.warn(`invalid command [${command3}]`, context3);
