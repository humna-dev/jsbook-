//task1

function displayCurrentDateTime() {
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
  
    document.write("Current date and time: " + dateTimeString);
  }
  
  // Call the function to display current date and time
  displayCurrentDateTime();

  //task2

  function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
  
    document.write("Hello, " + fullName + "! Welcome!");
  }
  
  // Call the function to greet the user
  greetUser("John", "Doe");

  //task3
  function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
  }
  
  // Call the function and display the sum
  var result = addNumbers(5, 10);
  document.write("The sum of the two numbers is: " + result);

  //task4
  function calculate(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        document.write("Invalid operator.");
        return;
    }
  
    document.write("The result is: " + result);
  }
  
  // Call the calculator function
  calculate(5, 2, "+");

  //task5
  function squareNumber(num) {
    var squared = num * num;
    return squared;
  }
  
  // Call the function and display the squared number
  var result = squareNumber(4);
  document.write("The squared number is: " + result);

  //task6
  function factorial(number) {
    var result = 1;
  
    for (var i = 2; i <= number; i++) {
      result *= i;
    }
  
    return result;
  }
  
  // Call the function and display the factorial
  var result = factorial(5);
  document.write("The factorial of the number is: " + result);

  
  //task7
  function displayCount(start, end) {
    for (var i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  }
  
  // Call the function to display counting numbers
  displayCount(1, 10);

  //task8
  function calculateHypotenuse(base, perpendicular) {
    function square(number) {
      return number * number;
    }
  
    var hypotenuseSquared = square(base) + square(perpendicular);
    var hypotenuse = Math.sqrt(hypotenuseSquared);
  
    return hypotenuse;
  }
  
  // Call the function and display the hypotenuse
  var result = calculateHypotenuse(3, 4);
  document.write("The hypotenuse of the right triangle is: " + result);

  
  //task9
  // Arguments as value
function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
  }
  
  // Arguments as variables
  var width = 4;
  var height = 5;
  var result = calculateRectangleArea(width, height);
  document.write("The area of the rectangle is: " + result);

  
  //task10

  function isPalindrome(string) {
    var reversedString = string.split("").reverse().join("");
  
    if (string === reversedString) {
      return true;
    } else {
      return false;
    }
  }
  
  // Call the function to check if a string is a palindrome
  var inputString = "madam";
  var isPalin = isPalindrome(inputString);
  document.write("Is the string a palindrome? " + isPalin);

  
  //task11
  function convertFirstLetterToUpper(string) {
    var words = string.split(" ");
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var firstLetter = word.charAt(0).toUpperCase();
      var restOfWord = word.slice(1).toLowerCase();
      words[i] = firstLetter + restOfWord;
    }
  
    var convertedString = words.join(" ");
    return convertedString;
  }
  
  // Call the function to convert the first letter of each word to upper case
  var inputString = "the quick brown fox";
  var convertedString = convertFirstLetterToUpper(inputString);
  document.write("Converted string: " + convertedString);

  //task12
  function findLongestWord(string) {
    var words = string.split(" ");
    var longestWord = "";
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  // Call the function to find the longest word in the string
  var inputString = "Web Development Tutorial";
  var longestWord = findLongestWord(inputString);
  document.write("Longest word: " + longestWord);

  
  //task13
  function countLetterOccurrences(string, letter) {
    var count = 0;
  
    for (var i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        count++;
      }
    }
  
    return count;
  }
  
  // Call the function to count the occurrences of a letter in the string
  var inputString = "JSResourceS.com";
  var letter = "o";
  var occurrences = countLetterOccurrences(inputString, letter);
  document.write("Number of occurrences of letter '" + letter + "': " + occurrences);

  

  //task14

  function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2));
  }
  
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area.toFixed(2));
  }
  
  // Call the functions with a given radius
  var radius = 5;
  calcCircumference(radius);
  document.write("<br>");
  calcArea(radius);
  
  
  