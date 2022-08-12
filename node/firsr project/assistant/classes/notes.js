class Notes {
  #notes;
  constructor() {
    this.#notes = [];
  }

  getAllNotes() {
    if (!this.#notes.length) {
      console.warn('You have no notes');
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
        created: new Date(Date.now()).toUTCString()
      });
    }
  }
}

module.exports = Notes;
