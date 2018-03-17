// JavaScript Document
var dragon = "<img src='../_images/dragon.gif'>"; //images(dragon)
var treasure = '<img src="../_images/treasurechest1.png">'; //images(treasure)
var score = 0;
var highscore = 0;
var deathMessage = ["try again ;(", "wOw thats sad ;(", "u dead boi"];
//different messages 
function game(){
	var chance = Math.random();
	console.log("thisworks");
	var chanceInt = Math.floor(Math.random()*deathMessage.length);
	
	if (chance >= 0.20) {
		document.getElementById('gamePic').innerHTML = treasure;
		score = score +100;
		document.getElementById('score').innerHTML = ("Gold: " + score);
		if(score > highscore) {
			highscore = score;
			document.getElementById('hiScore').innerHTML =("Highscore: " + highscore);
	
		}
	}
	
	else {
		document.getElementById('gamePic').innerHTML = dragon;
		 score = 0;
		document.getElementById('score').innerHTML = deathMessage[chanceInt];		
		
	}
}