"use strict";

console.warn("TASK-02");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsList = document.querySelector("#ingredients");
const createIngredientsList = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const createItem = document.createElement("li");
  createItem.textContent = ingredient;
  createIngredientsList.prepend(createItem);
});

ingredientsList.append(createIngredientsList);
console.log(ingredientsList);
