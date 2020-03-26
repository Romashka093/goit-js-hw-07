"use strict";

const input = document.querySelector("input[data-length='6']");

input.addEventListener("blur", checkValue);
// option-01
function checkValue(evt) {
  const value = evt.currentTarget.value;
  if (value.length >= 6) {
    input.style.borderColor = "#4caf50";
  } else {
    input.style.borderColor = "#f44336";
  }
}

// // option-02
// const validLength = Number(input.dataset.length);
// function checkValue(evt) {
//   const inputValue = evt.currentTarget.value;
//   if (inputValue.length >= validLength) {
//     input.classList.add("valid");
//   } else {
//     input.classList.add("invalid");
//   }
// }
