// Assignment Code
console.log('rest')
var generateBtn = document.querySelector("#generate");
var length;
var charOptions = [];
var pass;

// Write    choices to the     choices input
function writePassword() {
        var choices = generatePassword();
        var passwordText = document.querySelector("password");

        passwordText.value = choices;

}

// connects buttons to prompts and displays first promp
generateBtn.addEventListener("click", getLength);
function getLength() {
    length = parseInt(prompt("how many characters do you want"));
    if (length > 7 && length < 129) {
        generatePassword()
    } else {
        length = alert("You must choose between 8 and 128");
        getLength()
    }

}

// // questions about password

function generatePassword() {
   
    // list of possible values for password as var in array and strings
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var characters = "!@#$%^&*()_-+=[{]};:'<,>./?";
    var numbers = "0123456789";
    // asks user if they want lower case letters, if so adds it to possible answers and if not does not add.
    console.log('test')
    if (confirm("Would you like lower case letters?")) {
        charOptions.push(lowerCase)
    }

    if (charOptions.length !== 0) {
        makePass()
    }
   
    //asks user if they want upper case letters if so adds, if not does not add to possible password 
    console.log('test1')
    if (confirm ("would you like upper case letters?")){
        charOptions.push(upperCase)
        
    }
    if(charOptions.length !== 0){
        makePass()
    }
    
    //  asks user if they want numbers.
    if(confirm("Would you like to add some numbers?")){
        charOptions.push(numbers)
    }
    if (charOptions.length !==0){
        makePass()
    }
    //  asks user if they want any special characters.
    if(confirm("Would you like to add any special characters? ")){
        charOptions.push(characters)
        
    }
    if (charOptions.length !==0){
        makePass()
    }
    
// removes any commas and places a blank space. also adds another prompt with random password 
    var result = ""; 
    for (var i = 0; i < pass.length; i++){
        result = result.concat(pass[i]);
    }

    if(confirm("Your random password is:     " + result) );
}
// this is a for loop that runs through the user answered questions and filters what the user wishes to be in their password.
function makePass(){
     pass =[]
    for (var i = 0; i < length ; i++) {
        var randomCharArr = charOptions[Math.floor(Math.random()*charOptions.length)]
        var randChar = randomCharArr[Math.floor(Math.random()* randomCharArr.length)]
        pass.push(randChar)
      }
    console.log(pass)
     
}
               




