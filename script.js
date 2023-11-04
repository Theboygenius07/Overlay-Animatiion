import { data } from './data.js'; // Import data from data.js

const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector("#close-btn");
const itemDetails = document.querySelector(".items-details");

const tl = gsap.timeline({ paused: true, overwrite: "auto" });

function updateOverlay(itemData) {
  // Update overlay content with the itemData
  document.getElementById("item-name").textContent = itemData.name;
  document.getElementById("item-category").textContent = itemData.category;
  document.getElementById("item-link").href = itemData.link;
  document.getElementById("item-copy").textContent = itemData.copy;
  document.getElementById("item-img").src = itemData.imgSrc;
}

const items = document.querySelectorAll(".items .item");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateOverlay(data[index]);

    // Add animation to bring the overlay to view and reset rotation to 0 degrees
    tl.to(overlay, { bottom: "0px", rotation: 0, duration: 0.5, ease: "power3.inOut" });
    tl.play();
  });
});

closebtn.addEventListener("click", () => {
  // Add animation to hide the overlay and rotate it
  tl.to(overlay, { bottom: -1200, rotation: 20, duration: 0.5, ease: "power3.inOut" });
  tl.reverse();
});

document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && !isItem(e.target)) {
    // Add animation to hide the overlay and rotate it
    tl.to(overlay, { bottom: "-1200px", rotation: 20, duration: 0.5, ease: "power3.inOut" });
    tl.reverse();
  }
});

function isItem(target) {
  return target.closest('.item');
}
