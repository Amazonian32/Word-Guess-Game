var words = ["Mario", "PacMan", "Zelda", "FinalFantasy", "Pokemon", "Sonic", "Galaga", "Tetris"]
var wins = 0;
// var wordsIndex = 0;


words.sort(function (a, b) { return 0.5 - Math.random() });
console.log(words.sort());

var answer = words[Math.floor(Math.random() * words.length)];
console.log(answer);
var guessesRemaining;
var incorrectGuesses;
var correctGuesses;

var tempWord

window.onload = function testGame() {
    tempWord = "arcade";
    correctGuesses = [];
    guessesRemaining = 10;
    this.incorrectGuesses = [];
    console.log(tempWord);

    for (let i = 0; i < tempWord.length; i++) {
        correctGuesses.push("_");

    }

    document.getElementById("correct").innerHTML = correctGuesses.join(" ");
    console.log(correctGuesses.push());
    document.getElementById("guesses").innerHTML = guessesRemaining;
    console.log(this.guessesRemaining);





    
};









document.onkeyup = function (event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(playerGuess);
};