// put variables here
//letters must be in an array 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0; // the win bar- must have a number as its value 
var lose = 0; // the lose bar -must have a number as its value 
var guessesleft = 10; //they get 10 guesses per round 
var guessesSofar = [] // Append new elements to the array later using .push  with the my typed guesses variable 
var randomletter = letters[Math.floor(Math.random() * letters.length)]; //random letter generator 

//function here- call on the DOM to recognize when you enter in a letter
document.onkeydown = function (event) {

    //call on the event to do something onkeydown to assign the event to function 
    var myguess = event.key;
    guessesSofar.push(myguess);
    var randomletter = letters[Math.floor(Math.random() * letters.length)];
    if (myguess === randomletter) {
        win++;
        guessesleft = 10;
    }
    else {
        guessesleft--;
    }
    if (guessesleft === 0) {
        lose++;
        guessesleft = 10;
    }


   
//figure out how to link html writing onto javascript. document.write didn't work 
var writing = "<p> Guess what letter I'm thinking of </p>" +
    "<p> Wins: " + win + "</p>" +
    "<p>Losses: " + lose + "</p>" +
    "<p>Guesses Left: " + guessesleft + "</p>" +
    "<p>Your Guesses so far: " + guessesSofar.join(', ') + "</p>";

document.getElementById("introduction").innerHTML = writing;



}
