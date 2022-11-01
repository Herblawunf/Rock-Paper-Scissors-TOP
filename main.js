let options = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random()*3)];
}

function round(comp, player) {
    const result = document.querySelector(".results");
    if((comp === "Rock" && player === "Scissors") || (comp === "Paper" && player === "Rock") || (comp === "Scissors" && player === "Paper")) {
        console.log(`You lose! ${comp} beats ${player}!`)
        result.innerHTML = `<p>You lose! ${comp} beats ${player}!</p>`;
        return 0;
    } else if(comp === player) {
        console.log("Draw!")
        result.innerHTML = `<p>Draw!</p>`;
    } else {
        console.log(`You win! ${player} beats ${comp}!!!`)
        result.innerHTML = `<p>You win! ${player} beats ${comp}!</p>`;
        return 1;
    }
}

const buttons = document.querySelectorAll("button");
const showScore = document.querySelector(".score");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        console.log(e.target.id);
        let score = round(getComputerChoice(),options[e.target.id]);
        console.log(`Score = ${score}`);

        if(score === 1) {
            playerScore += 1;
        } else if(score === 0) {
            computerScore += 1;
        } 

        showScore.innerHTML = `<p>Player ${playerScore} - ${computerScore} Computer</p>`;

        if(playerScore === 5){
            showScore.innerHTML = `<p> You Win!</p>`;
            playerScore = 0;
            computerScore = 0;
        } else if(computerScore === 5) {
            showScore.innerHTML = `<p> You Lose!</p>`;
            playerScore = 0;
            computerScore = 0;
        }
    });
});

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for( i=0; i<5; i++){
//         let playerChoice = prompt(`Round ${i + 1}! Type your choice: `);
//         let computerChoice = getComputerChoice();
//         let score = round(computerChoice, playerChoice);
//         if(score === 1) {
//             playerScore += 1;
//         } else if(score === 0) {
//             computerScore += 1;
//         }
//     }
//     if(playerScore > computerScore){
//         console.log(`Congratulations! You won! The score was ${playerScore} - ${computerScore}`);
//     } else if(playerScore === computerScore){
//         console.log("Draw... boring.")
//     } else {
//         console.log(`I beat you!!! Better luck next time...`)
//     }
// }

// game();