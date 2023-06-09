//task 1
// Positive Integer
var positiveInteger = parseInt(prompt("Enter a positive integer:"));
document.write("<h3>Positive Integer:</h3>");
document.write("Number: " + positiveInteger + "<br>");
document.write("Round off value: " + Math.round(positiveInteger) + "<br>");
document.write("Floor value: " + Math.floor(positiveInteger) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br>");

//task2
var negativeFloat = parseFloat(prompt("Enter a negative floating-point number:"));
document.write("<h3>Negative Floating-Point Number:</h3>");
document.write("Number: " + negativeFloat + "<br>");
document.write("Round off value: " + Math.round(negativeFloat) + "<br>");
document.write("Floor value: " + Math.floor(negativeFloat) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeFloat) + "<br>");
//task13
// Function to calculate the absolute value of a number
function absoluteValue(number) {
    if (number < 0) {
      return -number; // Negate the number if it's negative
    } else {
      return number; // Return the number as is if it's positive or zero
    }
  }
  
  // task14
  function rollDice() {
    // Generate a random number between 1 and 6 (inclusive)
    var diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue;
  }
  
  // Example usage of the functions
  var number = -4;
  console.log("Absolute value of " + number + " is: " + absoluteValue(number));
  
  var diceRoll = rollDice();
  console.log("Dice roll value: " + diceRoll);

  // task5
function tossCoin() {
    // Generate a random number between 0 and 1
    var randomNum = Math.random();
  
    if (randomNum < 0.5) {
      return "Heads"; // If the number is less than 0.5, consider it as "Heads"
    } else {
      return "Tails"; // If the number is greater than or equal to 0.5, consider it as "Tails"
    }
  }
  
  // Call the function and display the result in the browser
  var coinResult = tossCoin();
  document.write("Coin toss result: " + coinResult);

  //task6
  // Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("Random number between 1 and 100: " + randomNumber);

//task9

    // Ask the user for their weight
    var userInput = prompt("Please enter your weight:");


    var weight = parseFloat(userInput.replace(/[^\d.]/g, ""));

  
    document.write("Your weight is: " + weight + " kgs");
  //task10
  
    // Generate a random secret number between 1 and 10
    var secretNumber = Math.floor(Math.random() * 10) + 1;

    // Ask the user to input a number
    var userInput = parseInt(prompt("Please enter a number between 1 and 10:"));

    // Check if the user input matches the secret number
    if (userInput === secretNumber) {
      document.write("Congratulations! You guessed the secret number.");
    } else {
      document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
    }
 