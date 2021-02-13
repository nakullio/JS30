// selecting the box item
// listening on divs event we've clicked on
// anchoring click position on div to measure how much we have to move the div left or right
//  it will be the combination of mousedown, mouseup, mouseleave, mouse move

// 1. grab the sliders
const slider = document.querySelector(".items");
// 2. check if clicking the items or not
let isDown = false;
let startX;
let scrollLeft;

// 3. listen on the mouse event
slider.addEventListener("mousedown", () => {
  // handle isDown
  isDown = true;
});
slider.addEventListener("mouseleave", () => {
  // handle isDown
  isDown = true;
});
slider.addEventListener("mouseup", () => {
  // handle isDown
  isDown = true;
});
slider.addEventListener("mousemove", () => {
  console.log(isDown);
  console.log("Do Work!");
});
