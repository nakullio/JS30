// grab the nav
const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
  }
}

// run at every page
window.addEventListener("scroll", fixNav);
