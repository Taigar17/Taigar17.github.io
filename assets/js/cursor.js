function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isDesktop() {
  return (
    !isIOS() &&
    !("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

if (isDesktop()) {
  document.body.classList.add("desktop");

  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.addEventListener("mousedown", () => {
    cursor.classList.add("clicking");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("clicking");
  });
}
