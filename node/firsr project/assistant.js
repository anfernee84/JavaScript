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
myPhonebook.addContact({ name: "Vasya", phone: "0675411206" });
////////////////////////////////////////////////////////////////// loop question - answer //////////////////////////////////////////////////////////////////////////
while (true) {
  let fullCommand = prompt(
    "Enter your command and press enter: \nTo add a contact, type: add contact 'contact name' 'contact phone'\nTo get all contacts, type: get contacts\nTo add a note, type: add note 'note name', 'note tags, separated by space'\nTo get all notes, type: get notes\nOr type 'exit' to close a program ",
    ""
  );
  if (fullCommand == "exit") {
    console.log("I`m tired, i`m leaving");
    break;
  }
  let command = fullCommand.split(" ").splice(0, 2).join(" ");
  switch (command) {
    case "get contacts":
      console.table(myPhonebook.getPhonecards());
      break;
    case "get notes":
      console.table(myNotes.getAllNotes());
      break;
    case "add contact":
      myPhonebook.addContact({
        name: fullCommand.split(" ").slice(2, 3).join(),
        phone: fullCommand.split(" ").slice(3).join(),
      });
      break;
    case "add note":
      let tagPart = fullCommand.split(",").slice(-1).join();
      let notePart = fullCommand.split(",")[0].split(" ").slice(2).join(" ");
      myNotes.setNote({
        name: notePart,
        tags: tagPart,
      });
      break;
    default:
      break;
  }
}

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
