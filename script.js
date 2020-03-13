// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of possible chars used in password
var numChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Options for password
var useNums;
var useLower;
var useUpper;
var useSpecial;

// Variables to hold passwords
var password = [];
var finalPass = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generates a random value from an array
function randomValueGenerator(arr,passLength) {
  for(var i = 0; i < passLength; i++) {
    password.push(arr[Math.floor(Math.random() * arr.length)]);
  }
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  // Prompt user for password length
  var passwordLength = prompt("What length should the password be? (Must be at least 8 to and no more than 128 characters)");
  // Validate the length is between 8 - 128 characters
  while(passwordLength < 8 || passwordLength > 128) {
    // Try again till length criteria is met
    passwordLength = prompt("Try Again! Choose a length of at least 8 to and no more than 128 characters");
  }
  // Prompt the user what to use in password
  // Numbers, LowerCase, UpperCase, Special
  useNums = confirm("Do you want to use NUMBERS?");
  useLower = confirm("Do you want to use LOWER CASE LETTERS?");
  useUpper = confirm("Do you want to use UPPER CASE LETTERS?");
  useSpecial = confirm("Do you want to use SPECIAL CHARACTERS?");
  // Generate if anything was selected from selection
  if(useNums === true || useLower === true || useUpper === true || useSpecial === true) {
    if(useNums === true){
      randomValueGenerator(numChars,passwordLength);
    }
    if(useLower === true) {
      randomValueGenerator(lowercaseChars,passwordLength);
    }
    if(useUpper === true) {
      randomValueGenerator(uppercaseChars,passwordLength);
    }
    if(useSpecial === true) {
      randomValueGenerator(specialChars,passwordLength);
    }
  }
  else {
    alert("You didn't select anything!");
  }
  for(var i = 0; i < passwordLength; i++) {
    finalPass.push(password[Math.floor(Math.random() * password.length)]);
  }
  return finalPass.join('');
}