//  listening keyup event

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   adding animation when key pressed
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  //change the button animation
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if it's not a transform

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// listen on transition end, then remove it
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
