const min = 1551;
const max = 5000;
const getRandomNumberOver1550 = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("getRandomNumberOver1550").textContent =
  getRandomNumberOver1550.toLocaleString();
