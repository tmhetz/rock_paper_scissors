let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;

let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissors = document.getElementById("scissors");

let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
let draws = document.getElementById("draws");

let winner = document.getElementById("declareWinner");
let playAgain = document.getElementById("playAgain");

let playerMoveImg = document.getElementById("yourMoveImg");
let computerMoveImg = document.getElementById("computerMoveImg");

let roundResult = document.getElementById("roundResult");

buttons = document.getElementById("buttons");
buttons.addEventListener("click", updateScorecard);

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

btnRock.addEventListener("mouseover", hoverOver);
btnPaper.addEventListener("mouseover", hoverOver);
btnScissors.addEventListener("mouseover", hoverOver);

btnRock.addEventListener("mouseout", hoverOut);
btnPaper.addEventListener("mouseout", hoverOut);
btnScissors.addEventListener("mouseout", hoverOut);

function hoverOver(e){
    e.target.style.backgroundColor = "rgba(12, 3, 67, 0.746)";
    e.target.style.outline = "5px solid black";
}

function hoverOut(e){
    e.target.style.backgroundColor = '';
    e.target.style.outline = "";
}

playAgain.addEventListener("click", gameReset);

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber === 1){
        return 'rock';
    } else if(randomNumber === 2){
        return 'paper';
    }
    return 'scissors';
}

function playRound(e){
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    playerMoveImg.textContent = e.target.innerHTML;
    if(computerSelection === "rock"){
        computerMoveImg.textContent = "✊";
    } else if(computerSelection === "paper"){
        computerMoveImg.textContent = "🤚";
    } else{
        computerMoveImg.textContent = "✌️";
    }
    
    if(playerSelection === computerSelection){
        drawCounter++;
        roundResult.textContent = "it's a draw!";
        return "it's a draw!";
    }
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            computerScore++;
            roundResult.textContent = "you lost that round!";
            return "you lose!";
        }
    }
    if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            computerScore++;
            roundResult.textContent = "you lost that round!";
            return "you lose!";
        }
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            computerScore++;
            roundResult.textContent = "you lost that round!";
            return "you lose!";
        }
    }
    playerScore++;
    roundResult.textContent = "you won that round!";
    return "you win!";
}

function updateScorecard(){
    wins.textContent = playerScore;
    losses.textContent = computerScore;
    draws.textContent = drawCounter;
    declareWinner();
}

function declareWinner(){
    if(playerScore === 5){
        //winner.textContent = "You won!";
        alert("you won!");
        endGame();
    } else if(computerScore === 5){
        //winner.textContent = "The computer won!";
        alert("you lost!");
        endGame();
    } else{
        winner.textContent = "";
    }
}

function endGame(){
    btnRock.removeEventListener("click", playRound);
    btnPaper.removeEventListener("click", playRound);
    btnScissors.removeEventListener("click", playRound);
    buttons.removeEventListener("click", updateScorecard);
}

function gameReset(){
    playerScore = 0;
    computerScore = 0;
    drawCounter = 0;
    updateScorecard();
    declareWinner();
    roundResult.textContent = "let the game begin!";
    playerMoveImg.textContent = "?";
    computerMoveImg.textContent = "?";
    btnRock.addEventListener("click", playRound);
    btnPaper.addEventListener("click", playRound);
    btnScissors.addEventListener("click", playRound);
    buttons.addEventListener("click", updateScorecard);
}
