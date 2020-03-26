"use strict";

console.log("TASK-01:");

const ref = {
  categories: document.querySelector("ul#categories"),
  items: document.querySelectorAll(".item")
};

const calculateCategories = ref.categories.children.length;
console.log(`В списке ${calculateCategories} категории.`);

ref.items.forEach(item => {
  const category = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("ul li").length;
  console.log(`Категория: ${category}
Количество элементов: ${quantity}`);
});
