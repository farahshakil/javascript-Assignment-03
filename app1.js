//=================>Chpter 21-25<===============
//Qno 01

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hi, " + fullName + "!");

//Qno 02

// var phoneModel = (prompt("Enter your favorite mobile phone model:"));

// var inputLength = phoneModel.length;

// alert("The length of your input is: " + inputLength);

//Qno 03

// var word = "Pakistani";
// var index = word.indexOf('n');

// console.log("The index of 'n' in 'Pakistani' is:", index);

//Qno 04

// var phrase = "Hello World";
// var lastIndex = phrase.lastIndexOf('l');

// console.log("The last index of 'l' in 'Hello World' is:", lastIndex);

//Qno 05

// var word = "Pakistani";
// var character = word.charAt(3);

// console.log("The character at the 3rd index in 'Pakistani' is:", character);

//Qno 06

// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// console.log("Hello, " + fullName + "!");

//Qno 07
// var city = "Hyderabad";    
// var newCity = city.replace("Hyder", "Islam");

// document.write("The new city name is: " + newCity);

//Qno 08

// var str = "472";
// var num = Number(str);

// console.log("String value: " + str + " (Type: " + typeof str + ")");
// console.log("Number value: " + num + " (Type: " + typeof num + ")");

//Qno 09

// var userInput = prompt("Please enter a string:");
// var upperCaseInput = userInput.toUpperCase();

// console.log("Input in capital letters: " + upperCaseInput);

//Qno 10

// var userInput = prompt("Please enter a string:");
// var capitalizedInput = userInput.toUpperCase();

// alert("Input in capital letters: " + capitalizedInput);


//Qno 11

// var userInput = prompt("Please enter a string:");
// var titleCaseInput = userInput.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

// console.log("Input in title case: " + titleCaseInput);

//Qno 12

// var num = 35.36;
// var numStr = num.toString();

// var numWithoutDot = numStr.replace(".", "");


// document.write("Number without dot: " + numWithoutDot);

//Qno 13

// function isValidUsername(username) {
   
//     var specialChars = [33, 44, 46, 64];

//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);
//         if (specialChars.includes(charCode)) {
//             return false;
//         }
//     }
//     return true; 
// }

// function getUsername() {
//     var username = prompt("Enter your username:");

    // while (!isValidUsername(username)) {
    //     alert("Invalid username! Please avoid using any of these characters: @, ., ,, !");
    //     username = prompt("Enter a valid username:");
    // }

//     return username;
// }

// var username = getUsername();
// console.log("Your username is:", username);


// //Qno 14
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem() {
//     let search = prompt("Enter an item to search for:").toLowerCase();
//     let index = A.findIndex(item => item.toLowerCase() === search);

//     if (index !== -1) {
//         alert(`The item '${search}' is available at index ${index} in our bakery.`);
//     } else {
//         alert(`The item '${search}' is not found in our bakery.`);
//     }
// }

// searchItem();
// //Qno 15

// function validPassword(){
//     var password =prompt("Enter your password");
//     if(password.length <6){
//         alert("Password must be atleast 6 character long.");
//         return false;
//     }
//     if(!isNaN(password[0])){
//         alert("password will not start with a number");
//         return false;
//     }
//     var hasNumber=false;
//     var hasNumber=false;
//     for(var i=0; i<password.length ; i++){
//         var charcode = password.charCodeAt(i);
//         if(charcode >= 48 && charcode <=57){
//             hasNumber= true;
//         }
//         else if((charcode >= 65 && charcode <= 90) || (charcode >=97 && charcode <= 122)){
//             hasAlphabet=true;
//         }
//     }
// }
// validPassword();

// //Qno 16

// var university = "University of Karachi";
// var array = university.split(" ");


// array.forEach(function(element) {
//     console.log(element);
// });


// //Qno 17
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);

// alert("The last character of your input is: " + lastCharacter);

// //Qno 18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = (sentence.toLowerCase().split(" ").filter(word => word === "the")).length;

// console.log("The word 'the' occurs " + count + " times.");


















