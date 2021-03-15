// select all the divs
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //   stop bubbling this event up, which no longer trigger the event on parent element
  //   e.stopPropagation();
}

// this is trying to check which element are being clcked on body context
// document.body.addEventListener("click", logText);

// loop over each div
//  using object capture: true is to run the function all teh way down, not all the way up. and get target element instead
divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false,
    once: true,
  })
);

//  once: true, listen on click, then run once only, after that eventListener will be remove. and the function stop
// it will be benefit on store check out, which you not allow user click more that  one

// example on button
button.addEventListener(
  "click",
  () => {
    console.log("click!!");
  },
  {
    once: true,
  }
);
