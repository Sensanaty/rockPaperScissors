/*jshint esversion: 6 */
var AIRWin = 0; // AI Round Win
var HURWin = 0; // Human Round Win
var NORWin = 0; // No Round Win (Tie)

/**
 * One single round of RPS
 * @param {string} HUChoice The human's choice when they click one of the buttons
 * @param {string} AIChoice Randomly generated AI choice
 */
function gameRound(HUChoice, AIChoice) {
    gameStatus();
    if (HUChoice === AIChoice) {
        console.log("TIE");
        NORWin += 1;
        return "TIE";
    } else if (HUChoice == "ROCK") {
        if (AIChoice == "SCISSORS") {
            console.log("WIN");
            HURWin += 1;
            return "WIN";
        } else {
            console.log("LOSE");
            AIRWin += 1;
            return "LOSE";
        }
    } else if (HUChoice == "PAPER") {
        if (AIChoice == "ROCK") {
            console.log("WIN");
            HURWin += 1;
            return "WIN";
        } else {
            console.log("LOSE");
            AIRWin += 1;
            return "LOSE";
        }
    } else {
        if (AIChoice == "PAPER") {
            console.log("WIN");
            HURWin += 1;
            return "WIN";
        } else {
            console.log("LOSE");
            AIRWin += 1;
            return "LOSE";
        }
    }
}

// Assign an event listener to the three buttons
// On click, play 1 round of RPS
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let AIChoice = computerTurn();
        console.log("AI choice is " + AIChoice);
        if (button.id == 'rockButton') {
            gameRound('ROCK', AIChoice);
            console.log("Human choice is ROCK");
        } else if (button.id == 'paperButton') {
            gameRound('PAPER', AIChoice);
            console.log("Human choice is PAPER");
        } else if (button.id == 'scissorsButton') {
            gameRound('SCISSORS', AIChoice);
            console.log("Human choice is SCISSORS");
        }
    });
});


/**
 * Check to see if either the Human or AI has scored 3 points yet.
 * If 3 has been reached by one or the other, disable the buttons and 
 * call function gameOver()
 */
function gameStatus() {
    if (HURWin === 3) {
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
        console.log("Human wins game");
        gameOver();
    } else if (AIRWin === 3) {
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
        console.log("Human loses game");
        gameOver();
    } else return 0;
}

// TODO: End the game, disable buttons (move commands from gameStatus())
// output a score ticker on screen and display a reset button
function gameOver() {

}


/**
 * Select randomly from an array with 3 choices and return that random value
 */
function computerTurn() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice;
}