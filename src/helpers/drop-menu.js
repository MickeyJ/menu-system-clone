
const transitionRate = 300; // maximum 500
const transitionHeight = 400;

const displayToggle = (el) =>{
  el.style.display === 'none'
    ? el.style.display = 'block'
    : setTimeout(() =>{ el.style.display = 'none' }, transitionRate);
};

export const toggle = (menu, background) =>{

  displayToggle(menu);
  displayToggle(background);

  setTimeout(() =>{
    menu.style.marginTop === `-${transitionHeight}px`
      ? menu.style.marginTop = 0
      : menu.style.marginTop = `-${transitionHeight}px`;
  }, transitionRate / 6);

  setTimeout(() =>{
    background.style.opacity == 0
      ? background.style.opacity = 1
      : background.style.opacity = 0;
  }, transitionRate / 6);

};

export const reset = (menu, background) =>{
  menu.style.marginTop = `-${transitionHeight}px`;
  background.style.opacity = 0;
  setTimeout(() =>{ menu.style.display = 'none' }, transitionRate);
  setTimeout(() =>{ background.style.display = 'none' }, transitionRate);
};