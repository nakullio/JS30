function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// select the picture we want to open.
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  // loop over every single images
  sliderImages.forEach((sliderImage) => {
    // to get the pixel level where we at the bottom of the scroll
    // this is the half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // check the px of bottom image position
    // this is the bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scollY < imageBottom;
    // if statement for ifhalfshown & isnotscrolledpast
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
