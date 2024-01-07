// Array of special characters to be included in password
var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.' ];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

var pwLength = 0;
var pwLowercase = false;
var pwUppercase = false;
var pwNumeric = false;
var pwSpecialChar = false;

// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt user to enter number of desired password characters
  var pwLength = prompt("How many characters would you like to include in your Password?");

  //Convert prompt string to number
  var pwLengthNum = parseFloat(pwLength);

  // Check user's input is between 8 and 128 chars
  if (pwLengthNum >= 8 && pwLengthNum <= 128) {
    console.log(`You have chosen ${pwLengthNum} characters`);

    // Confirm user would like to include lowercase chars
    var checkLowercase = confirm("Would you like to include lowercase characters?");

    // Set password lowercase to true if user selects true
    checkLowercase ? pwLowercase = checkLowercase : console.log("You did not choose any lower characters");

    // Confirm user would like to include uppercase chars
    var checkUppercase = confirm("Would you like to include uppercase characters?");

    // Set password uppercase to true if user selects true
    checkUppercase ? pwUppercase = checkUppercase : console.log("You did not choose any uppercase characters");

    var checkNumeric = confirm("Would you like to include numeric characters?");
    checkNumeric ? pwNumeric = checkNumeric : console.log("You did not choose any numeric characters");

    var checkSpecialChar = confirm("Would you like to include special characters?");
    checkSpecialChar ? pwSpecialChar = checkSpecialChar : console.log("You did not choose any special characters");

  } else {
    console.log("Your password should be between 8 - 128 characters long to continue");
  }
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

  // Get random index value
  var randomIndex = Math.floor(Math.random() * arr.length);

  // Get random character 
  var randomChar = arr[randomIndex];
  
  return randomChar;
}

console.log(getRandom(specialCharacters));
console.log(getRandom(numericCharacters));
console.log(getRandom(lowerCasedCharacters));
console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

