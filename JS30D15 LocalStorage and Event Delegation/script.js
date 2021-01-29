const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
// listen to the submit event, for the actual content has been submitted on the form
function addItem(e) {
  //   stop teh page to reload or refresh
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  //   take this item, then put them in array on const items = [] above
  items.push(item);
  populateList(items, itemsList);
  //   set this items array into localStorage
  //   and use JSON.stringify() to convert object into array
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

// use populateList function
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
            <label for="item${i}">${plate.text}</label>
        </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  //   update actual changes on input item list
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
// once page load
populateList(items, itemsList);
