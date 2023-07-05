var yes = true
var no = false
var empty = ""

function generatePassword() {
  var length = window.prompt("Password must be between 8 to 128 characters long")
  
  length = length * 1;

  if (isNaN(length) || length < 8 || length > 128){
    alert("Please choose a length between 8 and 128")
    return empty;
  };
  var uppercasePrompt = window.prompt ("Would you like to have uppercase characters yes or no?")
  if(uppercasePrompt.toLowerCase() !=="yes" && uppercasePrompt.toLowerCase()!=="no" ) {
    alert("Please type in yes or no")
    return;
  }

  var lowercasePrompt = window.prompt ("Would you like to have lowercase characters yes or no?")
  if(lowercasePrompt.toLowerCase() !=="yes" && lowercasePrompt.toLowerCase()!=="no" ) {
    alert("Please type in yes or no")
    return;
  }

  var numbersPrompt = window.prompt ("Would you like to have number characters yes or no?")
  if(numbersPrompt.toLowerCase() !=="yes" && numbersPrompt.toLowerCase()!=="no" ) {
    alert("Please type in yes or no")
    return;
  }

  var specialCharPrompt = window.prompt ("Would you like to have number characters yes or no?")
  if(specialCharPrompt.toLowerCase() !=="yes" && specialCharPrompt.toLowerCase()!=="no" ) {
    alert("Please type in yes or no")
    return;
  }

  if(uppercasePrompt.toLowerCase() ==="no" && lowercasePrompt.toLowerCase() ==="no" && numbersPrompt.toLowerCase() ==="no" && specialCharPrompt.toLowerCase() ==="no"){
    alert("Please choose one of the characters")
    return empty;

  }


  let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let specialChar = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]","\\", "^", "_", "{", "}", "~"];

  var combine = [];

  if (uppercasePrompt.toLowerCase() === "yes") {
    combine = combine.concat(uppercase);
  }
  
  if (lowercasePrompt.toLowerCase() === "yes"){
    combine = combine.concat(lowercase);
  }

  if(numbersPrompt.toLowerCase() === "yes"){
    combine = combine.concat(numbers);
  }

  if(specialCharPrompt.toLowerCase() === "yes"){
    combine = combine.concat(specialChar);
  }

 var password = ""

 for ( var i = 0; i < length; i++){
  var index = Math.floor(Math.random() * combine.length);
 password += combine[index]
 }

return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
 
}

generateBtn.addEventListener("click", writePassword);

