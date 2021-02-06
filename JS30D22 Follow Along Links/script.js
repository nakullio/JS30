// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

// get all the link element
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

// add a class of highlight
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  //   record the scroll postion for precision
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${linkCoords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));

//  this the progress line
