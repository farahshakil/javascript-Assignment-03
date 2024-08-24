//=================>Chpter 26-30<===============
//Qno 01
// var number = parseInt(prompt("Enter a positive integer:"), 10);
// if (number > 0) {
//     alert("You entered: " + number);
// } else {
//     alert("Please enter a valid positive integer.");
// }

// var userInput = prompt("Enter a positive number:");
// var number = parseFloat(userInput);


// if (isNaN(number) || number <= 0) {
//     alert("Please enter a valid positive number.");
// } else {
    
//     document.body.innerHTML = `
//         <p>Number: ${number}</p>
//         <p>Round Off Value: ${Math.round(number)}</p>
//         <p>Floor Value: ${Math.floor(number)}</p>
//         <p>Ceil Value: ${Math.ceil(number)}</p>`;
// }

//Qno 02

// var userInput = prompt("Enter a negative floating-point number:");
// var number = parseFloat(userInput);


// if (isNaN(number) || number >= 0) {
//     alert("Please enter a valid negative floating-point number.");
// } else {
   
//     document.body.innerHTML = `
//         <p>Number: ${number}</p>
//         <p>Round Off Value: ${Math.round(number)}</p>
//         <p>Floor Value: ${Math.floor(number)}</p>
//         <p>Ceil Value: ${Math.ceil(number)}</p>`;
// }

//Qno 03

// var userInput = prompt("Enter a number:");
// var number = parseFloat(userInput);
// var absoluteValue = Math.abs(number);


// document.body.innerHTML = `<p>Absolute Value of ${number} is ${absoluteValue}</p>`;

//Qno 04

// var diceValue = Math.floor(Math.random() * 6) + 1;

// document.body.innerHTML = `<p>Dice rolled: ${diceValue}</p>`;

//Qno 05

// function tossCoin() {
//     var randomNumber = Math.random(); // Generate a random number between 0 and 1
//     if (randomNumber < 0.5) {
//         return 'Heads';
//     } else {
//         return 'Tails';
//     }
// }

// var result = tossCoin();

// document.body.innerHTML = `<p>Coin toss result: ${result}</p>`;

//Qno 06

// var randomNumber = Math.floor(Math.random() * 100) + 1;


// document.body.innerHTML = `<p>Random number between 1 and 100: ${randomNumber}</p>`;

// //Qno 07

// var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(userInput);

// document.body.innerHTML = `<p>Weight: ${weight} kg</p>`;

// //Qno 08

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = prompt("Guess a number between 1 and 10:");
// var userGuess = parseInt(userInput, 10);


// if (userGuess === secretNumber) {
//     alert("Congratulations! You guessed the correct number.");
// } else {
//     alert(`Sorry, the correct number was ${secretNumber}.`);
// }









