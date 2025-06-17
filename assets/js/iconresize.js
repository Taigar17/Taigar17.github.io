document.addEventListener("DOMContentLoaded", () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let platformClass = "pc"; // Default to PC

  if (/android/i.test(userAgent)) {
    platformClass = "android";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    platformClass = "ios";
  }

  document.body.classList.add(platformClass);
});