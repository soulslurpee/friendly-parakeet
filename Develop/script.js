// Assignment code here
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789"
const special = "!@#$%^&*()"

//document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword () {
  //Request pw length and validate
  
  const passwordLength = Number(prompt("What is the length of your password? (8 - 128 characters)"));
  const hasLowercase = confirm("Does the password require lowercase characters?");
  const hasUppercase = confirm("Does the password require uppercase characters?");
  const hasNumeric = confirm("Does the password require numeric characters?");
  const hasSpecial = confirm("Does the password require special characters?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid Entry: password length must be between 8 and 128 characters");
    return generatePassword();
  } else  if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
    alert("Invalid Entry: please choose at least one character requirement.")
    return generatePassword();
  };

  console.log(passwordLength, hasLowercase, hasUppercase, hasNumeric, hasSpecial);

  let chars = '';
    if (hasLowercase) {
      chars += lowercase;
    }
    if (hasUppercase) {
      chars += uppercase;
    }
    if (hasNumeric) {
      chars += numeric;
    }
    if (hasSpecial) {
      chars += special;
    }
}





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