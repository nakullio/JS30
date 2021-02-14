// get the speed, bar, and video element
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

// handleMove function, which listen to event
function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  //   turn the position into percentage
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  //   setup the playback number
  const playbackRate = percent * (max - min) + min;
  //   take the bar
  bar.style.height = height;
  //   set the barContent into playbackRate with fix 2 decimal behind
  bar.textContent = playbackRate.toFixed(2) + "x";
  //   get the value from playback rate
  video.playbackRate = playbackRate;
}

// listen to mouse move and handleMove
speed.addEventListener("mousemove", handleMove);
