/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
var games = 0;
var again = true;
var totalTurns = 0;

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while ( guess != "q" && guess != answer){
	games++;
	guess = prompt("guess a number between 1 and 100");
  	if (guess == "q") break;
  	if (validate(guess) ==true){
		turns++;
		if (guess<answer) alert("too low"); 
		else if (guess>answer) alert("too high");
	}
    else alert ("invalid guess try again");
}

 if (guess = "q") alert("quitter!");
  else alert("you got it in" +turns+ "turns");

function validate(guess){
	if (guess = "q" || guess>0 && guess<101){
		return true;
}
	 else return false;
}
function gameStats(){
	alert("you guessed it in" +turns+" turns");
		totalTurns += turns;
		var averageTurns = totalTurns / games;
		alert("you won" +games+ "games with an average of" +averageTurns+" turns per game");
}
function newGame(){
		var again = confirm("play again? y = yes");
		if (again = "y"){
			return true;
		}
		else{
			alert("thanks for playing");
			return false;
		}
}