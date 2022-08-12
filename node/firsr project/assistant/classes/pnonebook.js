class Phonebook {
  #phonecards;

  constructor() {
    this.#phonecards = [];
  }

  getPhonecards() {
    if (!this.#phonecards.length) {
      console.warn('You have no contacts');
    }

    return this.#phonecards;
  }

  addContact(options = {}) {
    const objIndex = this.#phonecards.findIndex((obj) => obj.name == options.name);
    if (objIndex >= 0) {
      this.#phonecards[objIndex].phone = options.phone;
      this.#phonecards[objIndex].date = new Date(Date.now()).toUTCString();
      return;
    }
    this.#phonecards.push({
      ...options,
      date: new Date(Date.now()).toUTCString()
    });
  }
}

module.exports = Phonebook;
