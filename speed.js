//Import the 'prompt-sync' module to get the user input
const prompt = require('prompt-sync')();
//Convert the entered their speed
const input = prompt ('Enter speed')
//Convert the entered speed to a floating-point number
const enteredspeed= parseFloat(input)
//Define the speed limit
const limit = 70
//Define a function to check the speed and calculate points
function  checkSpeed(speed) {
    if (speed < 70) {
      // If the speed is less than the limit, return "Ok"
       return "Ok";
    } else {
      // Calculate points for exceeding the limit
       let points = Math.floor((speed - 70) / 5);
       if (points > 12) {
        // If points exceed 12, return "License suspended"
         return "License suspended";
       } else {
        // If points are within the acceptable range, return the number of points
         return `Points: ${points}`;
       

       }
    }
   }
   // Call the checkSpeed function with the entered speed and print the result
   console.log (checkSpeed(input))