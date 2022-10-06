// Learning Javascript

// Loader Wrapper Fade Out
const fadeOut = () => {
    const loaderWrapper = 
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

// Start of RPS Javascript
const options = ['rock', 'paper', 'scissors'];
var rock = options[0];
var paper = options[1];
var scissors = options[2];
var playerChoice = "";
var computerChoice = "";
let playerScore = 0;
let computerScore = 0;
var gameWinner = "";
var rockbutton = document.querySelector("#rock");
var paperbutton = document.querySelector("#paper");
var scissorsbutton = document.querySelector("#scissors");
var playerScoreLabel = document.querySelector(".score-label-player");
var computerScoreLabel = document.querySelector(".score-label-computer");
var footerLabel = document.querySelector(".footer-text-label");
var endGameModal = document.getElementById("end-game-modal");
var endGameButton = document.querySelector(".end-game-btn");
var endGameWinner = document.querySelector(".end-game-winner");

// RPS Button selections
rockbutton.onclick = function(){
    playerChoice = rock;
    return playRound(playerChoice, computerChoice);
}
paperbutton.onclick = function(){
    playerChoice = paper;
    return playRound(playerChoice, computerChoice);
}
scissorsbutton.onclick = function(){
    playerChoice = scissors;
    return playRound(playerChoice, computerChoice);
}
 // Computer making its choice
function getComputerChoice() {
        computerChoice = options[Math.floor(Math.random() * options.length)];
        return computerChoice;
}
getComputerChoice();

// Winner of the current round
function winner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice){
        return "Tie";
    } else if(
        (playerChoice == rock && computerChoice == scissors) ||
        (playerChoice == paper && computerChoice == rock) ||
        (playerChoice == scissors && computerChoice == paper)
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

// Playing the current round
function playRound(playerChoice, computerChoice) {
    if (winner(playerChoice, computerChoice) === "Tie"){
        footerLabel.innerHTML = "It's a Tie!";
    } else if (winner(playerChoice, computerChoice) === "Player"){
        playerScore++;
        playerScoreLabel.innerHTML = playerScore;
        footerLabel.innerHTML = "You won the round!";
    } else if (winner(playerChoice, computerChoice) === "Computer") {
        computerScore++;
        computerScoreLabel.innerHTML = computerScore;
        footerLabel.innerHTML = "Yikes... the computer won.";
    }
    if (playerScore === 5 || computerScore === 5){
        declareWinner(playerScore, computerScore);
    } 
    getComputerChoice();
}

// Declaring the winner of the game
function declareWinner(playerScore, computerScore) {
    if (playerScore === 5){
        gameWinner = "You";
    } else if (computerScore === 5){
        gameWinner = "Computer";
    }
    endGame(gameWinner);
}

// End of game modal
function endGame(gameWinner) {
    if (gameWinner === "You"){
        endGameWinner.innerHTML = "You have won the game!"
    } else if (gameWinner === "Computer"){
        endGameWinner.innerHTML = "Computer has won the game!"
    }
    endGameModal.style.display = "flex";
}

// Reset game button
endGameButton.onclick = function(){
    playerScore = 0;
    computerScore = 0;
    playerScoreLabel.innerHTML = playerScore;
    computerScoreLabel.innerHTML = computerScore;
    footerLabel.innerHTML = "Select a option to play!"
    endGameModal.style.display = "none";
    getComputerChoice();
}