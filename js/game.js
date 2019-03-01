/**
 * @AIRWin AI Round Win
 * @HURWin Human Round Win
 * @NORWIN No Round Win (tie) */
let AIRWin = 0;
let HURWin = 0;
let NORWin = 0;

/**
 * Select randomly one item from array "choices" and return that value
 */
function computerTurn() {
    const choices = Array("ROCK", "PAPER", "SCISSORS")
    const randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice;
}

/**
 * Prompt a user to input Rock, Paper or Scissors. Check against regex to see if it matches, if not, loops until correct choice is made.
 */
function humanTurn() {
    const userInput = prompt("Do you pick: Rock, Paper, or Scissors?")
    if (userInput.toString().match(/\brock/i)) {
        return userInput;
    } else if (userInput.toString().match(/\bpaper/i)) {
        return userInput;
    } else if (userInput.toString().match(/\bscissors/i)) {
        return userInput;
    } else {
        alert("You didn't enter a valid choice, please try again")
        humanTurn();
    }
}

/**
 * Play a single round of RPS. Take return value of computerTurn() and return value of humanTurn(). Compare human choice to AI choice
 */
function gameRound() {
    let AIChoice = computerTurn().toLocaleUpperCase();
    let HUChoice = humanTurn().toLocaleUpperCase();
    if (HUChoice === AIChoice) {
        return "TIE";
    } else if (HUChoice == "ROCK") {
        if (AIChoice == "SCISSORS") {
            return "WIN";
        } else {
            return "LOSE";
        }
    } else if (HUChoice == "PAPER") {
        if (AIChoice == "ROCK") {
            return "WIN";
        } else {
            return "LOSE";
        }
    } else {
        if (AIChoice == "PAPER") {
            return "WIN";
        } else {
            return "LOSE";
        }
    }
}

/** Update the score displayed on the screen */
function scoreUpdate() {
    document.getElementById("currentGameState").innerHTML = "Your score: " + `${HURWin}` + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp AI score:" + `${AIRWin}`;
}

/** Take return value of gameRound(), increment counter
 * @HURWin Human Round Win
 * @AIRWin AI Round Win
 * @NORWin No Round Win (Tie)
 */
function score() {
    let result = gameRound();
    if (result === "WIN") {
        HURWin += 1;
        scoreUpdate();
        console.log("%c Nice, you win this round!", "color: green;")
        console.log("AI: " + `${AIRWin}` + "\nYou: " + `${HURWin}`)
        return 1;
    } else if (result === "LOSE") {
        AIRWin += 1;
        scoreUpdate();
        console.log("%c Ouch, you lost this round!", "color: red;")
        console.log("AI: " + `${AIRWin}` + "\nYou: " + `${HURWin}`)
        return 1;
    } else {
        NORWin += 1;
        scoreUpdate()
        console.log("%c A Tie! Oh well, go again!", "color: yellow;")
        console.log("AI: " + `${AIRWin}` + "\nYou: " + `${HURWin}`)
        return 1;
    }

}

/** Resets the game board and scores */
function reset() {
    AIRWin = 0;
    HURWin = 0;
    NORWin = 0;
    window.location.reload(false);
    document.getElementById("currentGameState").innerHTML = "";
}

/** Call score() once, check if HURWin or AIRWin is === 3. If neither is true, play the game until they do become === 3 */
function game() {
    score();
    if (HURWin === 3) {
        document.getElementById("currentGameState").innerHTML = "Congratulations! You won the game! Type reset() to reset the page back to its original state and start again!.";
    } else if (AIRWin === 3) {
        document.getElementById("currentGameState").innerHTML = "Unfortunately, you lost! Better luck next time. Type reset() to reset the page back to its original state and start again!.";
    } else game();
}