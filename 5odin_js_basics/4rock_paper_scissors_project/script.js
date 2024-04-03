// logic for a Rock, Paper, Scissors game

let moves_list = ["rock", "paper", "scissors"];

function getUserMove() {
    let player_move = prompt("Rock, paper or scissors? Choose your move!");
    let formatted_player_move = player_move.toLowerCase();
    if (moves_list.includes(formatted_player_move)) {
        console.log("player:" + formatted_player_move);
        return formatted_player_move;
    } else {
        alert("Your move is not valid. Refresh to try again.");
    }
}

function getComputerChoice() {
    // this function returns the choice of the computer (random)
    let choice = Math.floor(Math.random() * 3);
    // 0 is rock; 1 is paper; 2 is scissors
    console.log("pc: " + moves_list[choice]);
    return moves_list[choice];
}

function roundPlay(playerSelection, computerSelection) {
    // this function returns the winner of the round
    if (playerSelection == computerSelection) {
        // draw
        console.log(`That's a draw, the player and the computer chose the same move!`);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        // win
        console.log(roundResultMessage(true, playerSelection, computerSelection));
    } else {
        // lose
        console.log(roundResultMessage(false, playerSelection, computerSelection));
    }

}

function roundResultMessage(win = true, playerSelection, computerSelection) {
    // this is just meant to capitalize the moves, yes this could have probably been avoided
    let formatted_playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let formatted_computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);


    if (win === true) {
        // victory message
        return `You win! ${formatted_playerSelection} beats ${formatted_computerSelection}!`;
    } else {
        // losing message
        return `You lose! ${formatted_computerSelection} beats ${formatted_playerSelection}!`;
    }
}

function playGame(params) {
    // this function plays a game of janken with 5 rounds
    
}


roundPlay(getUserMove(), getComputerChoice())