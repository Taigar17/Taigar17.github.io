// Set your start date here (Year, Month - 1, Day)
const startDate = new Date(2023, 10, 1); // Example: Jan 15, 2020
const today = new Date();

// Calculate the difference in milliseconds and convert to days
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// Update the element
document.getElementById("experience-days").textContent =
  diffDays.toLocaleString();
