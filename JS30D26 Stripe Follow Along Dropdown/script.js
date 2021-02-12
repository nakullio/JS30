// trigger all li element
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// listen to hover in and hover out on mouse enter & leave

function handleEnter() {
  console.log("ENTER");
}

function handleLeave() {
  console.log("LEAVE");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
