var options = ["a", "b", "c", "e", "g", "i", "k", "l", "m", "o", "t", "u", "v", "w", "x", "y", "z"];
var guesses = 10
var lettersGuessed = 0;
var win = 0;
var loss = 0;
// Not sure how to apply these classes to the html
var win = document.querySelector(".win")
    win.innerHTML = "Wins: " //variable needs to be completed
var loss = document.querySelector(".loss")
    loss.innerHTML = "Losses: " //variable needs to be completetd
var guessesLeft = document.querySelector(".guessesLeft")
    guessesLeft.innerHTML = "Guesses Left: " + guesses
var lettersGuessed = document.querySelector(".lettersGuessed")
    lettersGuessed.innerHTML = "Guesses so far: " //variable needs to be completed
document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userguess);

    var computerGuess = options[Math.floor(Math.random() * options
        .length)];

    console.log(computerGuess);



if (userguess == computerGuess){
    
    console.log("You won!")

} else {
// Need to stop the user from continuing guesses after 10 guesses have been made.
    guesses-- 
    guessesLeft.innerHTML = "Guesses Left: " + guesses
    console.log(guesses)
    console.log("You lost!")
}
}

