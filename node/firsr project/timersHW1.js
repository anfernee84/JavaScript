class Log {
  constructor(name, args, result, date) {
    this.name = name;
    this.in = args;
    this.out = result;
    this.created = date;
    this.error = null;
  }
}

class TimersManager {
  constructor() {
    this.timers = [];
    this.isStart = false;
    this.logs = [];
  }

  add(obj, ...args) {
    console.log("adding...");
    if (this.isStart) throw new Error("Timer is active");
    if (!obj.delay) throw new Error("Add delay");
    // if (typeof !Number(obj.delay)) throw new Error("Delay is not a number");
    if (typeof obj.delay !== "number") throw new Error("Delay is not a number");
    if (obj.delay < 0 && obj.delay > 5000)
      throw new Error("Delay should be less, than 5000 and more, than 0");
    if (typeof obj.interval !== "boolean")
      throw new Error("interval is not correct");
    if (typeof obj.job !== "function") throw new Error("It`s not a function");
    obj.args = args;
    this.timers.push(obj);
    return this;
  }

  remove(name) {
    const timerIdx = this.timers.findIndex((el) => el.name === name);
    this.timers.splice(timerIdx, 1);
    console.log(this);
    return this;
  }

  start() {
    console.log("starting");
    this.isStart = true;
    this.timers.forEach((element) => {
      if (element.interval)
        element.id = setInterval(this.log.bind(this.element), element.delay);
      else element.id = setTimeout(this.log.bind(this, element), element.delay);
    });
    return this;
  }

  stop() {
    this.isStart = false;
    this.timers.forEach((el) => {
      if (el.interval) clearInterval(el.id);
      else clearTimeout(el.id);
    });
    return this;
  }

  pause(name) {
    const timer = this.timers.find((el) => el.name === name);
    if (timer.interval) clearInterval(timer.id);
    else clearTimeout(timer.id);
    return this;
  }

  resume(name) {
    const timer = this.timers.find((element) => element.name === name);
    if (timer.interval)
      timer.id = setInterval(this.log.bind(this, timer), timer.delay);
    else timer.id = setTimeout(this.log.bind(this.timer), timer.delay);
    return this;
  }

  print() {
    console.log(this.logs);
    return this;
  }

  log(obj) {
    const date = new Date();
    try {
      const res = obj.job(...obj.args);
      const log = new Log(obj.name, obj.args, res, date);
      this.logs.push(log);
    } catch (e) {
      console.log(e.name);
      console.log(e.message);
      console.log(e);
      const log = new Log(obj.name, obj.args, undefined, date);
      const { name, message, stack } = e;
      log.error = {
        name,
        message,
        stack,
      };
      this.logs.push(log);
    }
    return this;
  }
}

const manager = new TimersManager();
const t1 = {
  name: "t1",
  delay: 1000,
  interval: true,
  job: () => console.log("t1"),
};

const t2 = {
  name: "t2",
  delay: 1000,
  interval: false,
  job: () => {
    throw new Error("We have a problem!");
  },
};
// t2.job();
// manager.add(t1);
manager.add(t2);
manager.start();
// console.log(1);
// manager.pause('t1');
