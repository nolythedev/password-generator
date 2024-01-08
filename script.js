// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var pwLength = 0;
var pwLowercase = false;
var pwUppercase = false;
var pwNumeric = false;
var pwSpecialChar = false;

// Prompt user to enter number of desired password characters
var pwLength = prompt("How many characters would you like to include in your Password?");

//Convert prompt string to number
var pwLengthNum = parseFloat(pwLength);

pwLength = pwLengthNum;

// Function to prompt user for password options
function getPasswordOptions() {

  // Confirm user would like to include lowercase chars
  var checkLowercase = confirm("Would you like to include lowercase characters?");
  pwLowercase = checkLowercase;

  // Confirm user would like to include uppercase chars
  var checkUppercase = confirm("Would you like to include uppercase characters?");
  pwUppercase = checkUppercase;

  var checkNumeric = confirm("Would you like to include numeric characters?");
  pwNumeric = checkNumeric;

  var checkSpecialChar = confirm("Would you like to include special characters?");
  pwSpecialChar = checkSpecialChar;

}

// Function for getting a random element from an array
function getRandom(arr) {

  // Get random index value of array being passed through 
  var randomIndex = Math.floor(Math.random() * arr.length);

  // Get random character
  var randomChar = arr[randomIndex];

  return randomChar;
}

// Create an empty password 
var userPassword = "";

// Function to generate password with user input
function generatePassword() {
  // Clear current password to generate a new one
  userPassword = ""; 
  // While loop to concatenate to empty password eachtime it loops through
  while (userPassword.length < pwLength) {
    pwLowercase && (userPassword += getRandom(lowerCasedCharacters));
    pwUppercase && (userPassword += getRandom(upperCasedCharacters));
    pwNumeric && (userPassword += getRandom(numericCharacters));
    pwSpecialChar && (userPassword += getRandom(specialCharacters));
    // If password === user input length, end the loop
    if (userPassword.length >= pwLength) {
      break;
    }
  }
  return userPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Check user's input is between 8 and 128 chars
if (pwLength >= 8 && pwLength <= 128) {
  //Run the getPasswordOptions function
  getPasswordOptions();
  // Check that user has selected at least on character
  if (pwLowercase === true || pwUppercase === true || pwNumeric === true || pwSpecialChar === true) {
    generatePassword(userPassword);
    generateBtn.disabled = false;
  } else {
    alert("You must select at least one character type for your password to continue");
  }
// Check that pwLength is a number not a string
} else if (isNaN(pwLength)) {
  alert("Please type in a number to continue");
} else {
  alert("Your password should be between 8 - 128 characters long to continue");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

