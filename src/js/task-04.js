"use strict";

console.warn("TASK-04");
const ref = {
  decrement: document.querySelector("button[data-action='decrement']"),
  increment: document.querySelector("button[data-action='increment']"),
  sum: document.querySelector("#value")
};

let counterValue = 0;

function handleDecrement(evt) {
  if (evt.target) counterValue--;
  ref.sum.textContent = counterValue;
}

function handleIncrement(evt) {
  if (evt.target) counterValue++;
  ref.sum.textContent = counterValue;
}

ref.decrement.addEventListener("click", handleDecrement);
ref.increment.addEventListener("click", handleIncrement);
