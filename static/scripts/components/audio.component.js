import { body } from "../constants/constants";
import { Component } from "./component.component";
class AudioComponent extends Component {
  constructor(name, cardContainer, soundPath) {
    super(name, cardContainer);
    this.soundPath = soundPath;
  }

  static playAudio(event, element) {
    const audioPlayer = element.closest(".card").querySelector(".audio-player");
    event.preventDefault();
    audioPlayer.play();
  }
  static playCorrectAudio() {
    const correctAudio = body.querySelector(".audio-player--correct");
    correctAudio.play();
  }

  static playErrorAudio() {
    const errorAudio = body.querySelector(".audio-player--error");
    errorAudio.play();
  }

  static playFailureAudio() {
    const failureAudio = body.querySelector(".audio-player--failure");
    failureAudio.play();
  }

  static playSuccessAudio() {
    const successAudio = body.querySelector(".audio-player--success");
    successAudio.play();
  }

  static repeatPronouncedWord(id) {
    const card = document.getElementById(String(id));
    const audio = card.querySelector(".audio-player");
    audio.play();
  }

  static shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  static shuffleAudio() {
    const audioPlayers = body.querySelectorAll(".audio-player");
    const audioPlayersArray = Array.from(audioPlayers);
    return AudioComponent.shuffle(audioPlayersArray);
  }

  static *gen(array) {
    yield* array;
  }
}

export { AudioComponent };
