function isDesktopDevice() {
  return (
    !("ontouchstart" in window) && // no touch support
    navigator.userAgent.match(/(Macintosh|Windows|Linux)/) && // likely desktop
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

if (isDesktopDevice()) {
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
