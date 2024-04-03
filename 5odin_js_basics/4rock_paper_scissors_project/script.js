// logic for a Rock, Paper, Scissors game

let moves_list = ["rock", "paper", "scissors"];

function getUserMove() {
    let player_move = prompt("Rock, paper or scissors? Choose your move!");
    let formatted_player_move = player_move.toLowerCase();
    if (moves_list.includes(formatted_player_move)) {
        return formatted_player_move;
    } else {
        alert("Your move is not valid. Refresh to try again.")
    }
}

function getComputerChoice() {
    // this function returns the choice of the computer (random)
    let choice = Math.floor(Math.random() * 3);
    // 0 is rock; 1 is paper; 2 is scissors
    return moves_list[choice];
}

function roundPlay(playerSelection, computerSelection) {
    // this function returns the winner of the round
    if (playerSelection == computerSelection) {
        // draw
    }

}

function playGame(params) {
    // this function plays a game of janken with 5 rounds
    
}


console.log(getUserMove());