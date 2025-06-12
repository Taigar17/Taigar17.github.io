// Set your start date here (Year, Month - 1, Day)
const startDate = new Date(2023, 10, 1); // Nov 1, 2023
const today = new Date();

// Calculate the difference in milliseconds
const diffTime = today - startDate;

// Convert to time units
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
const diffMinutes = Math.floor(diffTime / (1000 * 60));
const diffSeconds = Math.floor(diffTime / 1000);

// Update the elements
document.getElementById("experience-days").textContent = diffDays.toLocaleString();
document.getElementById("experience-hours").textContent = diffHours.toLocaleString();
document.getElementById("experience-minutes").textContent = diffMinutes.toLocaleString();
document.getElementById("experience-seconds").textContent = diffSeconds.toLocaleString();
