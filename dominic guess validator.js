/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */ Dominic Dahlen


var answer = Math.floor(Math.random()*100)+1;
Console.log(answer);

var guess = 0;
var turns = 0;
while (guess != answer){
	guess = prompt("guess a number between 1 and 100");
  	if (guess == "q") break;
  	if (validator(guess) ==true){
		turns++;
		if (guess<answer) alert("too low"); 
		if (guess>answer) alert("too high");
	}
    else alert ("invalid guess try again");
}
if (guess == answer) alert("you got it in "+turns+" turns");
else alert("quitter!");
function validator(guess){
	if (guess>0 && guess<101) return true;
	else return false;
}