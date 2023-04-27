let body = document.querySelector('body');

let header = document.createElement('header');
header.classList.add('header');
let title = document.createElement('h1');
title.classList.add('header__title');
title.textContent = 'Virtual keyboard';
header.prepend(title);


let main = document.createElement('main');
main.classList.add('main');
let textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('rows', '5');
textarea.setAttribute('cols', '50');
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

let keyboardRow1 = document.createElement('div');
keyboardRow1.classList.add('keyboard__row');
let button = document.createElement('div');
let keyboardRow2 = document.createElement('div');
keyboardRow2.classList.add('keyboard__row');
let keyboardRow3 = document.createElement('div');
keyboardRow3.classList.add('keyboard__row');
let keyboardRow4 = document.createElement('div');
keyboardRow4.classList.add('keyboard__row');
let keyboardRow5 = document.createElement('div');
keyboardRow5.classList.add('keyboard__row');

let row1ContentEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let row1ContentEnUp = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
let row1ContentRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let row1ContentRusUp = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];
for (let i = 0; i < row1ContentEn.length; i++) {
  let clone = button.cloneNode();
  clone.classList.add('keyboard__button');
  if (i === 13) {
    clone.classList.add('keyboard__button_big');
  }
  clone.textContent = `${row1ContentEn[i]}`;
  keyboardRow1.append(clone);
}

let row2ContentEn = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
let row2ContentEnUp = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];
let row2ContentRus = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'];
let row2ContentRusUp = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'];
for (let i = 0; i < row2ContentEn.length; i++) {
  let clone = button.cloneNode();
  clone.classList.add('keyboard__button');
  clone.textContent = `${row2ContentEn[i]}`;
  keyboardRow2.append(clone);
}

let row3ContentEn = ['Caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
let row3ContentEnUp = ['Caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
let row3ContentRus = ['Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
let row3ContentRusUp = ['Caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];
for (let i = 0; i < row3ContentEn.length; i++) {
  let clone = button.cloneNode();
  clone.classList.add('keyboard__button');
  if (i === 0 || i === 12) {
    clone.classList.add('keyboard__button_big');
  }
  clone.textContent = `${row3ContentEn[i]}`;
  keyboardRow3.append(clone);
}

let row4ContentEn = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'Shift'];
let row4ContentEnUp = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ᐃ', 'Shift'];
let row4ContentRus = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'Shift'];
let row4ContentRusUp = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'ᐃ', 'Shift'];
for (let i = 0; i <= 12; i++) {
  let clone = button.cloneNode();
  clone.classList.add('keyboard__button');
  if (i === 0 || i === 12) {
    clone.classList.add('keyboard__button_big');
  }
  clone.textContent = `${row4ContentEn[i]}`;
  keyboardRow4.append(clone);
}

let row5ContentEn = ['Ctrl', '⊞', 'Alt', '', 'Alt', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'];
for (let i = 0; i <= 8; i++) {
  let clone = button.cloneNode();
  clone.classList.add('keyboard__button');
  if (i === 3) {
    clone.classList.add('space');
  }
  clone.textContent = `${row5ContentEn[i]}`;
  keyboardRow5.append(clone);
}


keyboard.append(keyboardRow1);
keyboard.append(keyboardRow2);
keyboard.append(keyboardRow3);
keyboard.append(keyboardRow4);
keyboard.append(keyboardRow5);
main.append(textarea);
main.append(keyboard);


let footer = document.createElement('footer');
footer.classList.add('footer');
let os = document.createElement('p');
let switching = document.createElement('p');
os.classList.add('footer__information');
switching.classList.add('footer__information');
os.textContent = 'The virtual keyboard was created in Windows';
switching.textContent = 'A keyboard shortcut for switching keyboard layout: left Shift + Alt';
footer.prepend(switching);
footer.prepend(os);

body.prepend(footer);
body.prepend(main);
body.prepend(header);