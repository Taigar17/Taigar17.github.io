// Check if device supports hover and fine pointer (desktop)
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  // Create the cursor element
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  // Move cursor with the mouse
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // On click: change to "click" cursor
  document.addEventListener("mousedown", () => {
    cursor.classList.add("clicking");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("clicking");
  });
}
