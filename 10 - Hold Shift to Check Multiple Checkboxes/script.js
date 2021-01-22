// listen when check box is checked
const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');
console.log(checkboxes);

// create a variable to identify last check position
let lastChecked;

// create handleCheck ()
function handleCheck(e) {
  // check if they had Shift key down
  // and also check that they are checking it.
  // then create in between check to loop through which data are being fisrt and last check
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Startign to check in between");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

// check to all checkboxexes
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
