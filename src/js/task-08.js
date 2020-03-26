"use strict";

const ref = {
  render: document.querySelector("button[data-action='render']"),
  clean: document.querySelector("button[data-action='destroy']"),
  boxes: document.querySelector("#boxes")
};

ref.render.addEventListener("click", getAmount);
ref.clean.addEventListener("click", removeAll);

function getAmount() {
  let amount = document.querySelector("#controls input").value;
  return createBoxes(amount);
}

function createBoxes(amount) {
  const fragmet = document.createDocumentFragment();
  let startSize = 30;
  for (let index = 0; index < amount; index += 1) {
    const div = document.createElement("div");
    const size = startSize + index * 10;
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} `;
    fragmet.append(div);
  }
  ref.boxes.append(fragmet);
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function removeAll() {
  ref.boxes.textContent = "";
}
