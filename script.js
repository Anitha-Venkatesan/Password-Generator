
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
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="1234567890";
var symbols ="!@#$%^&*()?/\\~{}'`\"";


function generatePassword() {
  alert ("Hello World!Type the secure password");
  var passLength = prompt("Enter the password length");
    if(passLength <=8 || passLength >= 128)
    {
      alert("Password Length must be 8-128 characters");
      
    }
    passLength = prompt("Enter the password length");
    var inputLower = confirm("Do you want to use Lowercase?"); 
    var inputUpper = confirm("Do you want to use Uppercase?"); 
    var inputNumber = confirm("Do you want to use Numbers?"); 
    var inputSymbol = confirm("Do yo want to use Symbols?");

    var newString = ''
    if(inputLower || inputUpper || inputNumber || inputSymbol)
    {
        if (inputLower) {
          newString += lowerLetters;
        }

        if (inputUpper) {
          newString += upperLetters;
        }

        if (inputNumber) {
          newString += numbers;
        }

        if (inputSymbol) {
          newString += symbols;
        }

        var confirmPassword ='';
        var newPassword;
        for (i=0; i<passLength; i++)
        {
          newPassword = Math.floor(Math.random() * newString.length);
          confirmPassword += newString.charAt(newPassword);
        }

        alert("Generated Password :" + confirmPassword);
        return confirmPassword;
      
    }
    else{  
        alert("Select atleast one option above");   
      }         
    
    
}


    

 

