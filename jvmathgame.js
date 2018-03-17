// JavaScript Document

// A random shape appears and with that three defintions. When you get the defintion right you get a point if you get it wrong then you start over. Also when you get the defintion wrong you will get an email with the right defintion.
				
// This code is from class

		var score = 0;
        var currentScore = 0;
        var startQuestion = 0;
        var startAnswer = 0;
		var questionCounter = 0;
        var questions = [
        "Which defintion corresponds shape 1?",
      	"Which defintion corresponds with shape 2?",
        "Which shape corresponds with shape 3?",
		"Which shape corresponds with shape 4?",
		"Which shape corresponds with shape 5?",
		"Which shape corresponds with shape 6?",
        ];
		var quizEnd = questions.length;
        var answers = [
		// Question 1
        '<button class="button" onClick="rightAnswer()">This shape has four equal sides and four right angles.</button>'         ,
        '<button class="button" onClick="wrongAnswer()">This shape has a 360 degree angle.</button>',
        '<button class="button" onClick="wrongAnswer()">This shape has one obtuse angle.</button>',
		// Question 2
        '<button class="button" onClick="wrongAnswer()">This shape has all acute angles and has three sides.</button>',
        '<button class="button" onClick="wrongAnswer()">This shape has four unequal angles.</button>',
        '<button class="button" onClick="rightAnswer()">This shape has a 360 degree angle.</button>',
		//Question 3
	    '<button class="button" onClick="wrongAnswer()">This shape has three equal sides</button>',
        '<button class="button" onClick="rightAnswer()">This shape has one obtuse angle and three sides.</button>',
        '<button class="button" onClick="wrongAnswer()">This shape has five sides.</button>',
		//Question 4
		'<button class="button" onClick="rightAnswer()">This shape has three unequal sides.</button>',
        '<button class="button" onClick="wrongAnswer()">This shape has four sides and has 90 degree angles.</button>',
        '<button class="button" onClick="wrongAnswer()">None</button>',
		//Question 5
		'<button class="button" onClick="wrongAnswer()">All of this shapes angles add up to 360 degrees</button>',
        '<button class="button" onClick="wrongAnswer()">This shape has a right angle and has three sides</button>',
        '<button class="button" onClick="rightAnswer()">This shape has three sides and has three acute angles</button>',
		//Question 6
		'<button class="button" onClick="wrongAnswer()">None</button>',
        '<button class="button" onClick="wrongAnswer()">The angles in the shape add up to 180 degrees</button>',
        '<button class="button" onClick="rightAnswer()">This shape has three equal sides.</button>'
		
		
        ];
        var win = "You got it right!";
        var lose = "You got it wrong! ;(";
		
		


        
        function genQuestions() {
document.getElementById("q1").innerHTML = questions[startQuestion];
document.getElementById("a1").innerHTML = answers[startAnswer];
document.getElementById("a2").innerHTML = answers[startAnswer+1];
document.getElementById("a3").innerHTML = answers[startAnswer+2];
document.getElementById("a4").innerHTML = answers[startAnswer+3];
document.getElementById("a5").innerHTML = answers[startAnswer+4];
document.getElementById("a6").innerHTML = answers[startAnswer+5];

if (questionCounter === quizEnd){
alert("If you got 5 points then you won!");
}

startAnswer +=3;
startQuestion++;
questionCounter++;

}
	   
        function rightAnswer() {
        document.getElementById("f1").innerHTML = win;
        currentScore = score+=1;
        document.getElementById("score").innerHTML = ("Score: "+ currentScore);
        genQuestions();
        }
        function wrongAnswer() {
        document.getElementById("f1").innerHTML = lose;
        document.getElementById("score").innerHTML = currentScore;
        genQuestions();
        }
function endGame(){
}

        
         
                
        
                
                //actriangle
                // square 
                // obtriangle 
                // eqtriangle 
                // circle 
                // sctriangle
                