"use strict";

console.warn("TASK-05");

const ref = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output")
};

ref.input.addEventListener("input", handleChange);

function handleChange(evt) {
  const userName = evt.currentTarget.value;
  if (userName === "") {
    ref.output.textContent = "незнакомец";
  } else {
    ref.output.textContent = userName;
  }
}
