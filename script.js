function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber === 1){
        return 'rock';
    } else if(randomNumber === 2){
        return 'paper';
    }
    return 'scissors';
}

function playRound(playerSelection, computerSelection){
    let playerSelectionLower = playerSelection.toLowerCase();
    if(playerSelectionLower === computerSelection){
        return "it's a draw!";
    }
    if(playerSelectionLower === "rock"){
        return computerSelection === "paper" ? "you lose!" : "you win!";
    }
    if(playerSelectionLower === "paper"){
        return computerSelection === "rock" ? "you win!" : "you lose!";
    }
    if(playerSelectionLower === "scissors"){
        return computerSelection === "rock" ? "you lose!" : "you win!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();