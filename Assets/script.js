// Assignment Code
//make a function for generatePassword







//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  //We will write a finchion called generatePassword that will return a string. this string will be assigned to the password var
  var password = generatePassword();

  // get reference to password dispay text
  //references to password text
  var passwordText = document.querySelector("#password"); 

  // change the value of the password display text to the string assigned to our password variable
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
