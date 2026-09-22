function getComputerChoice(){
    let computer = Math.floor(Math.random()*3) + 1;
    
    if(computer ===1){
        return "rock";
    }
    else if(computer=== 2){
        return "paper";
    }
    else{
        return "sciccors";
    }
}

function getHumanChoice(){
    let human = +prompt("Enter 1 for rock\n2for paper\n3for scissors");
    
    if(human ===1){
        return "rock";
    }
    else if(human=== 2){
        return "paper";
    }
    else{
        return "scicssors";    
    }   
}
let humanchoice = getHumanChoice(); 
console.log(humanchoice);