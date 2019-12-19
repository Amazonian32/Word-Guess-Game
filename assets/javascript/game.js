var words = ["Mario", "Pac-Man", "Zelda", "FinalFantasy", "Pokemon", "Sonic", "Galaga", "Tetris"]
var wins = 0;
var wordIndex = 0;

document.onkeyup = function(event) {
    console.log(event.key);
    var playerGuess = event.key.toLowerCase();
    document.querySelector(".incorrect").innerText = playerGuess++;
    
}
