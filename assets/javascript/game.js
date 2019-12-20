var words = ["Mario", "Pac-Man", "Zelda", "FinalFantasy", "Pokemon", "Sonic", "Galaga", "Tetris"]
var wins = 0;
var wordsIndex = 0; 
    
words.sort(function(a, b){return 0.5 - Math.random()});
    console.log(words.sort());


document.onkeyup = function(event) {
    console.log(event.key);
    var playerGuess = event.key.toLowerCase();

}
