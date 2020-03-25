"use strict";

console.warn("TASK-03");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const gallery = document.querySelector("#gallery");

// // potion-01
// let patternString = "";
// images.forEach(image => {
//   patternString = `<li>
//       <img src="${image.url}" alt="${image.alt}" width="300px" height="150px"/>
//     </li>`;
//   gallery.insertAdjacentHTML("beforeend", patternString);
// });
// console.log(gallery);
// gallery.style.display = "flex";

// potion-02
function createGallaryItem({ url, alt }) {
  const patternString = `<li>
  <img src="${url}" alt="${alt}" width="300px" height="150px"/>
</li>`;
  return patternString;
}

function createGallary(images) {
  return images.map(image => createGallaryItem(image)).join("");
}

const markUp = createGallary(images);
gallery.insertAdjacentHTML("beforeend", markUp);
gallery.style.display = "flex";
console.log(gallery);

// // option-03
// function getGallaryItems() {
//   let patternString = "";
//   images.forEach(image => {
//     patternString = `<li>
//         <img src="${image.url}" alt="${image.alt}" width="300px" height="150px"/>
//       </li>`;
//     gallery.insertAdjacentHTML("beforeend", patternString);
//     return patternString;
//   });
//   return;
// }

// getGallaryItems();
// console.log(gallery);
// gallery.style.display = "flex";
