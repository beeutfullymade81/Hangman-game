
var availWords = ["Escapade", "Rhythm Nation", "Nasty", "If", "Control", "Black Cat", "All For You", "Miss You Much", "Lets Wait A While", "Alright", "The Pleasure Principle"];
var availChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numOfGuesses = 15

var userChoices = [];
var underScores = [];
var wins = 0;
var losses  = 0;
var availGuesses = availWords[Math.floor(Math.random() * availWords.length)];
var g;


//setting the underscores here 

function startOfGame (
    
    for(var i=0; i < availGuesses; i++) {
        underScores[i] = "_";
        }
    g= underScores.join(" ");
    document.getElementById('letterSpaces').innerHTML = g
);

function matchLetter (

If (availchoices > 0) {

for (i=0; i < availchoices.length; i++) 
	{
	if (availWords[i] == availChoices)
		{
		underScores[i] = availChoices;
		}
		}
		numOfGuesses--;
		document.getElementById("letterSpaces").innerHTML = underScores[i].join(" ")
		

