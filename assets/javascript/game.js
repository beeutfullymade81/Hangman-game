



var availWords = ["escapade", "rhythm nation", "nasty", "if", "control", "black cat", "all for you", "miss you much", "lets wait a while", "alright", "the pleasure principle"];
var numOfGuesses = 15;
var userChoices = [];
var underScores = [];
var wins = 0;
var losses = 0;
var badGuess = [];
var goodGuess = 0;
var availGuesses = availWords[Math.floor(Math.random() * availWords.length)];

function newGame() {
	console.log(availGuesses);
	
	for (var i = 0; i < availGuesses.length; i++) {

		underScores.push("_");
	};
	console.log(underScores);
	
	document.getElementById('letterSpaces').textContent = underScores.join(" ");

}

function reset() {
	var numOfGuesses = 15;
	var userChoices = [];
	var underScores = [];
	var wins = 0;
	var losses = 0;
	var badGuess = [];
	var goodGuess = 0;
	var availGuesses = availWords[Math.floor(Math.random() * availWords.length)];
}

newGame();
reset();



//grabbing the user's guesses


document.onkeyup = function (event) {
	userChoices = event.key.toLowerCase();
	if (badGuess.indexOf(userChoices) > -1) {
		alert("You have already guessed that letter");
	}

	if (availGuesses.indexOf(userChoices) > -1) {
		for (var i = 0; i < availGuesses.length; i++) {
			if (availGuesses[i] === userChoices) {
				underScores[i] = userChoices;
				document.getElementById('letterSpaces').innerHTML = underScores.join(" ");
				
				goodGuess++;
				if (goodGuess === underScores) {
					alert("You win");
					wins++;
					document.getElementById('Wins').innerHTML = wins;
				}

			}
		}
	}
	else {
		badGuess.push(userChoices);
		numOfGuesses--;
		document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
		if (numOfGuesses === 0) {
			alert("You lose... Try again");
			
		}
	}
}






