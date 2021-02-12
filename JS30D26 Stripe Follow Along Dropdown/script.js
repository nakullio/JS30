// trigger all li element
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// listen to hover in and hover out on mouse enter & leave

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    this.classList.add("trigger-enter-active");
  }, 150);
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);

// get the content of dropdown

//
