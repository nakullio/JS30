// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

// get all the link element
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

// add a class of highlight
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundlingClientRect();
  console.log(linkCoords);
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));

//  this the progress line
