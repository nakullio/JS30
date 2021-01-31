// grab the hero calss and text
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

function shadow(e) {
  //   get the width and the height
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // normalise the mouse position
  // console.log(this, e.target);
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  console.log(x, y);
}

hero.addEventListener("mousemove", shadow);
