function reStart() {
    document.getElementById("incorrect").innerHTML = "";
    incorrectGuesses = [];
    guessesRemaining = 10;
}




window.onload = function testGame() {
    var words = ["Mario", "PacMan", "Zelda", "FinalFantasy", "Pokemon", "Sonic", "Galaga", "Tetris"]
    var wins = 0;



    words.sort(function (a, b) { return 0.5 - Math.random() });
    console.log(words.sort());

    var answer = words[Math.floor(Math.random() * words.length)];
    console.log(answer);
    var guessesRemaining;
    var incorrectGuesses;
    var correctGuesses;

    var tempWord

    tempWord = answer.toLowerCase();
    correctGuesses = [];
    guessesRemaining = 10;
    incorrectGuesses = [];
    console.log(tempWord);

    for (let i = 0; i < tempWord.length; i++) {
        correctGuesses.push("_");
    }

    document.getElementById("correct").innerHTML = correctGuesses.join(" ");
    console.log(correctGuesses.push());
    document.getElementById("guesses").innerHTML = guessesRemaining;
    console.log(this.guessesRemaining);


    document.onkeyup = function (event) {
        var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(playerGuess);


        function userGuess(letter) {
            guessesRemaining--;
            document.getElementById("guesses").innerHTML = guessesRemaining;

            if (tempWord.indexOf(letter) === -1) {
                incorrectGuesses.push(letter);
                document.getElementById("incorrect").innerHTML = incorrectGuesses.join(", ");
                console.log(incorrectGuesses.join(", "));
            } else {
                for (let i = 0; i < tempWord.length; i++) {
                    if (letter === tempWord[i]) {
                        correctGuesses[i] = letter;
                        console.log(correctGuesses[i])

                    }

                }
                document.getElementById("correct").innerHTML = correctGuesses.join(" ");
            }

            function wordMatch() {


                if (guessesRemaining === 0) {
                    console.log("LOSER");
                    var misMatch;
                    document.getElementById("incorrect").innerHTML = "GAME OVER";
                    guessesRemaining = 0;
                    testGame();
                    reStart();

                } else if (correctGuesses.indexOf("_") == -1) {


                    console.log("WINNER");
                    var match = tempWord;
                    wins++;
                    console.log(wins);
                    testGame();
                    reStart();
                }
            }

            wordMatch();

        }


        userGuess(playerGuess);

    }
};





