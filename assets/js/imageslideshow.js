document.addEventListener("DOMContentLoaded", function () {
  const imagePaths = [
    "images/DiablioIV.png",
    "images/HogwartsLegacy.png",
    "images/MGS3.png",
    "images/ApexLegends.png",
    "images/CODMO3.png",
    "images/MetalGear.png",
    "images/StreetFighter6.png"
  ];

  const slider = document.getElementById("imageSlider");
  if (!slider) {
    console.error("Slider element not found!");
    return;
  }

  const fullImageList = [...imagePaths, ...imagePaths];

  fullImageList.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Game";
    slider.appendChild(img);
  });
});

console.log("imageslideshow.js loaded");