//document.getElementById("count-el").innerText = 5;

// let firstBatch = 12;
// let secondBatch = 19;


// let count = firstBatch + secondBatch;

// console.log(count);

// let myAge = 35;
// let humanDogRatio = 7;


// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);


// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

//initialize count as 0
//listen for clicks on increment button
//increment the count variable when button is clicked
//change the count-el in HTML to reflect new count

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times

// function sumOfLaps() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime);

// }
// sumOfLaps();



// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times
// function total() {
//     lapsCompleted = lapsCompleted + 1;

// }
// total();
// total();
// total();


// console.log(lapsCompleted)
// let countEl = document.getElementById("count-el")
// let count = 0;

// function increment() {

//     count = count + 1;
//     countEl.innerText = count;

// }


// function save() {
//     console.log(count);

// }
// save();


// let userName = "Lushan";

// let message = "You have three new notifications";

// let messageToUser = (message + ", " + userName + "!");
// console.log(messageToUser);


// let name = "dave";
// let greeting = "Hi, my name is ";

// let myGreeting = (greeting + " " + name);

// console.log(myGreeting);


// let welcomeEl = document.getElementById("welcome-el");

// let name = "Dave";
// let greeting = " Hi, my name is ";

// welcomeEl.innerText = greeting + name;


// welcomeEl.innerText += "👋";

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    countEl.textContent = 0;
    count = 0;

}






























































































