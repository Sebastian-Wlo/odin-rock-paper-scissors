let humanScore = 0;
let computerScore = 0;

// console.log("Hello from the external js file");
function getComputerChoice() {
    const max = 3;
    let shape = "";
    let outcome = Math.floor(Math.random() * max);
    switch (outcome) {
        case 1:
            shape = "rock";
            break;
        case 2:
            shape = "paper";
            break
        default:
            shape = "scissors";
            break;
        };
    return shape
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase().trim();
    return userChoice;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();


    console.log(`Player choice: ${humanChoice}, Computer choice: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer wins the round!");
            computerScore += 1;
        } else if (computerChoice === "scissors") {
            console.log("Player wins the round!");
            humanScore += 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("Computer wins the round!");
            computerScore += 1;
        } else if (computerChoice === "rock") {
            console.log("Player wins the round!");
            humanScore += 1;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("Computer wins the round!");
            computerScore += 1;
        } else if (computerChoice === "paper") {
            console.log("Player wins the round!");
            humanScore += 1;
        }
    }

    console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
}
function playGame() {
    do {
        playRound();
    } while (humanScore < 3 && computerScore < 3);
    if (humanScore === 3) {
        console.log("Player Wins the Game!");
    } else {
        console.log("Computer Wins the Game!");
    }
}

playGame();