const inputs = document.querySelectorAll(".controls input");

function handleUpudate() {
  const suffix = this.dataset.sizing || "";
  //   update the actual variable, and adding suffix variable to get the'px'
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// listen on the change event based on each input
inputs.forEach((input) => input.addEventListener("change", handleUpudate));
//  when you drag the mouse, its not real time update, so we listen on mouse moves as well
inputs.forEach((input) => input.addEventListener("mousemove", handleUpudate));
