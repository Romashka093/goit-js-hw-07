"use strict";

console.warn("TASK-06");
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector("input[data-length='6']");
console.log(input);

input.addEventListener("blur", checkValue);
// option-01
function checkValue(evt) {
  const value = evt.currentTarget.value;
  console.log("value:", value);
  if (value.length >= 6) {
    input.style.borderColor = "#4caf50";
  } else {
    input.style.borderColor = "#f44336";
  }
}

// // option-02
// const validLength = Number(input.dataset.length);
// console.log(validLength);

// function checkValue(evt) {
//   const inputValue = evt.currentTarget.value;
//   console.log("inputValue.length:", inputValue.length);
//   if (inputValue.length >= validLength) {
//     input.classList.add("valid");
//   } else {
//     input.classList.add("invalid");
//   }
// }
