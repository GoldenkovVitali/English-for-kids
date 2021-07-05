import '../css/style.css';
import '../css/style.scss';
import * as cards from './cards';
import { addClass, removeClass } from './classChangers';
import { addListenersOnLoad, switchInputCallbak, mainContainerCallbak } from './listeners';
import {
  SWITCHINPUT, MAINCONTAINER, MENU, containerCard, audiovalue, audioSet,
  CHECKBOX, containerMain,
} from './variables';

const checkbox = document.querySelector('.checkbox');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
let section;

// --------------------------------------------------функции----------------------------------------

// -------------------------отрисовка страницы-----------
function makePage() {
  containerCard.innerHTML += '<div class="rating none"></div>';
  cards.default[section].forEach((card) => {
    containerCard.innerHTML += `<div class="card-container"> 
    <div class="card" id = "card" value =${card.word}> 
    <div class="front" style="background-image: url(${card.image});" > 
      <div class="card-header" id = "card-header"> ${card.word} </div>  
    </div> 
    <div class="back" style="background-image: url(${card.image});"> 
      <div class="card-header" id = "card-header"> ${card.translation} </div>
    </div> 
    <div class="rotate" id="rotate"> 
    </div>
    </div> 
    </div>`;
  });
  containerCard.innerHTML += '<div class="btns"><button class="btn none">Start game</button></div>';
}
// --------------------функция play----------------------

// ----------------------------------СМЕНА РЕЖИМА ОБУЧЕНИЯ-------------------------------------
CHECKBOX.addEventListener('click', () => {
  CHECKBOX.classList.toggle('checked');
});
// -----------------------отрисовка страниц при нажатии на картинку--------------------------------
containerCard.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  if (sectionName) {
    containerCard.innerHTML = '';
    localStorage.setItem('sectionName', sectionName);
    for (let i = 0; i < cards.default[0].length; i += 1) {
      if (cards.default[0][i] === event.target.getAttribute('value')) {
        section = i + 1;
      }
    }
    makePage();
  }
  // ---------------если чекбокс включен (режим игры)------------------
  if (CHECKBOX.className === 'switch-input checked') {
    addClass(containerCard, '.card', 'card-cover');
    addClass(containerCard, '.card-header', 'none');
    addClass(containerCard, '.rotate', 'none');
    removeClass(containerCard, '.btn', 'none');
  } else {
    removeClass(containerCard, '.front', 'inactive');
    removeClass(containerCard, '.card', 'card-cover');
    removeClass(containerCard, '.card-header', 'none');
    removeClass(containerCard, '.rotate', 'none');
    addClass(containerCard, '.btn', 'none');
  }
});
// ----------------------------переворот табличек------------------------------------
containerCard.addEventListener('click', (event) => {
  if (event.target.className === 'rotate') {
    event.target.offsetParent.classList.add('translate');
    if (event.target.offsetParent.className === 'card translate') {
      const a = event.target.offsetParent;
      a.onmouseleave = () => a.classList.remove('translate');
    }
  }
  // -----------------------------английский язык (аудио)-----------------------------
  if (
    event.target.className === 'front'
    && event.target.className !== 'rotate'
    && CHECKBOX.className !== 'switch-input checked'
  ) {
    document
      .querySelector('audio')
      .setAttribute('src', `audio/${event.target.children[0].innerText}.mp3`);
    document.querySelector('audio').play();
  }
});
// -------------------------------отрисовка страниц при нажатии меню-----------------------
MENU.addEventListener('click', (event) => {
  // -------------------------------режим игры-----------------------
  if (CHECKBOX.className === 'switch-input checked') {
    localStorage.setItem('sexesAnswers', 0);
    audiovalue.splice(0, audiovalue.length);
    audioSet.splice(0, audioSet.length);
    localStorage.setItem('wrongAnswers', 0);
    const sectionName = event.target.getAttribute('value');
    if (sectionName && sectionName !== 'main') {
      containerCard.innerHTML = '';
      localStorage.setItem('sectionName', sectionName);
      for (let i = 0; i < cards.default[0].length; i += 1) {
        if (cards.default[0][i] === event.target.getAttribute('value')) {
          section = i + 1;
        }
      }
      makePage();
      addClass(containerCard, '.card', 'card-cover');
      addClass(containerCard, '.card-header', 'none');
      addClass(containerCard, '.rotate', 'none');
      removeClass(containerCard, '.btn', 'none');
    }
    if (sectionName === 'main') {
      containerCard.innerHTML = containerMain;
      MAINCONTAINER.querySelectorAll('.main-card').forEach((el) => el.classList.remove('greeen'));
    }
  } else {
    localStorage.setItem('sexesAnswers', 0);
    audiovalue.splice(0, audiovalue.length);
    audioSet.splice(0, audioSet.length);
    localStorage.setItem('wrongAnswers', 0);
    const sectionName = event.target.getAttribute('value');
    if (sectionName && sectionName !== 'main') {
      containerCard.innerHTML = '';
      localStorage.setItem('sectionName', sectionName);
      for (let i = 0; i < cards.default[0].length; i += 1) {
        if (cards.default[0][i] === event.target.getAttribute('value')) {
          section = i + 1;
        }
      }
      makePage();
      removeClass(containerCard, '.card', 'card-cover');
      removeClass(containerCard, '.card-header', 'none');
      removeClass(containerCard, '.rotate', 'none');
      addClass(containerCard, '.btn', 'none');
    }
    if (sectionName === 'main') {
      containerCard.innerHTML = containerMain;
      MAINCONTAINER.querySelectorAll('.main-card').forEach((el) => el.classList.add('greeen'));
    }
  }
});
// ------------------------------------------скрытие и выезд меню----------------------------------
function droptmenu() {
  MENU.classList.toggle('menu-show');
  span1.classList.toggle('span1-show');
  span2.classList.toggle('span2-show');
  span3.classList.toggle('span3-show');
}
checkbox.addEventListener('click', () => {
  droptmenu();
});
document.querySelector('#body').addEventListener('click', (event) => {
  if (
    !event.target.classList.contains('checkbox')
    && !event.target.classList.contains('menu')
    && !event.target.classList.contains('switch-label')
    && !event.target.classList.contains('switch-input')
  ) {
    MENU.classList.remove('menu-show');
    span1.classList.remove('span1-show');
    span2.classList.remove('span2-show');
    span3.classList.remove('span3-show');
  }
});
// ----------------------------------------изменение стилей при клике меню-----------------------
MENU.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    removeClass(MENU, 'a', 'activ');
    event.target.classList.add('activ');
    droptmenu();
  }
});
containerCard.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  if (sectionName) {
    removeClass(MENU, 'a', 'activ');
    MENU.querySelectorAll('a').forEach((el) => { if (el.getAttribute('value') === sectionName) { el.classList.add('activ'); } });
  }
});

// -------------------------Изменение стилей при переключении чекбокса----------------------------
addListenersOnLoad(SWITCHINPUT, 'click', switchInputCallbak);

// ------------------------------------------------РЕЖИМ ИГРЫ-------------------------------------
addListenersOnLoad(MAINCONTAINER, 'click', mainContainerCallbak);
