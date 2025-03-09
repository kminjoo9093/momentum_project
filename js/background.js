const images = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg", "bg_4.jpg"];

const bgImg = document.querySelector("#bg-img");
const chosenImg = images[Math.floor(Math.random() * images.length)];

bgImg.src = `./images/${chosenImg}`;
