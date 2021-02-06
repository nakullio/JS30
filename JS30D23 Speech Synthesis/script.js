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
  //   trim the lang list for 'en' only
  //   adding voice language references
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes("en"))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

// make the voice options works
function setVoice() {
  //   loop over voice name reference to activate choosen voice
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

// stop the voice when lang changes
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);

// enabling options functionalities
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
