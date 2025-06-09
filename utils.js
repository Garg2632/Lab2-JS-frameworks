// utils.js

// Function 1: Personalized Study Reminder
function sendStudyReminder(name, subject, time) {
  console.log(`Hey ${name}, it's time to study ${subject} at ${time}. Stay focused and good luck!`);
}

// Function 2: Convert litres to gallons
function litresToGallons(litres) {
  return litres * 0.264172;
}

// Function 3: Calculate the average of an array
function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Function 4: Check Countdown Timer Formatter
function formatCountdown(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

// Export functions (ES Module syntax)
export { sendStudyReminder, litresToGallons, calculateAverage, formatCountdown };
