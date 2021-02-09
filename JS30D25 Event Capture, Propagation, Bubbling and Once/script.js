// select all the divs
const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
  //   stop bubbling this event up, which no longer trigger the event on parent element
  e.stopPropagation();
}

// this is trying to check which element are being clcked on body context
// document.body.addEventListener("click", logText);

// loop over each div
//  using object capture: true is to run the function all teh way down, not all the way up. and get target element instead
divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false,
  })
);
