const fs = require('fs');

class DataHelper {
  #dbFileName = '';

  /**
   * @param {Object} config конфіг, незалежна структура
   * @param {string} config.fileName ім'я файла з яким працюємо як з базою
   */
  constructor({ fileName = '' }) {
    this.#dbFileName = fileName;
  }

  /**
   * Зберігає ВСІ дані з програми в файлік
   */
  saveData(data = {}) {
    try {
      fs.writeFileSync(this.#dbFileName, JSON.stringify(data));
      console.log('All data saved!');
    } catch (err) {
      console.error('Houston, we have a problem saving data!', err.message);
    }
  }

  loadData() {
    try {
      // тут ми будем один раз при запуску ініціалізувати ВСІ дані, що збережені в файліку
      // не треба робити це під час виконання програми постійно
      // пам'ятаємо про структуру даних, яку ми зберігали - { phonecards: [], notes: []}
      const parsedData = JSON.parse(fs.readFileSync(this.#dbFileName, 'utf8'));
      return parsedData;
    } catch (err) {
      console.error('Load data is empty');
    }
  }
}

module.exports = DataHelper;
