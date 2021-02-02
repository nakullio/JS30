const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch((err) => {
      console.error(`OH NOO!!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixel out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    pixels = redEffect(pixels);
    // put them back
    ctx.putImageDAta(pixels, 0, 0);
  }, 16);
}

function takephoto() {
  // played the sound
  snap.currenTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  // create an element based on text on  the snap
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("donwload", "handsome");
  link.innerHTML = `<img src="${data} alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i + 0] = pixels.data[i + 0] + 100; // red
    pixels[i + 1] = pixels.data[i + 1] - 50; // green
    pixels[1 + 2] = pixels.data[i + 2] + 0.5; // blue
  }
  return pixels;
}
getVideo();

video.addEventListener("canplay", paintToCanvas);
