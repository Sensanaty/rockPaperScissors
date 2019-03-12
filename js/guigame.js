/*jshint esversion: 6 */
var AIRWin = 0; // AI Round Win
var HURWin = 0; // Human Round Win
var NORWin = 0; // No Round Win (Tie)

/** Resets the game board and scores */
function reset() {
    AIRWin = 0;
    HURWin = 0;
    NORWin = 0;
    window.location.reload(false);
}

/**
 * Select randomly from an array with 3 choices and return that random value
 */
function computerTurn() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice;
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
            displayScore();
            displayChoices('rock', AIChoice.toLocaleLowerCase());
        } else if (button.id == 'paperButton') {
            gameRound('PAPER', AIChoice);
            displayScore();
            displayChoices('paper', AIChoice.toLocaleLowerCase());
        } else if (button.id == 'scissorsButton') {
            gameRound('SCISSORS', AIChoice);
            displayScore();
            displayChoices('scissors', AIChoice.toLocaleLowerCase());
        }
    });
});

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

/**
 * Check to see if either the Human or AI has scored 3 points yet.
 * If 3 has been reached by one or the other, disable the buttons and 
 * call function gameOver()
 */
function gameStatus() {
    let wipeAndReplace = document.getElementById("wipeAndReplace");
    let scoreboard = document.getElementById("scoreboard");
    displayScore();
    if (HURWin >= 3) {
        scoreboard.setAttribute('style', 'display: flex;');
        return gameOver("VICTORY");
    } else if (AIRWin >= 3) {
        scoreboard.setAttribute('style', 'display: flex;');
        return gameOver("LOSS");
    } else {
        wipeAndReplace.setAttribute('style', 'display: none;');
        scoreboard.setAttribute('style', 'display: flex;');
        displayScore();
    }
}

// TODO: End the game, disable buttons (move commands from gameStatus())
// output a score ticker on screen and display a reset button
function gameOver(resultOfGame) {
    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;
    let scoreboardResult = document.getElementById("scoreboardResult");
    if (resultOfGame === "VICTORY") {
        displayScore();
        scoreboardResult.textContent = "Congratulations! You've won the game!";
    } else if (resultOfGame === "LOSS") {
        displayScore();
        scoreboardResult.textContent = "Aww sorry, you've lost!";
    }
}


/**
 * Display what the Human and AI opponent chose
 */
function displayChoices(HUChoice, AIChoice) {
    let scoreboardHeader = document.getElementById("scoreboardTitle");
    scoreboardHeader.textContent = `You chose ${HUChoice} and your opponent chose ${AIChoice}`;
}

/**
 * Updates the scoreboard with the current standings.
 */
function displayScore() {
    let currentScore = document.getElementById("scoreboardScore");
    currentScore.textContent = `${HURWin} - ${AIRWin}`;
}