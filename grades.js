// Import the 'prompt-sync' module to get user input
const prompt = require ('prompt-sync')();
// Prompt the user to enter their marks
const input = prompt ('Enter marks')
// Convert the entered marks to a floating-point number
const enteredmarks= parseFloat (input)

// Define a function called 'marks' that calculates the grade based on the marks
function marks (o) {
if (o > 79) return "A"
// If marks are greater than 79, return "A"
else if (60 <= o && o<=79) return "B";
 // If marks are between 60 and 79 (inclusive), return "B"
else if (50 <= o && o <= 59) return "C";
 // If marks are between 50 and 59 (inclusive), return "C"
else if (40 <= o&& o <= 49) return "D";
  // If marks are between 40 and 49 (inclusive), return "D"
else if (40 > o) return "E"
// If none of the above conditions are met, return "Please insert valid grade"
else return "Please insert valid grade"
}
// Call the 'marks' function with the entered marks and print the grade
console.log ("Grade" + marks (enteredmarks)) 

