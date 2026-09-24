function getComputerChoice(){
    let computerchoice = Math.floor(Math.random()*3) + 1;
    
    if(computerchoice ===1){
        return "rock";
    }
    else if(computerchoice=== 2){
        return "paper";
    }
    else{
        return "sciccors";
    }
}

function getHumanChoice(){
    let humanchoice = prompt("Enter rock, paper or scissors");
    humanchoice = humanchoice.toLowerCase();
    
    if(humanchoice === "rock"){
        return "rock";
    }
    else if(humanchoice=== "paper"){
        return "paper";
    }
    else{
        return "scicssors";    
    }   
}


let humanscore = 0;
let computerscore = 0;

function playRound(HumanChoice,ComputerChoice){
    if(HumanChoice === ComputerChoice){
        console.log("Its a tie!");
    }
    else if(
        (HumanChoice == "rock" && ComputerChoice=="scicssors") ||
        (HumanChoice=="paper" && ComputerChoice=="rock") ||
        (HumanChoice=="scicssors" && ComputerChoice=="paper")
    ){
        console.log(`You win ${HumanChoice} beats ${ComputerChoice}`); 
        humanscore++; 
    }
    
    else{
        console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}`);
        computerscore++;
    }
}

for(i = 0; i<5;i++){

    let humanSelection = getHumanChoice(); 
    let computerSelection = getComputerChoice();
    
    playRound(humanSelection,computerSelection);
}

console.log(`Final score: You ${humanscore} - Computer ${computerscore}`);