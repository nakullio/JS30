// select all the notes containt time data
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

// return nodeList into array of item
const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    // using ES6 method, and map the split with parseFloat to make it not as a string but a number
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
    console.log(mins, secs);
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
//   maps is taking an array and export in array
//  and reduce will take an array and return it into an big number in this case (it could be an object, or anything else)
