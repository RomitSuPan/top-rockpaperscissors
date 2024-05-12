const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;
var choices_btn_row = document.querySelector("#choices-btn-row");
var scoreboard = document.querySelector("#scoreboard");

choices.forEach(element => {
    var choice_button = document.createElement("button");
    choice_button.innerText = element;
    choice_button.id = element.toString();
    choices_btn_row.appendChild(choice_button);
});

for (let i = 0; i < choices.length; i++) {
    document.getElementById(choices[i]).addEventListener("click", playGame);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(event) {
    let computerSelection = getComputerChoice();
    let playerSelection = event.target.id;

    if (computerSelection == playerSelection) {
        console.log("It's a draw, both chose "+playerSelection);
        scoreboard.textContent = "It's a draw, both chose "+playerSelection+" Current Score is- Computer: "+computerScore+" Player: "+playerScore;
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")) {
        console.log("You Lose! "+computerSelection+" beats "+playerSelection);
        computerScore++;
        scoreboard.textContent = "You Lose! "+computerSelection+" beats "+playerSelection+" Current Score is- Computer: "+computerScore+" Player: "+playerScore;
    } else {
        console.log("You Win! "+playerSelection+" beats "+computerSelection);
        playerScore++;
        scoreboard.textContent = "You Win! "+playerSelection+" beats "+computerSelection+" Current Score is- Computer: "+computerScore+" Player: "+playerScore;
    }
}

function playGame(event) {
    if (playerScore < 5 && computerScore < 5) {
        playRound(event);
    }
    else {
        scoreboard.textContent = "The closing score is- You :"+playerScore+" Computer :"+computerScore;
    }
}

