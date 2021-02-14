// get the speed, bar, and video element
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

// listen to mouse move and handleMove
speed.addEventListener("mousemove", handleMove);
