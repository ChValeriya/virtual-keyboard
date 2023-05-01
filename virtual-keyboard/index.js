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
textarea.setAttribute('autofocus', '');
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

let keyboardRow1En = document.createElement('div');
let keyboardRow1Rus = document.createElement('div');
keyboardRow1En.classList.add('keyboard__row');
keyboardRow1Rus.classList.add('keyboard__row');
keyboardRow1En.classList.add('keyboard__row_active');
let button = document.createElement('div');
let keyboardRow2En = document.createElement('div');
let keyboardRow2Rus = document.createElement('div');
keyboardRow2En.classList.add('keyboard__row');
keyboardRow2Rus.classList.add('keyboard__row');
keyboardRow2En.classList.add('keyboard__row_active');
let keyboardRow3En = document.createElement('div');
let keyboardRow3Rus = document.createElement('div');
keyboardRow3En.classList.add('keyboard__row');
keyboardRow3Rus.classList.add('keyboard__row');
keyboardRow3En.classList.add('keyboard__row_active');
let keyboardRow4En = document.createElement('div');
let keyboardRow4Rus = document.createElement('div');
keyboardRow4En.classList.add('keyboard__row');
keyboardRow4Rus.classList.add('keyboard__row');
keyboardRow4En.classList.add('keyboard__row_active');
let keyboardRow5En = document.createElement('div');
let keyboardRow5Rus = document.createElement('div');
keyboardRow5En.classList.add('keyboard__row');
keyboardRow5Rus.classList.add('keyboard__row');
keyboardRow5En.classList.add('keyboard__row_active');

let row1ContentEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let row1ContentRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let row1Keys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
let addRow1 = (lang, row) => {
  for (let i = 0; i < row1ContentEn.length; i++) {
    let clone = button.cloneNode();
    clone.classList.add('keyboard__button');
    clone.classList.add(`${row1Keys[i]}`);
    if (i === 13) {
      clone.classList.add('keyboard__button_big');
    }  
    clone.textContent = `${lang[i]}`;
    row.append(clone);
  }  
}
addRow1(row1ContentEn, keyboardRow1En)
addRow1(row1ContentRus, keyboardRow1Rus)



let row2ContentEn = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
let row2ContentRus = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'];
let row2Keys = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
let addRow2 = (lang, row) => {
  for (let i = 0; i < row2ContentEn.length; i++) {
    let clone = button.cloneNode();
    clone.classList.add('keyboard__button');
    clone.classList.add(`${row2Keys[i]}`);
    clone.textContent = `${lang[i]}`;
    row.append(clone);
  }
}
addRow2(row2ContentEn, keyboardRow2En)
addRow2(row2ContentRus, keyboardRow2Rus)

let row3ContentEn = ['Caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
let row3ContentRus = ['Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
let row3Keys = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
let addRow3 = (lang, row) => {
  for (let i = 0; i < row3ContentEn.length; i++) {
    let clone = button.cloneNode();
    clone.classList.add('keyboard__button');
    clone.classList.add(`${row3Keys[i]}`);
    if (i === 0 || i === 12) {
      clone.classList.add('keyboard__button_big');
    }
    clone.textContent = `${lang[i]}`;
    row.append(clone);
  }
}
addRow3(row3ContentEn, keyboardRow3En)
addRow3(row3ContentRus, keyboardRow3Rus)

let row4ContentEn = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'Shift'];
let row4ContentRus = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'Shift'];
let row4Keys = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
let addRow4 = (lang, row) => {
  for (let i = 0; i < row4ContentEn.length; i++) {
    let clone = button.cloneNode();
    clone.classList.add('keyboard__button');
    clone.classList.add(`${row4Keys[i]}`);
    if (i === 0 || i === 12) {
      clone.classList.add('keyboard__button_big');
    }
    clone.textContent = `${lang[i]}`;
    row.append(clone);
  }
}
addRow4(row4ContentEn, keyboardRow4En)
addRow4(row4ContentRus, keyboardRow4Rus)

