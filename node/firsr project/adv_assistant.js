const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const terminal = readline.createInterface({ input, output });

const fs = require("fs");

////////////////////////////////////////////////////////////////////////////// class phonebook /////////////////////////////////////////////////////////////////////////
class Phonebook {
  #phonecards;

  constructor() {
    this.#phonecards = [];
  }

  getPhonecards() {
    if (!this.#phonecards.length) {
      console.warn("You have no contacts");
    }

    return this.#phonecards;
  }

  addContact(options = {}) {
    const objIndex = this.#phonecards.findIndex(
      (obj) => obj.name == options.name
    );
    if (objIndex >= 0) {
      this.#phonecards[objIndex].phone = options.phone;
      this.#phonecards[objIndex].date = new Date(Date.now()).toUTCString();
      return;
    }
    this.#phonecards.push({
      ...options,
      date: new Date(Date.now()).toUTCString(),
    });
  }
}

//////////////////////////////////////////////////////////////////////////// class notes ///////////////////////////////////////////////////////////////////////////////
class Notes {
  #notes;
  constructor() {
    this.#notes = [];
  }

  getAllNotes() {
    if (!this.#notes.length) {
      console.warn("You have no notes");
    }

    return this.#notes;
  }
  setNote(params = {}) {
    const noteIndex = this.#notes.findIndex((note) => note.name == params.name);
    if (noteIndex >= 0) {
      this.#notes[noteIndex].name == params.name;
      if (params.tags.length != 0) {
        this.#notes[noteIndex].tags = params.tags;
      }
    } else {
      this.#notes.push({
        ...params,
        created: new Date(Date.now()).toUTCString(),
      });
    }
  }
}

const myNotes = new Notes();
const myPhonebook = new Phonebook();

/////////////////////////////////////////////////////////////////// set default values(for testing GET commands)////////////////////////////////////////////////////
myNotes.setNote({
  name: "Grab some food",
  tags: ["supermarket", "local shop", "healthy food"],
});
/////////////////////////////////////////////////////////////////////// load default data ////////////////////////////////////////////////////////////////////////
const fileName = "./contacts.txt";
try {
  const loadData = JSON.parse(fs.readFileSync(fileName, "utf8"));
  myPhonebook.addContact(...loadData);
} catch (err) {
  console.error("Load data is empty");
}
////////////////////////////////////////////////////////////////// loop question - answer //////////////////////////////////////////////////////////////////////////
const mainQuestion = `Enter your command and press enter:
To add a contact, type: 'add-contact %contact_name% %contact phone%
To get all contacts, type: 'get-contacts'
To add a note, type: 'add-note %note_name% %note_tag1% %note_tag2%' (any amount of tags separated by space)
To get all notes, type: 'get-notes'
Or type 'exit' to close a program\n`;

function mainHandler(commandString) {
  const [command, ...args] = commandString.split(" ");
  console.log({ command, args }); // <-- заціни в консолі!

  switch (command) {
    case "get-contacts":
      //   console.table(myPhonebook.getPhonecards());
      try {
        const readContent = JSON.parse(fs.readFileSync(fileName, "utf8"));
        console.table(readContent);
      } catch (err) {
        console.error(err);
      }
      break;
    //
    case "add-contact":
      const [name, phone] = args;
      myPhonebook.addContact({ name, phone });
      try {
        const writeContent = JSON.stringify(myPhonebook.getPhonecards()); ////////////////////// я жопой чую, что заманужа вот тут где-то. перезатирается дата тут!!!/////////////////////////////////
        fs.writeFileSync(fileName, writeContent);
      } catch (err) {
        console.error(err);
      }
      break;
    //
    //
    //
    //
    case "get-notes":
      console.table(myNotes.getAllNotes());
      break;
    //
    case "add-note":
      const [noteName, ...tags] = args;
      myNotes.setNote({ name: noteName, tags });
      break;
    case "exit":
      console.log("Okay, see ya later!");
      terminal.close();
      process.exit();
    default:
      console.log("Unrecognized command, try again...");
      break;
  }

  // making recursive loop
  terminal.question(mainQuestion, mainHandler);
}

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
