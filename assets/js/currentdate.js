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

// Update the "date" span if it exists
const dateSpan = document.getElementById("date");
if (dateSpan) {
  // Format date string, e.g. "June 13, 2025"
  dateSpan.textContent = today.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Safely update experience counters if elements exist
const updateElementText = (id, value, useLocaleString = true) => {
  const el = document.getElementById(id);
  if (el)
    el.textContent = useLocaleString
      ? value.toLocaleString()
      : value.toString();
};

updateElementText("experience-days", diffDays);
updateElementText("experience-hours", diffHours);
updateElementText("experience-minutes", diffMinutes);
updateElementText("experience-seconds", diffSeconds);

// Update current year in footer if element exists WITHOUT comma
updateElementText("year", today.getFullYear(), false);
