
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


var lowerArr = lowerLetters.split('');
var upperArr = upperLetters.split('');
var numberArr = numbers.split('');
var symbolArr= symbols.split('');



function generatePassword() {
  
    alert ("Hello World!Type the secure password");
    var passLength = prompt("Enter the password length");

    //--converting the password length from string to integer--
    passLength = parseInt(passLength);
    
      if(passLength <8 || passLength > 128){
        alert("Password Length must be 8-128 characters");
        
      }
    
      
      var inputLower = confirm("Do you want to use Lowercase?"); 
      var inputUpper = confirm("Do you want to use Uppercase?"); 
      var inputNumber = confirm("Do you want to use Numbers?"); 
      var inputSymbol = confirm("Do yo want to use Symbols?");

      //--Atleast one character type should be selected--
      if(inputLower || inputUpper || inputNumber || inputSymbol)
      {
        var index;
        var confirmPassword = '';
        var charTypes= [];
          
        if (inputLower) {
          //--Randomly select a lower case character-- 
          index = Math.floor(Math.random() * lowerArr.length);
          confirmPassword += lowerArr[index];
          charTypes = charTypes.concat(lowerArr);
         
        }

        if (inputUpper) {
          //--Randomly select a upper case character-- 
          index = Math.floor(Math.random() * upperArr.length);
          confirmPassword += upperArr[index];
          charTypes = charTypes.concat(upperArr);

        }

        if (inputNumber) {
          //--Randomly select a number--       
          index = Math.floor(Math.random() * numberArr.length);
          confirmPassword += numberArr[index];
          charTypes = charTypes.concat(numberArr);
    
        }

        if (inputSymbol) {
           //--Randomly select a symbol-- 
          index = Math.floor(Math.random() * symbolArr.length);
          confirmPassword += symbolArr[index];
          charTypes = charTypes.concat(symbolArr);
        
        }
        //--randomly selected a character from each types ,the below will randomly generate the password 
        //--to match rest of password length entered
        passLength = passLength - confirmPassword.length;

        for (i=0; i< passLength; i++){
        
          index = Math.floor(Math.random() * charTypes.length);
          confirmPassword += charTypes[index];
          console.log("Confirm password:" +confirmPassword);
        }

        return confirmPassword;  
      }
     
      else{  
        alert("Select atleast one option above");   
      }         

}


    

 

