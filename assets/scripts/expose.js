// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById("horn-select");
  const image = document.querySelector('img');
  const button = document.querySelector('button');
  const audio = document.querySelector('audio');
  const volume = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const confetti = new JSConfetti();

  select.addEventListener('change', function() {
    switch(select.value) {
      case "air-horn":
        image.src = "/assets/images/air-horn.svg";
        audio.src = "/assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        image.src = "/assets/images/car-horn.svg";
        audio.src = "/assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        image.src = "/assets/images/party-horn.svg";
        audio.src = "/assets/audio/party-horn.mp3";
        break;
    }
  })
  button.addEventListener('click', function() {
    audio.play();
    if (select.value == "party-horn") {
      confetti.addConfetti();
      confetti.clearCanvas();
    }
  })

  volume.addEventListener('input', function() {
    var level = volume.value;
    if (level == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } 
    else if (level < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if (level < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeIcon.src = "assets/icons/volume-level-3.svg"; 
    }
    audio.volume = volume.value/100;
  })
}

