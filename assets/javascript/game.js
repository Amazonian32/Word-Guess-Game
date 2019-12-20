var words = ["Mario", "PacMan", "Zelda", "FinalFantasy", "Pokemon", "Sonic", "Galaga", "Tetris"]
var wins = 0;
var wordsIndex = 0; 
var guessesRemaining = 15;
    
words.sort(function(a, b){return 0.5 - Math.random()});
    console.log(words.sort());

var answer = words[Math.floor(Math.random() * words.length)];
    console.log(answer);



document.onkeyup = function(event) {
    console.log(event.key);
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(playerGuess);




























}
