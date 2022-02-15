const images = ["0.png","1.png","2.png"];
const RAND_NUM_FOR_IMAGE = Math.random();
const chosenImage = images[Math.floor(RAND_NUM_FOR_IMAGE*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);