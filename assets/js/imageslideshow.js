document.addEventListener("DOMContentLoaded", function () {
  const imagePaths = [
    "images/AgeofEmpires.png",
    "images/HighonLife.png",
    "images/DiabloIV.png",
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
    "images/Titanfall2.png",
    "images/SnakesRevenge.png",
  ];

  const altTexts = [
    "Age of Empires",
    "High on Life",
    "Diablo IV",
    "Hogwarts Legacy",
    "Metal Gear Solid 3",
    "Apex Legends",
    "Call of Duty Modern Warfare 3",
    "Forza Motorsport 2023",
    "Metal Gear",
    "Street Fighter 6",
    "Age of Wonders 4",
    "F1 Manager 2023",
    "Cyberpunk 2077",
    "Miraculous Rise of Sphinx",
    "Hotwheels 2",
    "Titanfall 2",
    "Snake's Revenge",
  ];

  const slider = document.getElementById("imageSlider");
  if (!slider) {
    console.error("Slider element not found!");
    return;
  }

  // Duplicate images for seamless loop
  const fullImageList = [...imagePaths, ...imagePaths];
  const fullAltList = [...altTexts, ...altTexts];

  fullImageList.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = fullAltList[index];
    slider.appendChild(img);
  });

  window.addEventListener("load", () => {
    const sliderWidth = slider.scrollWidth;
    const animationDuration = Math.max(sliderWidth / 100, 20);

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${sliderWidth / 2}px); }
      }

      #imageSlider {
        animation: scroll ${animationDuration}s linear infinite;
      }
    `;
    document.head.appendChild(style);
  });
});
