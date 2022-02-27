// Assignment code here

//Checks length of password: works
const passwordLengthCheck = function () {
  const passwordLength = Number(prompt("What is the length of your password? (8 - 128 characters)"));
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Please enter a value between 8 and 128 characters.");
    return passwordLengthCheck();
  }
};
const validSelection = function () {
  const hasLowercase = confirm("Does the password require lowercase characters?");
  const hasUppercase = confirm("Does the password require uppercase characters?");
  const hasNumeric = confirm("Does the password require numeric characters?");
  const hasSpecial = confirm("Does the password require special characters?");

  if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
    alert("Please select at least one option.")
    return validSelection();
  };
};

passwordLengthCheck ();
validSelection ();











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)