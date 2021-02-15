// store setInternval in global fun
let countdown;
// set the display
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

// create function call timer
function timer(seconds) {
  //  when the timer start
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  //   display the timer
  countdown = setInterval(() => {
    // how much time left on the clock
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if (secondsLeft <= 0) {
      clearInterval(countdown);
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  // convert into seconds, take math.floor for the lower bound
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  //   display the timer
  const display = `${minutes}:${
    reminderSeconds < 10 ? "0" : ""
  }${reminderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

// showing the ending time
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  //   get the hours & minutes  from date object above
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
