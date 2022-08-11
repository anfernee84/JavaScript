const checkTimerProreties = (timer, timersArray) => {
  const { name, delay, interval, job } = timer;

  /* name */
  if (name === undefined || typeof name !== "string" || name.length === 0) {
    throw new Error(
      "The 'name' parameter is required and should be a string (string.lenght > 0)"
    );
  }

  /* delay */
  if (delay === undefined || typeof delay !== "number") {
    throw new Error("The 'delay' parameter is required and should be a number");
  }
  if (delay === 0 || delay > 5000) {
    throw new Error(
      "The 'delay' parameter should be more then 0 and less then 5000"
    );
  }

  /* interval */
  if (interval === undefined || typeof interval !== "boolean") {
    throw new Error(
      "The 'interval' parameter is required and should be a boolean"
    );
  }

  /* job */
  if (job === undefined || typeof job !== "function") {
    throw new Error("The 'job' parameter is required and should be a function");
  }

  /* Check if timer name is already exist */
  let duplicatedTimer = timersArray.find((timer) => timer.name === name);
  if (duplicatedTimer) {
    throw new Error(
      `The timer with the name: '${duplicatedTimer.name}' has already been added.`
    );
  }
};

class TimersManager {
  constructor() {
    this.timers = [];
    this.timersId = [];
    this.isStarted = false;
  }

  /* add */
  add(timer, a = null, b = null) {
    if (this.isStarted) {
      throw new Error("You can't add timer after TimersManager is started");
    }
    if (typeof timer !== "object") {
      throw new Error("First paramether should be an object");
    }
    checkTimerProreties(timer, this.timers);
    this.timers.push({ ...timer, arg1: a, arg2: b });
  }

  /* remove */
  remove(timerName) {
    const timer = this.timersId.find((timer) => timer.name === timerName);

    try {
      clearInterval(timer.id);
      this.timers = this.timers.filter((timer) => timer.name !== timerName);
      console.log(this.timers);
    } catch (err) {
      console.error(
        `Timer you are trying to remove: '${timerName}' does not exist`
      );
    }
  }

  /* start */
  start() {
    this.isStarted = true;

    this.timers.forEach((timer) => {
      let timerID = setTimeout(function tick() {
        timer.job(timer.arg1, timer.arg2);
        if (timer.interval) {
          timerID = setTimeout(tick, timer.delay);
        }
      }, timer.delay);
      this.timersId.push({ name: timer.name, id: timerID });
    });
  }

  /* stop */
  stop() {
    console.log("stop");
    this.timersId.forEach((timer) => {
      clearInterval(timer.id);
    });
  }

  /* pause */
  pause(timerName) {
    const timer = this.timersId.find((timer) => timer.name === timerName);

    try {
      clearInterval(timer.id);
    } catch (err) {
      console.error(
        `Timer you are trying to pause: '${timerName}' does not exist`
      );
    }
  }

  /* resume */
  resume(timerName) {
    const timer = this.timers.find((timer) => timer.name === timerName);

    try {
      let timerID = setTimeout(function tick() {
        timer.job(timer.arg1, timer.arg2);
        if (timer.interval) {
          timerID = setTimeout(tick, timer.delay);
        }
      }, timer.delay);
      this.timersId.push({ name: timer.name, id: timerID });
    } catch (err) {
      console.error(
        `Timer you are trying to resume: '${timerName}' does not exist or has been deleted`
      );
    }
  }
}

const manager = new TimersManager();

const t1 = {
  name: "t1",
  delay: 1000,
  interval: false,
  job: () => {
    console.log("t1");
  },
};

const t2 = {
  name: "t2",
  delay: 3000,
  interval: false,
  job: (a, b) => {
    console.log(a + b);
  },
};

manager.add(t1);
manager.add(t2, 1, 2).add(t3, "Hello ", "world ", "!");
manager.start();
manager.print();
console.log(1);
