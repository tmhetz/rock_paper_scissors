let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let player = false;
let computer = false;
let draw = false;

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let banner1 = document.getElementById("banner1");
let banner2 = document.getElementById("banner2");
let playerScorecard = document.getElementById("playerScorecard");
let computerScorecard = document.getElementById("computerScorecard");
let drawScorecard = document.getElementById("drawScorecard");
let results = document.querySelectorAll(".results");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3);
    if(randNum === 0){
        return "rock";
    } else if(randNum === 1){
        return "paper";
    } else{
        return "scissors";
    }
}

function playRound(e){
    let playerChoice = this.id;
    playerChoice = playerChoice.slice(0, -3);
    let computerChoice = getComputerChoice();

    getWinner(playerChoice, computerChoice);

    if(computer){
        computerScore++;
        banner1.textContent = "You lost this round!";
        banner2.textContent = `${computerChoice} beats ${playerChoice}`;
        computer = false;
    } else if(draw){
        drawScore++;
        banner1.textContent = "It's a draw!";
        banner2.textContent = `You both chose ${playerChoice}`;
        draw = false;
    } else{
        playerScore++;
        banner1.textContent = "You won this round!";
        banner2.textContent = `${playerChoice} beats ${computerChoice}`;
        player = false;
    }
    
    refreshScoreboard(playerChoice, computerChoice);

    setTimeout(function(){
        checkforwinner();
    }, 1000);
    //checkforwinner();
}

function getWinner(playerChoice, computerChoice){
    if((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")){
        computer = true;
    } else if(playerChoice === computerChoice){
        draw = true;
    } else{
        player = true;
    }
}

function refreshScoreboard(playerChoice, computerChoice){
    playerScorecard.textContent = `Player: ${playerScore}`;
    computerScorecard.textContent = `Computer: ${computerScore}`;
    drawScorecard.textContent = `Draws: ${drawScore}`;

    results[0].textContent = convertChoice(playerChoice);
    results[1].textContent = convertChoice(computerChoice);
    if(playerChoice === computerChoice){
        results[2].textContent = convertChoice(playerChoice);
    } else{
        results[2].textContent = "-";
    }
}

function convertChoice(choice){
    if(choice === "rock"){
        return "✊";
    } else if(choice === "paper"){
        return "🤚";
    } else if(choice === "scissors"){
        return "✌️";
    } else{
        return "?";
    }
}

function checkforwinner(){
    if(playerScore === 5 || computerScore === 5){
        //declare winner with option to play again
        alert("Game over!");

        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        refreshScoreboard();
        banner1.textContent = "Ready to play?";
        banner2.textContent = "First to 5 is the winner";
    }
}

