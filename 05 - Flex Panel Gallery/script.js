// grab all the panels
const panels = document.querySelectorAll(".panel");
// write the function that toggle that class
console.log("hello");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
// each of the panels we listen on the click
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

// create a transitionend event to bring words from top and bottom to the middle
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
