// Assignment code here

// need to create a function called generatePassword
function generatePassword(lower, upper, number, symbol) {

  // prompt the user to select password criteria
  // store user input for password character length
  var passwordLength = prompt('How many characters? Choose length between 8 - 128 characters.');

  // make sure password length fits criteria
  if (passwordLength >= 8 && passwordLength <= 128) {
  } 
  else {
    alert('Password must be between 8 and 128 characters.');
    return; // not returning the prompt?
  }

  // store user input for yes/no uppercase characters
  var passwordUpper = confirm('Include uppercase letters?');

  // store user input for yes/no lowercase characters
  var passwordLower = confirm('Include lowercase letters?');

  // store user input for yes/no numbers
  var passwordNumber = confirm('Include numbers?');

  // store user input for yes/no special characters
  var passwordSymbol = confirm('Include special characters?');

  // this object contains all the password criteria functions below
  var random = {
    passwordLower: getLowercase,
    passwordUpper: getUppercase,
    passwordNumber: getNumber,
    passwordSymbol: getSymbol
  }

  // password criteria functions
  // get a random lowercase letter using browser character set (lowercase is 97 - 122)
  function getLowercase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  // get a random uppercase letter (uppercase is 65 - 90)
  function getUppercase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  // get a random number (numbers are 48 - 57)
  function getNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  // get a special character using a string (special characters are broken up in different sections of browser character set)
  function getSymbol () {
    var symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  // initialized password variable
  var generatedPassword = '';

  // using var typesCount but try using if else?
  var typesCount = passwordLower + passwordUpper + passwordNumber + passwordSymbol;
  console.log('typesCount: ', typesCount);

  // if no criteria are selected alert the user and prompt them to select criteria again
  if(typesCount === 0) {
    alert('Must select at least one criteria.');
    return;
  }

  // filter out unselected password criteria by looping through each item using Object.values
  var typesArr = [{passwordUpper}, {passwordLower}, {passwordNumber}, {passwordSymbol}].filter(item => Object.values(item)[0]);
  console.log('typesArr: ', typesArr);

  // generate various characters based on which criteria were selected
  // Loop over the length and call the approrpiate generator functions
  // increment by the number of selected criteria in typesCount
  for(var i = 0; i < parseInt(passwordLength); i++) {

    var randomIndex = Math.floor(Math.random() * typesArr.length); // example num from 0 - 3

    var funcName = Object.keys(typesArr[randomIndex])[0]; // example "passwordSymbol"

    generatedPassword += random[funcName](); // like saying "random.passwordSymbol()" // "#"
  }
  return generatedPassword; // example "092384kndaso#r"
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();// example "092384kndaso#r"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//The task it will perform the function 
