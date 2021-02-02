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

function paintToCnvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takephoto() {
  // played the sound
  snap.currenTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  console.log(data);
}
getVideo();

video.addEventListener("canplay", paintToCnvas);
