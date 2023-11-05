import { data } from './data.js'; // Import data from data.js

const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector("#close-btn");
const itemDetails = document.querySelector(".items-details");

const tl = gsap.timeline({ paused: true, overwrite: "auto" });

tl.to(overlay, {
 bottom: "0px", 
rotation: 0,
 duration: 0.5,
 transformOrigin: "bottom center",
  ease: "power3.inOut" });


const items = document.querySelectorAll(".items .item");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateOverlay(data[index]);

    tl.play();
  });
});

closebtn.addEventListener("click", () => {
  tl.reverse();
});

function updateOverlay(itemData) {
    // Update overlay content with the itemData
    document.getElementById("item-name").textContent = itemData.name;
    document.getElementById("item-category").textContent = itemData.category;
    document.getElementById("item-link").href = itemData.link;
    document.getElementById("item-copy").textContent = itemData.copy;
    document.getElementById("item-img").src = itemData.imgSrc;
  }

document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && !isItem(e.target)) {
    // Add animation to hide the overlay and rotate it
    tl.reverse();
  }
});

function isItem(target) {
  return target.closest('.item');
}
gsap.from(items, { opacity: 0, y: 30, duration: 0.5, stagger: 0.2 });

// Animate navigation bar
gsap.from(nav, { y: -30, opacity: 0, duration: 0.5, delay: 0.5 });

