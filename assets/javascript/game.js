function reStart() {
    document.getElementById("incorrect").innerHTML = "";
    incorrectGuesses = [];
    guessesRemaining = 10; 
}
var words = ["Mario", "PacMan", "Zelda", "FinalFantasy", "Pokemon", "Sonic", "Galaga", "Tetris"]
var wins = 0;
var losses = 0;


window.onload = function testGame() {




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

            document.getElementById("guesses").innerHTML = guessesRemaining;

            if (tempWord.indexOf(letter) === -1) {
                incorrectGuesses.push(letter);
                document.getElementById("incorrect").innerHTML = incorrectGuesses.join(", ");
                console.log(incorrectGuesses.join(", "));
                guessesRemaining--;
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
                    document.getElementById("losses").innerHTML = "LOSSES: " + losses++;
                    document.getElementById("incorrect").innerHTML = "GAME OVER";
                    guessesRemaining = 0;
                    testGame();
                    reStart();

                } else if (correctGuesses.indexOf("_") == -1) {


                    console.log("WINNER");
                    var match = tempWord;
                    document.getElementById("wins").innerHTML = "WINS: " + wins++;
                    console.log(wins);
                    testGame();
                    reStart();
                    if (match == "zelda") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "https://mpng.pngfly.com/20190128/tge/kisspng-the-legend-of-zelda-breath-of-the-wild-the-legend-pixilart-toon-link-by-agenttoast-7-5c4f5f94e8c435.7885067015487056849534.jpg")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    } else if (match == "finalfantasy") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "https://www.clipartkey.com/mpngs/m/257-2579793_cloud-final-fantasy-pixel-art-clipart-png-download.png")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    } else if (match == "pokemon") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "https://art.pixilart.com/498f8fe5599ddd9.png")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    } else if (match == "galaga") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "http://pixelartmaker.com/art/06c6bdf0dded27e.png")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    } else if (match == "mario") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "https://cdn.imgbin.com/21/21/11/imgbin-luigi-super-mario-bros-pixel-art-luigi-Ak0yhtdw0V0w94Re7fFmDTib7.jpg")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    } else if (match == "pacman") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "http://pixelartmaker.com/art/c8b2531363a3e36.png")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    } else if (match == "sonic") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "https://img.favpng.com/24/22/21/sonic-the-hedgehog-2-minecraft-pixel-art-png-favpng-PVD04E80MSatdQQdyGNLT0qFR.jpg")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    } else if (match == "tetris") {
                        var image = document.createElement("IMG")
                        image.setAttribute("src", "https://media.giphy.com/media/MOSebUr4rvZS0/giphy.gif")
                        image.setAttribute("width", "50px");
                        image.setAttribute("height", "50");
                        document.getElementById("statusimage").appendChild(image);

                    }
                }
            }

            wordMatch();

        }


        userGuess(playerGuess);

    }
};
