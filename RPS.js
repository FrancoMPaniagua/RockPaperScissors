const possibleplays = ["rock", "paper", "scissors"];
const playerWinMessage = "player wins this round!";
const playerLoseMessage = "player loses this round!";
const drawMessage = "it was a draw!";
let pWins, cWins;
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return (possibleplays[choice]);
} 
function playerWins() {
    console.log(playerWinMessage);
    pWins++;
}
function playerLoses() {
    console.log(playerLoseMessage);
    cWins++;
}
function draw() {
    console.log(drawMessage);
}

function evaluateWinner(playerMove,computerMove) { 
    if (playerMove === "rock"){
        switch(computerMove) {
            case "rock":
                draw();
                break;
            case "paper":
                playerLoses();
                break;
            case "scissors":
                playerWins();
                break;
        }
    }
    else if (playerMove === "paper"){
        switch(computerMove) {
            case "rock":
                playerWins();
                break;
            case "paper":
                draw();
                break;
            case "scissors":
                playerLoses();
                break;
        }
    }
    else if (playerMove === "scissors"){
        switch(computerMove) {
            case "rock":
                playerLoses();
                break;
            case "paper":
                playerWins();
                break;
            case "scissors":
                draw();
                break;
        }
    }
    else {
        throw 'Input invalido';
    }
    
}

function playRound(playerMove) {
    let computerMove = computerPlay();
    playerMove = playerMove.toLowerCase();
    
    if ((evaluateWinner(playerMove,computerMove) != "Something went wrong...")) {
        console.log("The player played: " + playerMove);
        console.log("The computer played: " + computerMove);

    }
    
}

function game() {
    pWins = 0;
    cWins = 0;
    for (let i = 0;i < 5;i++){
        playerMove = window.prompt("Elige tu coso");
        playRound(playerMove);
        console.log("P:" + pWins + "C:" + cWins);

    }
    if (pWins < cWins) {
        console.log("Perdiste bobo");
    }
    else if (pWins > cWins) {
        console.log("woo ganaste");
    }
    else {
        console.log("como vas a empatar XD")
    }
}