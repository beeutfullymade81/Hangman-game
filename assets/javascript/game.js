var availWords = ["Escapade", "Rhythm Nation", "Nasty", "If", "Control", "Black Cat", "All For You", "Miss You Much", "Lets Wait A While", "Alright", "The Pleasure Principle"];
var availChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numOfGuesses = 15

var userChoices = [];
var underScores = [];
var wins = 0;
var losses  = 0;

function randomNess (
    var availGuesses = availWords[Math.floor(Math.random() * availWords.length)];
    console.log(availGuesses);
    for(var i=0; i < availGuesses; i++) {
        underScores.push("_");
    }
    document.getElementById('letterSpaces').innerHTML = underScores;

);