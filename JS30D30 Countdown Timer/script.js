// store setInternval in global fun
let countdown;

// create function call timer
function timer(seconds) {
  //  when the timer start
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  //   display the timer
  countdown = setInterval(() => {
    // how much time left on the clock
    const secondLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if (secondLeft < 0) {
      clearInterval(countdown);
    }
    // display it
    console.log(secondLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  console.log(seconds);
}
