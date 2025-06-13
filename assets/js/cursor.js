// Create the cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Move cursor with the mouse
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// On click: change to "click" cursor
document.addEventListener('mousedown', () => {
  cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('clicking');
});

// Support for touch devices
document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  cursor.style.transform = `translate(${touch.clientX}px, ${touch.clientY}px)`;
  cursor.classList.add('clicking');
});

document.addEventListener('touchend', () => {
  cursor.classList.remove('clicking');
});
