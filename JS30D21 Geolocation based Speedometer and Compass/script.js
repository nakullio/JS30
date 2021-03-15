// get the arrow and speed from html
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

// set the position live
navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    // updating data
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
