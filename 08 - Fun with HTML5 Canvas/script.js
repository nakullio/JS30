const canvas = document.querySelector("#draw");

// grab the context
const ctx = canvas.getContext("2d");

// Resizing canvas fro its deafult
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create a line
ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
// using global composit operation like photoshop
// ctx.globalCompositeOperation = "multiply";

//  a dummmy variable, to be able draw and stop draw by mouse
let isDrawing = false;

// last draw location
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true; // it building up the max width

// draw function, to being call for every move on the mouse
function draw(e) {
  if (!isDrawing) return; // stop the function from running when they are not moused down
  console.log(e);
  //    using hue effect hsl effet
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  //   building a line
  ctx.beginPath();
  //   start from
  ctx.moveTo(lastX, lastY);
  //   go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  //   increment the hue
  hue++;
  //   reset the hue after reach max
  if (hue >= 360) {
    hue = 0;
  }

  //   for every loop we'd like to increment the width
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    // flip the direction
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// listen when the mouse move
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
