const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
//   fetch data
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(worldToMatch, cities) {
  return cities.filter((place) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(worldToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
// create display function to show the data
function displayMatches() {
  console.log(this.value);
}

// select the input
const searchInput = document.querySelector(".search");
const sugestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", findMatches);
