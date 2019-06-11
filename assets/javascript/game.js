var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var lettersChosen = [];

// create a key up event listener //
// check if letter pressed is n= computers choice //
// if correct tell them they won and restart game //

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

document.onkeyup = function (event) {
    var userChoice = event.key;
    //every time we press a new key, we add it to lettersChosen
    if (lettersChosen.includes(userChoice)) {
        //I don't think we want anything to happen here
        //If anything we can display a message (alert) "You've already guessed that"
    } else {
        lettersChosen.push(userChoice);
        if (userChoice == computerChoice) {
            //reset guessesLeft to 9
            guessesLeft = 9;
            //reset lettersChosen to empty
            lettersChosen = [];
            //add to our win count
            wins++;
            //re-initialize computerChoice so that it's not the same letter every single time
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Correct! Total Wins: " + wins);

        } else {
            //subtract one from guessesLeft;
            guessesLeft--;
            console.log("Wrong! Guesses Left: " + guessesLeft);
            //AFTER we subtract a guess, we need to check to see IF we've hit 0. 
            if (guessesLeft == 0) {
                losses++;
                console.log("You are out of guesses. You lose. Total Losses: " + losses);
            }
        }
    }
}
