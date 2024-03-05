// game starts as soon as it loads
// computer makes a choice getComputerChoice()
// user prompted for an input
// conidtional check who won
// score update
// repeat until one score reaches 3
// display win message (and chance to rerun the game?)

const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
    return prompt("Enter your choice between: "+choices).toLowerCase()
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();

    if (computerSelection == playerSelection) {
        console.log("It's a draw, both chose "+playerSelection);
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")) {
        console.log("You Lose! "+computerSelection+" beats "+playerSelection);
        computerScore++;
    } else {
        console.log("You Win! "+playerSelection+" beats "+computerSelection);
        playerScore++;
    }
}

function playGame() {
    for(var i = 0; i <= 4; i++) {
        playRound();
    }

    console.log("The closing score is- You :"+playerScore+" Computer :"+computerScore);
}

