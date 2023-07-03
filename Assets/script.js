// Assignment Code
//make a function for generatePassword
  var lowercase = [," a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = [," A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [," 1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChar = [ ," !", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]","\\", "^", "_", "{", "}", "~"];



function generatePassword() {
  var length = window.prompt("Password must be between 8 to 128 characters long")

  length = length * 1;

  if (isNaN(length) || length < 8 || length > 128){
    alert("That is not a number...")
    return;
  };
 
  var uppercasePrompt = window.confirm("Would you like to have uppercase characters?");

  var lowercasePrompt = window.confirm("Would you like to have lowercase characters?");

  var numbersPrompt = window.confirm("Would you like to have number characters?");

  var specialCharPrompt = window.confirm("Would you like to have special characters?" );


  if(!uppercasePrompt && !lowercasePrompt && !numbersPrompt && !specialCharPrompt){
    alert("Please confirm on of the options")
    return;
  }

  var combine = ""

  if (uppercasePrompt == true) {
    combine = combine.concat(uppercase)
  }
  
  if (lowercasePrompt == true){
    combine = combine.concat(lowercase)
  }

  if(numbersPrompt == true){
    combine = combine.concat(numbers)
  }

  if(specialCharPrompt == true){
    combine = combine.concat(specialChar)
  }

 for ( var i = 0; i < length; i++){
  var index = Math.floor(Math.random() * combine.length)
  
 }
console.dir(combine)
console.dir(combine.length)

}


//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
