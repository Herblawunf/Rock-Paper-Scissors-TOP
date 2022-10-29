let options = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());