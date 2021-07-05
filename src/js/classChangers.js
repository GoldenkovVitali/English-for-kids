
export const toggleClass = (containerCard, elementSelector, className) => {
  containerCard.querySelectorAll(elementSelector)
    .forEach((el) => el.classList.toggle(className));
};
export const addClass = (containerCard, elementSelector, className) => {
  containerCard.querySelectorAll(elementSelector)
    .forEach((el) => el.classList.add(className));
};
export const removeClass = (containerCard, elementSelector, className) => {
  containerCard.querySelectorAll(elementSelector)
    .forEach((el) => el.classList.remove(className));
};
