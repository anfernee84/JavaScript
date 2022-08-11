const processCall = (recepient, isAvailable, notAvailable) => {
  const isRecepientAvailable = Math.random() > 0.5;
  console.log(`Calling ${recepient}`);

  setTimeout(() => {
    if (!isRecepientAvailable) {
      notAvailable(recepient);
      return;
    } else {
      isAvailable(recepient);
    }
  }, 1000);
};

const makeAcall = (name) => {
  setTimeout(() => {
    console.log(`Connecting with ${name}, please wait...`);
  }, 500);
};

const answeringMashine = (name) => {
  setTimeout(() => {
    console.log(
      `${name} is busy now. Please, call later or leave a message...`
    );
  }, 5000);
};

const leaveHoloMessage = (name) => {
  setTimeout(() => {
    console.log(`${name} is not available. Writing a videomessage`);
  }, 5000);
};
process.nextTick(() => console.log("Moment..."));

processCall("Vasya", makeAcall, answeringMashine);
processCall("Onufriy", makeAcall, leaveHoloMessage);
