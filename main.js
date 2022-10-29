let options = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random()*3)];
}

function round(comp, player) {
    if((comp === "Rock" && player === "Scissors") || (comp === "Paper" && player === "Rock") || (comp === "Scissors" && player === "Paper")) {
        console.log(`You lose! ${comp} beats ${player}!`)
        return 0;
    } else if(comp === player) {
        console.log("Draw!")
    } else {
        console.log(`You win! ${player} beats ${comp}!!!`)
        return 1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for( i=0; i<5; i++){
        let playerChoice = prompt(`Round ${i + 1}! Type your choice: `);
        let computerChoice = getComputerChoice();
        let score = round(computerChoice, playerChoice);
        if(score === 1) {
            playerScore += 1;
        } else if(score === 0) {
            computerScore += 1;
        }
    }
    if(playerScore > computerScore){
        console.log(`Congratulations! You won! The score was ${playerScore} - ${computerScore}`);
    } else if(playerScore === computerScore){
        console.log("Draw... boring.")
    } else {
        console.log(`I beat you!!! Better luck next time...`)
    }
}

game();