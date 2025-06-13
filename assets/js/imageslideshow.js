document.addEventListener("DOMContentLoaded", function () {
  const imagePaths = [
    "images/AgeofEmpires.png",
    "images/DiablioIV.png",
    "images/HogwartsLegacy.png",
    "images/MGS3.png",
    "images/ApexLegends.png",
    "images/CODMO3.png",
    "images/ForzaMotorSport2023.png",
    "images/MetalGear.png",
    "images/StreetFighter6.png",
    "images/AgeofWonders4.png",
    "images/F1Manager2023.png",
    "images/Cyberpunk2077.png",
    "images/MiraculousRiseofSphinx.png",
    "images/Hotwheels2.png",
    "images/Titanfall2.png"
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