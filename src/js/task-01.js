"use strict";

console.warn("TASK-01");

const categories = document.querySelector("ul#categories");
const items = document.querySelectorAll(".item");

const calculateCategories = categories.children.length;
console.log(`В списке ${calculateCategories} категории.`);

items.forEach(item => {
  const category = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("ul li").length;
  console.log(`Категория: ${category}
Количество элементов: ${quantity}`);
});
