const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const terminal = readline.createInterface({ input, output });

// let's organize our classes in a better way :)
const Phonebook = require('./assistant/classes/pnonebook');
const Notes = require('./assistant/classes/notes');
const DataHelper = require('./assistant/helpers/data_helper');

const myNotes = new Notes();
const myPhonebook = new Phonebook();

const fileName = './assistant/data/kind_of_db.txt';
const dataHelper = new DataHelper({ fileName });

/////////////////////////////////////////////////////////////////////// load default data ////////////////////////////////////////////////////////////////////////

/**
 * Завантажуємо дані з "бази". Логіка роботи з "базою" відокремлена від логіки
 * роботи з даними. І ми без проблем зможемо замінити файлік на sqlite чи mongo,
 * і зміни будуть ТІЛЬКИ в файлХелпері, все інше залишається як є :)
 */
function initApp() {
  const { phonecards = [], notes = [] } = dataHelper.loadData();

  phonecards.forEach((card) => {
    myPhonebook.addContact(card);
  });

  notes.forEach((note) => {
    myNotes.setNote(note);
  });
}

/**
 * Зберігає ВСІ дані з програми в файлік
 */
function saveData() {
  // ми зберігаємо структуру карток контактів, і ноутсів!
  const dataToSave = {
    phonecards: myPhonebook.getPhonecards(),
    notes: myNotes.getAllNotes()
  };

  dataHelper.saveData(dataToSave);
}

////////////////////////////////////////////////////////////////// loop question - answer //////////////////////////////////////////////////////////////////////////
const mainQuestion = `Enter your command and press enter:
To add a contact, type: 'add-contact %contact_name% %contact phone%
To get all contacts, type: 'get-contacts'
To add a note, type: 'add-note %note_name% %note_tag1% %note_tag2%' (any amount of tags separated by space)
To get all notes, type: 'get-notes'
Or type 'exit' to close a program\n`;

function mainHandler(commandString) {
  const [command, ...args] = commandString.split(' ');
  console.log({ command, args });

  switch (command) {
    case 'get-contacts':
      console.table(myPhonebook.getPhonecards());
      break;
    //
    case 'add-contact':
      const [name, phone] = args;
      myPhonebook.addContact({ name, phone });
      break;
    case 'get-notes':
      console.table(myNotes.getAllNotes());
      break;
    //
    case 'add-note':
      const [noteName, ...tags] = args;
      myNotes.setNote({ name: noteName, tags });
      break;
    case 'exit':
      console.log('Trying to save current data...');
      saveData();
      console.log('Okay, see ya later!');
      terminal.close();
      process.exit();
    default:
      console.log('Unrecognized command, try again...');
      break;
  }

  // making recursive loop
  terminal.question(mainQuestion, mainHandler);
}

// тут головна точка входу в апп
initApp();
terminal.question(mainQuestion, mainHandler);

// const myNotes = new Notes();
// console.table(myNotes.getAllNotes());
// myNotes.setNote({
//   name: "Grab some food",
//   tags: ["supermarket", "local shop", "healthy food"],
// });
// myNotes.setNote({
//   name: "Get some money",
//   tags: ["robbery", "job", "drug dealing"],
// });
// console.table(myNotes.getAllNotes());
// myNotes.setNote({
//   name: "Grab some food",
//   tags: ["canteen", "burger"],
// });
// console.table(myNotes.getAllNotes());

// const myPhonebook = new Phonebook();
// console.table(myPhonebook.getPhonecards());
// myPhonebook.addContact({ name: "Vasya", phone: "0675411206" });
// myPhonebook.addContact({ name: "Onufriy", phone: "0508741256" });
// console.table(myPhonebook.getPhonecards());
// myPhonebook.addContact({ name: "Vasya", phone: "0123456789" });
// console.table(myPhonebook.getPhonecards());
