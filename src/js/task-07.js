"use strict";

console.warn("TASK-07");

const ref = {
  controller: document.querySelector("#font-size-control"),
  text: document.querySelector("#text")
};

function handleControl(evt) {
  const sizeValue = evt.currentTarget.value;
  ref.text.style.fontSize = sizeValue + "px";
}

ref.controller.addEventListener("input", handleControl);
