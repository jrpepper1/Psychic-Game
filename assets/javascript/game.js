var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var guessesLeft = (9);
// create a key up event listener //
// check if letter pressed is n= computers choice //
// if correct tell them they won and restart game //
var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log (computerChoice);
