// app.js

// Importing functions from utils.js
import { sendStudyReminder, litresToGallons, calculateAverage, formatCountdown } from './utils.js';

console.log("=== Node.js ES Module Demo with .js files ===\n");

// Function 1 usage
sendStudyReminder("Pankaj", "Computer Science", "6:30 PM");

// Function 2 usage
const gallons = litresToGallons(10);
console.log(`10 litres is equal to ${gallons.toFixed(2)} gallons.`);

// Function 3 usage
const avg = calculateAverage([85, 90, 78, 92]);
console.log(`Average score is: ${avg.toFixed(2)}`);

// Function 4 usage
const timeFormatted = formatCountdown(3825); 
console.log(`Formatted time: ${timeFormatted}`);
