const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log(`hello i am ${"nakula"}`);

// Styled, use %c if you wanna style, and put teh style css after that
console.log("%c I am some great text", "font-size: 20px; background: red;");

// warning!
console.warn("OH MYYY");

// Error :|
console.error("shit!");

// Info
console.info("crocodiles eat bananas");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "Thas is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Naku");

console.count("Naku");
console.count("Naku");
console.count("Marvel");
console.count("Marvel");
console.count("Marvel");
console.count("Marvel");

console.count("Naku");
console.count("Naku");
console.count("Marvel");
console.count("Naku");
console.count("Naku");

// timing , see how long something takes
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//   table
console.table(dogs);
