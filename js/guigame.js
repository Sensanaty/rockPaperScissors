/*jshint esversion: 6 */
/**
 * @AIRWin AI Round Win
 * @HURWin Human Round Win
 * @NORWIN No Round Win (tie) */
var AIRWin = 0;
var HURWin = 0;
var NORWin = 0;
var rockButton = document.querySelector('#rockButton');
var paperButton = document.querySelector('#paperButton');
var scissorsButton = document.querySelector('#scissorsButton');
var HUChoice;

/**
 * Select randomly one item from array "choices" and return that value
 */
function computerTurn() {
    const choices = Array("ROCK", "PAPER", "SCISSORS");
    const randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice;
}

// rockButton.addEventListener('click', function() {
//     var HUChoice = "ROCK";
//     console.log(HUChoice);
//     return HUChoice;
// }, false);

// paperButton.addEventListener('click', function() {
//     var HUChoice = "PAPER";
//     console.log(HUChoice);
//     return HUChoice;
// }, false);

// scissorsButton.addEventListener('click', function() {
//     var HUChoice = "SCISSORS";
//     console.log(HUChoice);
//     return HUChoice;
// }, false);

