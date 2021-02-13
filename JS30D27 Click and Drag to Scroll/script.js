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
slider.addEventListener("mousedown", (e) => {
  // handle isDown
  isDown = true;
  //   adding active class
  slider.classList.add("active");
  //   check click position on the page, and on the actual item clicked
  startX = e.pageX - slider.offsetLeft;
  console.log(startX);
});
slider.addEventListener("mouseleave", () => {
  // handle isDown
  isDown = false;
  //   remove active class
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  // handle isDown
  isDown = false;
  //   remove active class
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", () => {
  if (!isDown) return; // stop the fn from running
  console.count(isDown);
  console.log(startX);
});
