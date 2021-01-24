// get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// build out functions
//  1. build play function
function togglePlay() {
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }

  // or write this way
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  console.log("update the button");
}

//  Hook up the event listeners
//  1. Hookup when click the video screen
video.addEventListener("click", togglePlay);
// update the button based on click conditions
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// 2. Hookup when click the toggle button
toggle.addEventListener("click", togglePlay);
