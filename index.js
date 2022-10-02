// Learning Javascript

console.log('Hello World!');

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function winner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie!";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player!";
    } else {
        return "Computer!";
    }
}

function playRound(playerSelection, computerSelection) {
    const resultWinner = winner(playerSelection, computerSelection);
    if (resultWinner === "Tie!"){
        return "It's a Tie!"
    } else if (resultWinner === "Player!") {
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, paper, or scissors?");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            return choiceInLower;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(winner(playerSelection, computerSelection) == "Player!"){
            playerScore++;
        }
        else if(winner(playerSelection, computerSelection) == "Computer!"){
            computerScore++;
        }
    }
    console.log(`You won ${playerScore} time's and lost ${computerScore} time's!`);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('Hello again!');
});

game();