let row5ContentEn = ['Ctrl', '⊞', 'Alt', ' ', 'Alt', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'];
let row5ContentRus = ['Ctrl', '⊞', 'Alt', ' ', 'Alt', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'];
let row5Keys = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
let addRow5 = (lang, row) => {
  for (let i = 0; i < row5ContentEn.length; i++) {
    let clone = button.cloneNode();
    clone.classList.add('keyboard__button');
    clone.classList.add(`${row5Keys[i]}`);
    if (i === 3) {
      clone.classList.add('space');
    }
    clone.textContent = `${lang[i]}`;
    row.append(clone);
  }
}
addRow5(row5ContentEn, keyboardRow5En)
addRow5(row5ContentRus, keyboardRow5Rus)

keyboard.append(keyboardRow1En);
keyboard.append(keyboardRow1Rus);
keyboard.append(keyboardRow2En);
keyboard.append(keyboardRow2Rus);
keyboard.append(keyboardRow3En);
keyboard.append(keyboardRow3Rus);
keyboard.append(keyboardRow4En);
keyboard.append(keyboardRow4Rus);
keyboard.append(keyboardRow5En);
keyboard.append(keyboardRow5Rus);
main.append(textarea);
main.append(keyboard);


let footer = document.createElement('footer');
footer.classList.add('footer');
let os = document.createElement('p');
let switching = document.createElement('p');
os.classList.add('footer__information');
switching.classList.add('footer__information');
os.textContent = 'The virtual keyboard was created in Windows';
switching.textContent = 'A keyboard shortcut for switching keyboard layout on a physical keyboard: LeftShift + LeftAlt;  on the virtual keyboard: LeftAlt';
footer.prepend(switching);
footer.prepend(os);

body.prepend(footer);
body.prepend(main);
body.prepend(header);

let keyboardRows = document.querySelectorAll('.keyboard__row');
let start;
let end;

keyboard.addEventListener('click', (event) => {
  let target = event.target;

  textarea.focus();
  start = textarea.selectionStart;
  end = textarea.selectionEnd;

  if (target.classList.contains('keyboard__button')) {
    target.classList.add('keyboard__button_active');
    setTimeout(() => {
      target.classList.remove('keyboard__button_active')
    }, 200);

    if (target.classList.contains('AltLeft')) {
      keyboardRows.forEach((row) => {
        row.classList.toggle('keyboard__row_active')
      })
    }

    if (target.classList.contains('Backspace')) {
      textarea.textContent = textarea.textContent.slice(0, start - 1) + textarea.textContent.slice(end);
      textarea.selectionStart = start = start - 1;
      textarea.selectionEnd = end = end - 1;
    } else if (target.classList.contains('Tab')) {
      textarea.textContent = textarea.textContent.slice(0, start) + '   ' + textarea.textContent.slice(end);
      textarea.selectionStart = start = start + 3;
      textarea.selectionEnd = end = end + 3;
    } else if (target.classList.contains('Delete')) {
      textarea.textContent = textarea.textContent.slice(0, start) + textarea.textContent.slice(end + 1);
      textarea.selectionStart = start;
      textarea.selectionEnd = end;
    } else if (target.classList.contains('Enter')) {
      textarea.textContent = textarea.textContent.slice(0, start) + '\n' + textarea.textContent.slice(end);
      textarea.selectionStart = start = start + 1;
      textarea.selectionEnd = end = end + 1;
    } else if (target.classList.contains('ArrowLeft')) {
      textarea.selectionStart = start = start - 1;
      textarea.selectionEnd = end = end - 1;
    } else if (target.classList.contains('ArrowRight')) {
      textarea.selectionStart = start = start + 1;
      textarea.selectionEnd = end = end + 1;
    } else if (target.classList.contains('ArrowUp')) {
      let arr = textarea.textContent.split('\n');
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
        if (sum >= textarea.selectionStart) {
          textarea.selectionStart = start = start - arr[i-1].length - 1;
          textarea.selectionEnd = end = end - arr[i-1].length - 1;
          break;
        }
      }
    } else if (target.classList.contains('ArrowDown')) {
      let arr = textarea.textContent.split('\n');
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
        if (sum >= textarea.selectionStart) {
          textarea.selectionStart = start = start + arr[i].length + 1;
          textarea.selectionEnd = end = end + arr[i].length + 1;
          break;
        }
      }
    } else if (!target.classList.contains('Backspace') & !target.classList.contains('Tab') & !target.classList.contains('Delete') & !target.classList.contains('CapsLock') & !target.classList.contains('Enter') & !target.classList.contains('ShiftLeft') & !target.classList.contains('ShiftRight') & !target.classList.contains('AltLeft') & !target.classList.contains('AltRight') & !target.classList.contains('MetaLeft') & !target.classList.contains('ControlLeft') & !target.classList.contains('ControlRight') & !target.classList.contains('ArrowUp') & !target.classList.contains('ArrowLeft') & !target.classList.contains('ArrowRight') & !target.classList.contains('ArrowDown')) {
      textarea.textContent = textarea.textContent.slice(0, start) + `${target.textContent}` + textarea.textContent.slice(end);
      textarea.selectionStart = start = start + 1;
      textarea.selectionEnd = end = end + 1;
    }
  }
})

