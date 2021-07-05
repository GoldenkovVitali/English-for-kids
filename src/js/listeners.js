import {
  SWITCHINPUT,
  MAINCONTAINER,
  MENU,
  containerCard,
  audiovalue,
  audioSet,
  CHECKBOX,
  audioEffects,
  containerMain,
} from "./variables";

import playAudio from "./utils";

import { addClass, toggleClass, removeClass } from "./classChangers";

export const switchInputCallbak = () => {
  MENU.classList.toggle("green");
  toggleClass(MAINCONTAINER, ".main-card", "greeen");
  toggleClass(containerCard, ".card", "card-cover");
  toggleClass(containerCard, ".card-header", "none");
  toggleClass(containerCard, ".rotate", "none");
  toggleClass(containerCard, ".btn", "none");
  removeClass(containerCard, ".card", "start");
  removeClass(containerCard, ".front", "start");
  removeClass(containerCard, ".front", "inactive");
  removeClass(containerCard, ".btn", "repeat");
  if (MAINCONTAINER.querySelector(".rating")) {
    MAINCONTAINER.querySelector(".rating").classList.add("none");
    localStorage.setItem("sexesAnswers", 0);
    audiovalue.splice(0, audiovalue.length);
    audioSet.splice(0, audioSet.length);
    localStorage.setItem("wrongAnswers", 0);
  }
};
export const mainContainerCallbak = (event) => {
  const correctAnswers = localStorage.getItem("sexesAnswers");
  const errorAnswers = localStorage.getItem("wrongAnswers");
  if (event.target.className === "btn repeat") {
    // console.log(audioSet[correctAnswers])
    playAudio(audioSet[correctAnswers]);
  }
  const rating = document.querySelector(".rating");
  if (
    event.target.className === "btn" &&
    CHECKBOX.className === "switch-input checked"
  ) {
    event.target.classList.add("repeat");
    addClass(document, ".front", "start");
    document.querySelectorAll(".card").forEach((etem) => {
      etem.classList.add("start");
      const valu = etem.getAttribute("value");
      audiovalue.push(valu);
    });
    audiovalue.sort(() => 0.5 - Math.random());
    audiovalue.forEach((item) => {
      audioSet.push(`audio/${item}.mp3`);
    });
    playAudio(audioSet[localStorage.getItem("sexesAnswers")]);

    if (rating && rating.className === "rating none") {
      rating.classList.remove("none");
    }
  }
  // ---------------------клик на картинку -------------------------------
  if (
    event.target.className === "front start" &&
    CHECKBOX.className === "switch-input checked"
  ) {
    event.target.classList.add("inactive");
    if (event.target.innerText === audiovalue[correctAnswers]) {
      localStorage.setItem("sexesAnswers", Number(correctAnswers) + 1);
      audioEffects.src = "./audio/correct.mp3";
      audioEffects.play();
      rating.innerHTML += "<div class='star-succes'></div>";
      if (Number(localStorage.getItem("sexesAnswers")) < 8) {
        setTimeout(() => {
          playAudio(audioSet[localStorage.getItem("sexesAnswers")]);
        }, 2000);
      }
    } else {
      audioEffects.src = "./audio/error.mp3";
      audioEffects.play();
      rating.innerHTML += "<div class='star-error'></div>";
      localStorage.setItem("wrongAnswers", Number(errorAnswers) + 1);
      event.target.classList.remove("inactive");
    }
    if (Number(localStorage.getItem("sexesAnswers")) === 8) {
      if (Number(localStorage.getItem("wrongAnswers")) === 0) {
        containerCard.innerHTML = "";
        document.querySelector(".switch-container").classList.add("nones");
        document.querySelector("#body").classList.add("succes");
        document.querySelector(".menuToggle").classList.add("nones");
        setTimeout(() => {
          audioEffects.src = "./audio/success.mp3";
          audioEffects.play();
        }, 1000);
        setTimeout(() => {
          document.querySelector(".switch-container").classList.remove("nones");
          document.querySelector("#body").classList.remove("succes");
          document.querySelector(".menuToggle").classList.remove("nones");
          containerCard.innerHTML = containerMain;
          removeClass(MAINCONTAINER, ".main-card", "greeen");
        }, 3000);
      } else {
        containerCard.innerHTML = `Количество допущенных ошибок - ${localStorage.getItem(
          "wrongAnswers"
        )}`;
        document.querySelector("#body").classList.add("failure");
        document.querySelector(".switch-container").classList.add("nones");
        document.querySelector(".menuToggle").classList.add("nones");
        setTimeout(() => {
          audioEffects.src = "./audio/failure.mp3";
          audioEffects.play();
        }, 1000);
        setTimeout(() => {
          document.querySelector("#body").classList.remove("failure");
          document.querySelector(".switch-container").classList.remove("nones");
          document.querySelector(".menuToggle").classList.remove("nones");
          containerCard.innerHTML = containerMain;
          removeClass(MAINCONTAINER, ".main-card", "greeen");
        }, 3000);
      }
      localStorage.setItem("sexesAnswers", 0);
      audiovalue.splice(0, audiovalue.length);
      audioSet.splice(0, audioSet.length);
      localStorage.setItem("wrongAnswers", 0);
    }
  }
};
export function addListenerToElement(element, event, callback) {
  element.addEventListener(event, callback);
}

export const addListenersOnLoad = () => {
  addListenerToElement(SWITCHINPUT, "click", switchInputCallbak);
  addListenerToElement(MAINCONTAINER, "click", mainContainerCallbak);
};
