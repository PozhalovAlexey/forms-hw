/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover.js
function tooltip({
  title,
  message
}, element) {
  const popoverElement = document.createElement('div');
  popoverElement.classList.add('popover');
  const popoverTitle = document.createElement('div');
  popoverTitle.classList.add('popover-title');
  popoverTitle.textContent = title;
  popoverElement.prepend(popoverTitle);
  const popoverContent = document.createElement('p');
  popoverContent.textContent = message;
  popoverContent.classList.add('popover-content');
  popoverElement.append(popoverContent);
  element.append(popoverElement);
  popoverElement.style.top = `${-popoverElement.offsetHeight - 5}px`;
  const width = Math.abs(popoverElement.offsetWidth - element.offsetWidth) / 2;
  popoverElement.style.right = `${-width}px`;
  return popoverElement;
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector(".container");
const data = {
  'btn-1': {
    title: 'Popover first',
    message: 'Message-1'
  },
  'btn-2': {
    title: 'Popover second',
    message: 'Message-2'
  },
  'btn-3': {
    title: 'Popover third',
    message: 'Message-3'
  },
  'btn-4': {
    title: 'Popover fourth',
    message: 'Message-4'
  }
};
container.addEventListener("click", event => {
  event.preventDefault();
  const {
    target
  } = event;
  const btn = target.closest(".btn");
  if (btn) {
    let popover = btn.querySelector(".popover");
    if (popover) {
      popover.classList.toggle("hidden");
    } else {
      popover = tooltip(data[btn.id], btn);
    }
  }
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map