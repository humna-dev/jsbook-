// task 1
function main() {

    var firstName = prompt("Enter your first name:");
  
    var lastName = prompt("Enter your last name:");
  
    var fullName = firstName + " " + lastName;
  
alert("Hello, " + fullName + "! Welcome.");
  }
 
  main();
 // Taking user input for favorite mobile phone model
  var favoriteModel = prompt("Enter your favorite mobile phone model:");
  
  // Finding the length of the user input
  var length = favoriteModel.length;
  
  // Displaying the length in the browser
  document.write("The length of your favorite mobile phone model is: " + length);
  // Finding the index of letter "n" in the word "Pakistani"
  var word = "Pakistani";
  var index = word.indexOf("n");
  
  // Displaying the result 
  document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);
// Finding the last index of letter "l" in the word "Hello World"
  var word = "Hello World";
  var lastIndex = word.lastIndexOf("l");
  
  // Displaying the result 
   document.write("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);
 //task5
var word = "Pakistani";
var character = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

//task6
var characterConcat = word.concat().charAt(3);
document.write("<br>");
document.write("The character at the 3rd index using the concat() method is: " + characterConcat);

//task7
var word = "Hyderabad";
var replacedWord = word.replace("Hyder", "Islam");
document.write("Original word: " + word + "<br>");
document.write("Replaced word: " + replacedWord);
//task8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
document.write("Original message: " + message + "<br>");
document.write("Replaced message: " + replacedMessage);
//task9
var stringNumber = "472";
var convertedNumber = Number(stringNumber);

document.write("String value: " + stringNumber + "<br>");
document.write("Type of string value: " + typeof stringNumber + "<br>");
document.write("Converted number: " + convertedNumber + "<br>");
document.write("Type of converted number: " + typeof convertedNumber);
//task10
// Prompt the user for input
var userInput = prompt("Enter a sentence:");

// Convert the input to uppercase
var capitalizedInput = userInput.toUpperCase();

// Display the result
console.log(capitalizedInput);
//task11
// Prompt the user for input
var userInput = prompt("Enter a sentence:");

// Convert the input to title case
var titleCaseInput = userInput.toLowerCase().replace(/(^|\s)\S/g, function (letter) {
  return letter.toUpperCase();
});

// Display the result
console.log(titleCaseInput);

//task12
// Define the number
var num = 35.36;

// Convert the number to a string and remove the decimal point
var numAsString = num.toString().replace(".", "");

// Display the result
console.log(numAsString);

//task13
// Validate username
function validateUsername() {
  var username = prompt("Enter your username: ");

  var validSymbols = ['@', '.', ',', '!'];
  var containsSpecialSymbol = false;

  for (var i = 0; i < validSymbols.length; i++) {
    if (username.includes(validSymbols[i])) {
      containsSpecialSymbol = true;
      break;
    }
  }

  if (containsSpecialSymbol) {
    alert("Invalid username. Please enter a valid username without special symbols.");
    validateUsername();
  } else {
    alert("Username: " + username);
  }
}
//task14
validateUsername();

// Perform search in array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem() {
  var searchItem = prompt("Enter the item to search for: ");

  var found = false;
  for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem.toLowerCase()) {
      found = true;
      break;
    }
  }

  if (found) {
    alert("Item found in the list.");
  } else {
    alert("Item not found in the list.");
  }
}

searchItem();
//task15
// Password validation
function validatePassword() {
  var password = prompt("Enter your password: ");

  var containsAlphabet = /[a-zA-Z]/.test(password);
  var containsNumber = /\d/.test(password);
  var startsWithAlphabet = /^[a-zA-Z]/.test(password);
  var isLengthValid = password.length >= 6;

  if (containsAlphabet && containsNumber && startsWithAlphabet && isLengthValid) {
    alert("Password is valid.");
  } else {
    alert("Invalid password. Please enter a valid password that meets the requirements.");
    validatePassword();
  }
}
//task16
validatePassword();

// Convert string to array
var university = "University of Karachi";
var array = university.split(" ");

document.write("Array elements: " + array.join(", "));
//task17

// Prompt the user for input
var userInput = prompt("Enter a string:");

// Check if the user input is not empty
if (userInput !== null && userInput !== "") {
  // Get the last character of the input
  var lastCharacter = userInput.charAt(userInput.length - 1);

  // Display the last character
  console.log("Last character: " + lastCharacter);
} else {
  console.log("No input provided!");
}
//task18
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";

// Convert the sentence to lowercase to make the search case-insensitive
var lowercaseSentence = sentence.toLowerCase();

// Split the sentence into an array of words
var words = lowercaseSentence.split(" ");

// Initialize a counter for the occurrences
var count = 0;

// Loop through the words and check for matches
for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToSearch) {
    count++;
  }
}

// Display the count of occurrences
console.log("Number of occurrences of the word 'the': " + count);

