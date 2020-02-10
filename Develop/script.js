// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts on the page when Generate Password button is clicked
function promptPassword() {
  var howLong = prompt("How long would you like your password to be?");
  var lower = confirm("Would you like to use lowercase letters?");
  var upper = confirm("Would you like to use uppercase letters?");
  var number = confirm("Would you like to use numbers?");
  var symbol = confirm("Would you like to use symbols?");
}



// The generate password button with an event listener that is to be clicked
document.querySelector('#generate').addEventListener('click', promptPassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Different functions using the Browser Character Set 
// Function for generating random lowercase letters
function generateLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Function for generating random uppercase letters
function generateUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Function for generating random numbers
function generateNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Function for generating random symbols - based off of the contant string
function generateSym() {
  const symbols = "!@#$%^&*()_+-=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(generateLow());
console.log(generateUp());
console.log(generateNum());
console.log(generateSym());