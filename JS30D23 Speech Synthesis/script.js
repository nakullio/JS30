const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

// listen to voice change
function populateVoices() {
  voices = this.getVoices();
  console.log(voices);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
