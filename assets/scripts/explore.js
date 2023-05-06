// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textToSpeak = document.getElementById("text-to-speak");
  const imgSpeak = document.querySelector("#explore img");

  window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  };

  speakButton.addEventListener('click', speakVoice);

  function speakVoice() {
    const voices = window.speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voices[voiceSelect.value];

    utterance.onstart = () => {
      // change the image to a speaking animation
      imgSpeak.src = "assets/images/smiling-open.png";
    }
    
    utterance.onend = () => {
      // change the image back to the original image
      imgSpeak.src = "assets/images/smiling.png";
    }

    window.speechSynthesis.speak(utterance);
  }
}

