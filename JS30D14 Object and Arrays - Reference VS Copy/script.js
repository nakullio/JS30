// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "naku";
let name2 = name;
console.log(name, name2);
name = "nally";
console.log(name, name2);

// Let's say we have an array
const players = ["Nakula", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = "lux";

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team[3] = "hee haaa";
console.log(team4);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Nakula",
  age: 27,
};

// and think we make a copy: on the object type
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const naku = {
  name: "nakula",
  age: 100,
  social: {
    twitter: "@nakulamarvellio",
    github: "nakullio",
  },
};
console.clear();
console.log(naku);

const dev = Object.assign({}, naku);

// another deep clone approach
const dev2 = JSON.parse(JSON.stringify(naku));
