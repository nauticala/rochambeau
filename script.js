function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * computerChoice.length);

    return random, computerChoice[random];
}

console.log(getComputerChoice());
