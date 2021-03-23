// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var lowercase = ["a", "e", "i", "o", "u"];
var uppercase = ["A", "E", "I", "O", "U"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "<", ">", "-", "+"];
var allCharacters = [];

// while (length <= 8 || length >= 128) {
//   var length = prompt(
//     "How many characters would you like your password to be?"
//   );
//   if (length <= 8) {
//     alert("Password has too be at least 8 and no more than 128 characters");
//   } else if (length >= 128) {
//     alert("Password has too be at least 8 and no more than 128 characters");
//   }
// }

var confirmLowerCase = confirm("Would you like to use lower case letters?");
if (confirmLowerCase === true) {
  allCharacters = lowercase.concat(allCharacters);}

var confirmUpperccase = confirm("Would you like to use uppercase letters");
if (confirmUpperccase === true)
  allCharacters = uppercase.concat(allCharacters);

var confirmNumeric = confirm("Would you like to use numeric characters?");
if (confirmUpperccase === true)
  allCharacters = numeric.concat(allCharacters);

var confirmSpecialCharacters = confirm(
  "Would you like to use special characters?"
);
if (confirmUpperccase === true)
  allCharacters = specialCharacters.concat(allCharacters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
writePassword()

