// Assignment code here

// need to create a function called generatePassword
function generatePassword(lower, upper, number, symbol) {

  // prompt the user to select password criteria
  // store user input for password character length
  var passwordLength = prompt('How many characters? Choose length between 8 - 128 characters.');

  // make sure password length fits criteria
  if (passwordLength >= 8 && passwordLength <= 128) {
    // execute password generation?
  } 
  else {
    alert('Password must be between 8 and 128 characters.');
    return; // still not returning the prompt?
  }

  // store user input for yes/no uppercase characters
  var passwordUpper = confirm('Include uppercase letters?');

  // store user input for yes/no lowercase characters
  var passwordLower = confirm('Include lowercase letters?');

  // store user input for yes/no numbers
  var passwordNumber = confirm('Include numbers?');

  // store user input for yes/no special characters
  var passwordSymbol = confirm('Include special characters?');

  // this object contains all the password criteria functions below. need to incorporate this into generatePassword
  var random = {
    lower: getLowercase,
    upper: getUppercase,
    number: getNumber,
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

  // filter out unselected password criteria by looping through each item using Object.values
  var typesArr = [{passwordUpper}, {passwordLower}, {passwordNumber}, {passwordSymbol}].filter(
    item => Object.values(item)[0]
  );
  console.log('typesArr: ', typesArr);

  // if no criteria are selected alert the user and prompt them to select criteria again
  if(typesCount === 0) {
    alert('Must select at least one criteria.');
    //how to redo password prompts then?
  }

  // generate various characters based on which criteria were selected
  // Loop over the length and call the approrpiate generator functions
  // increment by the number of selected criteria in typesCount
  for(var i = 0; i < length; i += typesCount) {
    //loop through the array
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      // console not showing anything
      console.log('funcName: ', funcName);

      generatedPassword === random[funcName]();
      // console not showing anything
      console.log(generatedPassword);
    });
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
generateBtn.addEventListener("click", writePassword);

//The task it will perform the function 



// my own comments for understanding
// (1) the variable titled generateBtn's value is equal to a task that locates the id #generate in the html (<button>) by using the querySelector

// (2) now that we've found the <button> we want, whenever it gets clicked on, the addEventListener will execute the writePassword function in response. 

// (3)a function titled writePassword, which will execute whenever the generateBtn gets clicked, will perform a few functions.
// Before we talk about those functions, we first have to identify a couple variables' values.
// the first one is a variable titled password. password's value is equal to the function titled generatePassword.
// !!!!! // generatePassword is a function we have to write in this homework!!
// the next variable is called password.Text, and it's value is equal to the location of the html element with the id #password (the text area where we will view the randomly generated password)
// !!!!! // do we need to add an element to the DOM or is that module 4? I think that's module 4...
// the value of passwordText would be the content written in the text area, in this case the generate password. We know this is true because that value is literally equal to the variable titled password.
// !!!!! // don't forget that the variable titled password is also equal to the function named generatePassword - a chunk of code that we want to write, that will be a function and when it's performing, the code for generating a random password will occur.
