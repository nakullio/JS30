const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
// give score when the click hits the mole
let score = 0;

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

// set the mole popup
function peep() {
  const time = randTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  //   remove the up after timeout
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

// catch the mole
function bonk(e) {
  if (!e.isTrusted) return; // cheater!
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
