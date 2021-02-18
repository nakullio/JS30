const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;

// set the function for interact with elements
// listen to any events
// check at the DOM for development and result
// set the Global and Local Scope in appropiate way

// pop up the mole randomy wihtin few seconds range
// when mouse click on mole, it will be update the scores

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// pick the random hole for the mole pop up from
function randomHole(holes) {
  // find the index of holes
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log(" hahahahaha");
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}
