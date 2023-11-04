import { data } from './data.js'; // Import data from data.js

const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector("#close-btn");

const tl = gsap.timeline({ paused: true, overwrite: "auto" });

function updateOverlay(itemData) {
  // Update overlay content with the itemData
  document.getElementById("item-name").textContent = itemData.name;
  document.getElementById("item-category").textContent = itemData.category;
  document.getElementById("item-link").href = itemData.link;
  document.getElementById("item-copy").textContent = itemData.copy;
  document.getElementById("item-img").src = itemData.imgSrc;
}

const items = document.querySelectorAll(".item"); // Use querySelectorAll to get all items

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateOverlay(data[index]);
    tl.play();
  });
});

closebtn.addEventListener("click", () => {
  tl.reverse();
});

document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && !isItem(e.target)) {
    // Check if the clicked element is not within the overlay
    tl.reverse();
  }
});

function isItem(target) {
  return target.closest('.item');
}