let buttons = document.querySelectorAll('.keyboard__button');
let rowKeys = [...row1Keys, ...row2Keys, ...row3Keys, ...row4Keys, ...row5Keys]

document.addEventListener('keydown', (event) => {
  start = textarea.selectionStart;
  end = textarea.selectionEnd;

  if (event.shiftKey &&  event.altKey) {
    let keyboardRows = document.querySelectorAll('.keyboard__row');
    keyboardRows.forEach((row) => {
      row.classList.toggle('keyboard__row_active');
    })
  }

  for (let i = 0; i < rowKeys.length; i++) {
    if (event.code === `${rowKeys[i]}`) {
      event.preventDefault();

      if (event.code === 'Backspace') {
        textarea.textContent = textarea.textContent.slice(0, start - 1) + textarea.textContent.slice(end);
        textarea.selectionStart = start = start - 1;
        textarea.selectionEnd = end = end - 1;
      } else if (event.code === 'Tab') {
        textarea.textContent = textarea.textContent.slice(0, start) + '   ' + textarea.textContent.slice(end);
        textarea.selectionStart = start = start + 3;
        textarea.selectionEnd = end = end + 3;
      } else if (event.code === 'Delete') {
        textarea.textContent = textarea.textContent.slice(0, start) + textarea.textContent.slice(end + 1);
        textarea.selectionStart = start;
        textarea.selectionEnd = end;
      } else if (event.code === 'Enter') {
        textarea.textContent = textarea.textContent.slice(0, start) + '\n' + textarea.textContent.slice(end);
        textarea.selectionStart = start = start + 1;
        textarea.selectionEnd = end = end + 1;
      } else if (event.code === 'ArrowLeft') {
        textarea.selectionStart = start = start - 1;
        textarea.selectionEnd = end = end - 1;
      } else if (event.code === 'ArrowRight') {
        textarea.selectionStart = start = start + 1;
        textarea.selectionEnd = end = end + 1;
      } else if (event.code === 'ArrowUp') {
        let arr = textarea.textContent.split('\n');
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i].length;
          if (sum >= textarea.selectionStart) {
            textarea.selectionStart = start = start - arr[i-1].length - 1;
            textarea.selectionEnd = end = end - arr[i-1].length - 1;
            break;
          }
        }
      } else if (event.code === 'ArrowDown') {
        let arr = textarea.textContent.split('\n');
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i].length;
          if (sum >= textarea.selectionStart) {
            textarea.selectionStart = start = start + arr[i].length + 1;
            textarea.selectionEnd = end = end + arr[i].length + 1;
            break;
          }
        }
      } else if (event.code !== 'Backspace' & event.code !== 'Tab' & event.code !== 'Delete' & event.code !== 'CapsLock' & event.code !== 'Enter' & event.code !== 'ShiftLeft' & event.code !== 'ShiftRight' & event.code !== 'AltLeft' & event.code !== 'AltRight' & event.code !== 'MetaLeft' & event.code !== 'ControlLeft' & event.code !== 'ControlRight' & event.code !== 'ArrowUp' & event.code !== 'ArrowLeft' & event.code !== 'ArrowRight' & event.code !== 'ArrowDown') {
        textarea.textContent = textarea.textContent.slice(0, start) + `${event.key}` + textarea.textContent.slice(end);
        textarea.selectionStart = start = start + 1;
        textarea.selectionEnd = end = end + 1;
      }
      for (let btn of buttons) {
        if (btn.classList.contains(`${rowKeys[i]}`)) {
          btn.classList.add('keyboard__button_active');
          setTimeout(() => {
            btn.classList.remove('keyboard__button_active')
          }, 200);
        }
      }
    }
  }
});