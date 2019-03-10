
// Creates an array that lists out all of the options (from a to z).

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables that hold guesses left and guesses so far
var gleft = 9;
var gfar = [];
var cGuess = [];

// Mostrarle al usuario cuantas rondas tiene ganadas y cuantas tiene perdidas
var wins = 0;
var losses = 0;

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var Guessessofar = document.getElementById("Userchoice-text");
var Guessesleft = document.getElementById("Guesses-left");
var userGuess = "";
var computerGuess = "";


//var computerChoiceText = document.getElementById("computerchoice-text");

function aleatorio () {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    cGuess.push(computerGuess);
  //  console.log("cGuess " + cGuess);
  }

window.onload = aleatorio
// allow the user to make his guesses 9 times
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

// Determines which key was pressed and adds it to the gfar.
  var userGuess = event.key;
  gfar.push(userGuess);
  gleft--;
  //console.log("cGuess 2 " + cGuess);
  Guessesleft.textContent = ("You have " + gleft + " more guesses");
  Guessessofar.textContent = ("Your guesses so far are: " + gfar);
  if (userGuess === cGuess[0]) {
    wins++;
    winsText.textContent = ("Wins "+ wins);

    alert("you won, \"" +  userGuess + "\" was the correct letter");
    cGuess = [];
    // console.log("cguess final " + cGuess);
    
    // console.log("aleatorio nuevo" + cGuess);

    // no sé como invocar la mugre función de aleatorio, traté de todas las maneras y no pude, por eso estoy repitiendo todo en lo que sigue.
    // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // cGuess.push(computerGuess);
    aleatorio()
   // console.log("cGuess " + cGuess);
    gleft = 9;
    Guessesleft.textContent = ("You have " + gleft + " more guesses");
    gfar = [];
    Guessessofar.textContent = ("Your guesses so far are: " + gfar);
  }
  if (gleft === 0 && cGuess[0] !== userGuess) {
    alert("you lost, the letter was \"" + cGuess + "\"");
    cGuess = [];
    losses++;
    lossesText.textContent = ("Losses "+ losses);
        // no sé como invocar la mugre función de aleatorio, traté de todas las maneras, por eso estoy repitiendo todo en lo que sigue.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    cGuess.push(computerGuess);
   // console.log("cGuess " + cGuess);
    gleft = 9;
    Guessesleft.textContent = ("You have " + gleft + " more guesses");
    gfar = [];
    Guessessofar.textContent = ("Your guesses so far are: " + gfar);

  }
}



//if (cGuess.length = 9 && )










// allow the user to make his guesses 9 times
//for (var i = 9; i > 0, i--) {
    

//}

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  //  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    //    if ((userGuess === "r" && computerGuess === "s") ||
      //      (userGuess === "s" && computerGuess === "p") ||
        //    (userGuess === "p" && computerGuess === "r")) {
          //  wins++;
    //    } else if (userGuess === computerGuess) {
      //      ties++;
        //} else {
          //  losses++;
       // }

        // Hide the directions
        //directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
     //   userChoiceText.textContent = "You chose: " + userGuess;
     //   computerChoiceText.textContent = "The computer chose: " + computerGuess;
     //   winsText.textContent = "wins: " + wins;
     //   lossesText.textContent = "losses: " + losses;
     //   tiesText.textContent = "ties: " + ties;
   // }
//};
