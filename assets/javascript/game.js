document.addEventListener("keydown", function(event) {
    var userGuess = event.key;

    if (userGuess === randomLetter){
        console.log ("correctGuess");
    } 