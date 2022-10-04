// Learning Javascript

console.log('Hello World!');

// const options = ['rock', 'paper', 'scissors'];
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
var rockbutton = document.querySelector("#rock");
var paperbutton = document.querySelector("#paper");
var scissorsbutton = document.querySelector("#scissors");
var buttons = document.querySelectorAll(".btn");

// Button selections
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

function getComputerChoice() {
    computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
}
getComputerChoice();

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

function playRound(playerChoice, computerChoice) {
    if (winner(playerChoice, computerChoice) === "Tie"){
        console.log("It's a tie.");
    } else if (winner(playerChoice, computerChoice) === "Player"){
        console.log("You won!");
    } else {
        console.log("The computer won :(");
    }
}