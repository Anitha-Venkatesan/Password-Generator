
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
    passLength = parseInt(passLength);
    
    
    var inputLower = confirm("Do you want to use Lowercase?"); 
    var inputUpper = confirm("Do you want to use Uppercase?"); 
    var inputNumber = confirm("Do you want to use Numbers?"); 
    var inputSymbol = confirm("Do yo want to use Symbols?");

  
    if(inputLower || inputUpper || inputNumber || inputSymbol)
    {
      
      
      var index;
      var confirmPassword = '';
      var newString= [];
          
        if (inputLower) {


          index = Math.floor(Math.random() * lowerArr.length);
          confirmPassword += lowerArr[index];
          console.log("inputLower password:" +confirmPassword);
          newString = newString.concat(lowerArr);
          //passLength--;
         
        }

        if (inputUpper) {
          
         
          index = Math.floor(Math.random() * upperArr.length);
          confirmPassword += upperArr[index];
          console.log("inputUpper password:" +confirmPassword);
          newString = newString.concat(upperArr);
          //passLength--;

        }

        if (inputNumber) {

          
          index = Math.floor(Math.random() * numberArr.length);
          confirmPassword += numberArr[index];
          console.log("inputNumber password:" +confirmPassword);
          newString = newString.concat(numberArr);
          //passLength--;
          
        }

        if (inputSymbol) {
          
         
          index = Math.floor(Math.random() * symbolArr.length);
          confirmPassword += symbolArr[index];
          console.log("inputSymbol password:" +confirmPassword);
          newString = newString.concat(symbolArr);
          //passLength--;

        
        }
        
        passLength = passLength - confirmPassword.length;

        for (i=0; i< passLength; i++){
          index = Math.floor(Math.random() * newString.length);
          console.log(newString);
          confirmPassword += newString[index];
          console.log("Confirm password:" +confirmPassword);
        }

        return confirmPassword;
      
    }
    else{  
        alert("Select atleast one option above");   
      }         
    
    
}


    

 

