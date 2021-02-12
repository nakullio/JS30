// trigger all li element
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// listen to hover in and hover out on mouse enter & leave

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  //   what that dropdown actually is
  const dropdown = this.querySelector(".dropdown");
  console.log(dropdown);

  const dropdownCoords = dropdown.getBoundingClientRect();
  //   grab the nav coordinate
  const navCoords = nav.getBoundingClientRect();

  //   get the two coords together
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    // offset the actual coord value
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  //   styling the background
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("width", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);

// get the content of dropdown

//
