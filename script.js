// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var characterOptions = []
var notification = document.querySelector("#notification")


// Function to prompt user for password options
function getPasswordOptions() {
  var keyLength = parseInt(prompt("Password must be between 8 and 128 characters in length."));
  if (keyLength < 8 || keyLength > 128 || Number.isNaN(keyLength)) {
    alert("Your password does not meet the critia");
    return null 
  }
    
    var uppercaseABC = confirm("Do you want an uppercase letter?");
    var lowercaseABC = confirm("Do you want a lowercase letter!");
    var specialSymbols = confirm("Do you want a symbol!");
    var numeric = confirm("Do you want a number!");
    console.log(keyLength,uppercaseABC, lowercaseABC, specialSymbols, numeric);
if(!uppercaseABC && !lowercaseABC && !specialSymbols && !numeric ){
 alert ("Must select 1 option")
  return null
}

if(uppercaseABC === true) {
  characterOptions = characterOptions.concat (upperCasedCharacters)
  }
  if(lowercaseABC === true) {
    characterOptions = characterOptions.concat (lowerCasedCharacters)
      }
  if(specialSymbols === true) {
    characterOptions = characterOptions.concat (specialCharacters)
    }
      
  if(numeric === true) {
    characterOptions = characterOptions.concat (numericCharacters)
    }
  console.log(characterOptions)
  return keyLength
  }
  

  
// Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input


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