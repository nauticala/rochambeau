function getComputerChoice() {
    const computerSelection = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * computerSelection.length);

    return random, computerSelection[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let computerScore = 0;
    let playerScore = 0;

    if (computerSelection == playerSelection) {
        return "It's a tie!";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
    computerScore =+ computerScore;
    return "You lose! Rock crushes scissors!";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore =+ computerScore;
        return "You lose! Scissors cut paper!";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore =+ computerScore;
        return "You lose! Paper covers rock! Or something.";
    }
    else {
        playerScore =+ playerScore
        return "YOU WIN! LOOK AT YOU GO!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
