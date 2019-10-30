/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

// Declare var answer as random integer between 1 and 100.
var answer = Math.floor(Math.random()*100)+1;
// alert the answer while testing.
alert(answer);

var guess = 0;
var turns = 0;
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  	// Prompt user for guess.
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