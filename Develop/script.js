// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM".split("");
var lowerCase = "qwertyuioplkjhgfdsazxcvbnm".split("");
var numeric = "1234567890".split("");
var specialChar = "!#$%&'()*+,-./:=>?@[\]^_`{|}~".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function to generate password
function generatePassword() {
  var password = "";

  // password variable to push and create string
  var passwordArray = [];

  // prompt for user to select length of password.
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  var minLength = passwordLength < 8;
  var maxLength = passwordLength > 128;
  // var noString = passwordLength !== String;

  // If User presses cancel, returns to main page.
  if (!passwordLength) {
    return;
  }

  // if user selects <8 or >128, returns to main page.
  if (minLength || maxLength) {
    window.alert("Password must be 8-128 characters long");
    return "Please try again.";
  }
  else if (!minLength && !maxLength) {

// prompts to choose uppercase, lowercase, numbers, and special characters
    var upperCaseChoice = window.confirm("Include uppercase?")
    if (upperCaseChoice) {
      passwordArray = passwordArray.concat(upperCase);
      console.log(upperCase);
    };

    var lowerCaseChoice = window.confirm("Include lowercase?")
    if (lowerCaseChoice) {
      passwordArray = passwordArray.concat(lowerCase);
      console.log(lowerCase);
    };

    var numericChoice = window.confirm("Include numbers?")
    if (numericChoice) {
      passwordArray = passwordArray.concat(numeric);
      console.log(numeric);
    };
    var specialCharChoice = window.confirm("Include special characters?")
    if (specialCharChoice) {
      passwordArray = passwordArray.concat(specialChar);
      console.log(specialChar);
    }

    // if user does not select at least one character type, returns to main page. 
    if (!upperCaseChoice && !lowerCaseChoice && !numericChoice && !specialCharChoice) {
      window.alert("Password must include at least one criteria");
      return "Please try again. Thank you.";
    }

    //  for loop to randomize chosen criteria
    for (var i = 0; i < passwordLength; i++) {
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)];

    }
    return password;
  }
}