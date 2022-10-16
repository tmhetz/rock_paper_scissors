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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let drawCounter = 0;
    for(let i = 1; i <=5; i++){
        let playerSelection = prompt("Choose rock, paper, or scissors");
        let roundResult = playRound(playerSelection, getComputerChoice());
        roundResult === "you win!" ? playerScore++ 
        : roundResult === "you lose!" ? computerScore++ : drawCounter++;
        console.log(`round ${i} result: ${roundResult}`)
    }
    if(playerScore > computerScore){
        return "you won the game!";
    } else if (playerScore === computerScore){
        return "the game was a draw";
    } else {
        return "you lost the game";
    }
}

console.log(game());