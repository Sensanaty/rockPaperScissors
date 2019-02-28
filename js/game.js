/**
 * Select randomly one item from array "choices" and return that value
 */

function computerTurn() {
    // Select randomly from an array that contains the three choices
    var choices = Array("ROCK", "PAPER", "SCISSORS")
    var randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice;
}


/**
 * Prompt a user to input Rock, Paper or Scissors. Check against regex to see if it matches, if not, loops until correct choice is made.
 */
function humanTurn() {
    userInput = prompt("Do you pick: Rock, Paper, or Scissors?")
    if (userInput.toString().match(/\brock/i)) {
        document.getElementById("progressGood").innerHTML = "You selected Rock.";
        document.getElementById("progressBad").innerHTML = "";
        console.log(userInput + " from humanTurn execution")
        return userInput;
    } else if (userInput.toString().match(/\bpaper/i)) {
        document.getElementById("progressGood").innerHTML = "You selected Paper.";
        document.getElementById("progressBad").innerHTML = "";
        console.log(userInput + " from humanTurn execution")
        return userInput;
    } else if (userInput.toString().match(/\bscissors/i)) {
        document.getElementById("progressGood").innerHTML = "You selected Scissors.";
        document.getElementById("progressBad").innerHTML = "";
        console.log(userInput + " from humanTurn execution")
        return userInput;
    } else {
        alert("You didn't enter a valid choice, please try again")
        document.getElementById("progressBad").innerHTML = "Are you sure you wrote Rock, Paper or Scissors? Try again.";
        document.getElementById("progressGood").innerHTML = "";
        console.log(userInput + " from humanTurn execution")
        humanTurn();
    }
}

function gameRound() {
    var AIChoice = computerTurn().toLocaleUpperCase;
    console.log(AIChoice);
    var HUChoice = humanTurn().toLocaleUpperCase;
    console.log(HUChoice);
    if (HUChoice == AIChoice) {
        document.getElementById("progressGood").innerHTML = "It's a tie! Nobody wins this round.";
        return "TIE";
    } else if (HUChoice == "ROCK") {
        if (AIChoice == "SCISSORS") {
            document.getElementById("progressGood").innerHTML = "You win! Rock beats Scissors.";
            return "WIN";
        } else {
            document.getElementById("progressGood").innerHTML = "You lose! Paper beats Rock.";
            return "LOSE";
        }
    } else if (HUChoice == "PAPER") {
        if (AIChoice == "ROCK") {
            document.getElementById("progressGood").innerHTML = "You win! Paper beats Rock.";
            return "WIN";
        } else {
            document.getElementById("progressGood").innerHTML = "You lose! Scissors beats Rock.";
            return "LOSE";
        }
    } else {
        if (AIChoice == "PAPER") {
            document.getElementById("progressGood").innerHTML = "You win! Scissors beats Paper.";
            return "WIN";
        } else {
            document.getElementById("progressGood").innerHTML = "You lose! Rock beats Scissors.";
            return "LOSE";
        }
    }
}