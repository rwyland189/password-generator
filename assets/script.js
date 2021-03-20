// Assignment code here

// init to remote repo!
generatePassword(); (line 13)

arrays ["a", "b", "c" ... ]
at least 8 characters but no more than 28?


// (1) the variable titled generateBtn's value is equal to a task that locates the id #generate in the html (<button>) by using the querySelector
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// (3)a function titled writePassword, which will execute whenever the generateBtn gets clicked, will perform a few functions.
// Before we talk about those functions, we first have to identify a couple variables' values.
// the first one is a variable titled password. password's value is equal to the function titled generatePassword.
// !!!!! // generatePassword is a function we have to write in this homework!!
// the next variable is called password.Text, and it's value is equal to the location of the html element with the id #password (the text area where we will view the randomly generated password)
// !!!!! // do we need to add an element to the DOM or is that module 4? I think that's module 4...
// the value of passwordText would be the content written in the text area, in this case the generate password. We know this is true because that value is literally equal to the variable titled password.
// !!!!! // don't forget that the variable titled password is also equal to the function named generatePassword - a chunk of code that we want to write, that will be a function and when it's performing, the code for generating a random password will occur.
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// (2) now that we've found the <button> we want, whenever it gets clicked on, the addEventListener will execute the writePassword function in response. 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//The task it will perform the function 