function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;

    if (ComputerChoice === 1) {
        return "rock";
    }
    else if (ComputerChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}




let humanscore = 0;
let computerscore = 0;
let rounds = 0;

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        console.log("Its a tie!");
    }
    else if (
        (HumanChoice == "rock" && ComputerChoice == "scissors") ||
        (HumanChoice == "paper" && ComputerChoice == "rock") ||
        (HumanChoice == "scissors" && ComputerChoice == "paper")
    )
     {
        console.log(`You win ${HumanChoice} beats ${ComputerChoice}`);
        humanscore++;
    }

    else {
        console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}`);
        computerscore++;
    }
}

function handleRounds(HumanChoice) {
    if (rounds >= 5) {
        return;
    }
    else {
        rounds++
    }
    playRound(HumanChoice, getComputerChoice());

    if (rounds === 5) {
        console.log(`You: ${humanscore}  Computer: ${computerscore}`);
    }
}

const div = document.createElement("div");
//create buttons
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

//give text to buttons
rockButton.textContent = "rock";
scissorsButton.textContent = "scissors";
paperButton.textContent = "paper";

//put buttons inside div
div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorsButton);

//put div on webpage
document.body.appendChild(div);

//add events to buttons




rockButton.addEventListener("click", () => {
    handleRounds("rock");
});

paperButton.addEventListener("click", () => {
    handleRounds("paper");
});

scissorsButton.addEventListener("click", () => {
    handleRounds("scissors");
});