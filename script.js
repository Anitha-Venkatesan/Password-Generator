
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
     
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerLetters ="abcdefghijklmnopqrstuvwxyz";
var lowerArr = lowerLetters.split('');

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArr = upperLetters.split('');

var numbers ="1234567890";
var numberArr = numbers.split('');


var symbols ="!@#$%^&*()?/\\~{}'`\"";
var symbolArr= symbols.split('');



function generatePassword() {
  alert ("Hello World!Type the secure password");
  var passLength = prompt("Enter the password length");
    if(passLength <8 || passLength > 128)
    {
      alert("Password Length must be 8-128 characters");
    }
    
    
    var inputLower = confirm("Do you want to use Lowercase?"); 
    var inputUpper = confirm("Do you want to use Uppercase?"); 
    var inputNumber = confirm("Do you want to use Numbers?"); 
    var inputSymbol = confirm("Do yo want to use Symbols?");

    var newString= [];
    
    if(inputLower || inputUpper || inputNumber || inputSymbol)
    {
        if (inputLower) {
          newString = newString.concat(lowerArr);

        }

        if (inputUpper) {
          newString = newString.concat(upperArr);

        }

        if (inputNumber) {
          newString = newString.concat(numberArr);
        }

        if (inputSymbol) {
          newString = newString.concat(symbolArr);
        }
        console.log(newString);

        var confirmPassword ='';
        var newPassword;
        for (i=0; i<passLength; i++){
          newPassword = Math.floor(Math.random() * newString.length);
          confirmPassword += newString[newPassword];
        }

        alert("Generated Password :" + confirmPassword);
        return confirmPassword;
      
    }
    else{  
        alert("Select atleast one option above");   
      }         
    
    
}


    

 

