// push the keyup in to an array
const pressed = [];
const secretCode = "nakula";

// trim the array into maximum we want to

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  //   check if the array containt secret code
  if (pressed.join("").includes(secretCode)) {
    console.log("You did it! yeay");
    cornify_add();
  }
  console.log(pressed);
});
