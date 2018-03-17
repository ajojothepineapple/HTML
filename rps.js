// JavaScript Document
var userChoice;
 score = 0;

function rockChoice(){ //rockfunction
userChoice = "rock";
showChoice();
game();
}
function paperChoice(){ //paperfunction
userChoice = "paper";
showChoice();
game();
}
function scissorsChoice(){ //scissors
userChoice = "scissors";
showChoice();
game();
}

function showChoice(){  //showchoice
console.log("You chose " + userChoice);
}

function game() {

var computerOptions = ["rock", "paper", "scissors"];

var computerChoice = computerOptions[Math.floor(Math.random()*3)];//random choice
console.log("The computer chose " + computerChoice);
document.getElementById("computer").innerHTML = ("The Computer chose "+ computerChoice);//thecomputerchoice


if (userChoice === computerChoice) {
console.log("The result is a tie");
document.getElementById("result").innerHTML = "You tied!";//going into HTML
}

else if (userChoice === "rock") { //thechoice
if (computerChoice === "scissors") {
console.log("you win!");
document.getElementById("result").innerHTML = "You win!";
score = score + 1;
//going into HTML
}
else { 
console.log("you lose!");
document.getElementById("result").innerHTML = "You lose!";//going into HTML
}
}

else if (userChoice === "paper") {
if (computerChoice === "scissors") {
console.log("you lose!");
document.getElementById("result").innerHTML = "You lose!";//going into HTML
}
else {
console.log("you win!");
document.getElementById("result").innerHTML = "You win!";//going into HTML
score = score + 1;
document.getElementById("score").innerHTML = ("WINS: " + score);
}
}

else if (userChoice === "scissors") {
if (computerChoice === "paper") {
console.log("you win!");
document.getElementById("result").innerHTML = "You win!";
score = score + 1;
}
else {
console.log("you lose!");
document.getElementById("result").innerHTML = "You lose!"; //going into HTML
}
}
}
	
