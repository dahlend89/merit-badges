/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
var games = 0;
var again = true;
var totalTurns = 0;
while ( again == true){
	var guess = 0;
	var turns = 0;
	games++;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	while (guess != answer) { 
		guess = prompt("guess a number between 1 and 100");
		if (guess == "q") { 
			alert("quitter");
			break;
		}
		if (validate(guess) ==true){
			turns++;
			if (guess<answer) alert("too low"); 
			if (guess>answer) alert("too high");
		}
		else alert ("invalid guess try again");
	} 
	if (guess == "q") break;
	gameStats();
	again = newGame();
}

function validate(guess){
	if (guess == "q" || guess>0 && guess<101){
		return true;
}
	 else return false;
}
function gameStats(){
	alert("you guessed it in " +turns+" turns");
		totalTurns += turns;
		var averageTurns = totalTurns / games;
		alert("you won " +games+ " games with an average of " +averageTurns+" turns per game");
}
function newGame(){
		var again = confirm("play again?");
		if (again == true){
			return true;
		}
		else{
			alert("thanks for playing");
			return false;
		}
}
