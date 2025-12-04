const gameDisplay = document.querySelector(".game-display");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const rock = "rock";
const scissors = "scissors";
const paper = "paper";

let userChoice = null;

const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

rockBtn.addEventListener("click", rockChoice);
paperBtn.addEventListener("click", paperChoice);
scissorsBtn.addEventListener("click", scissorsChoice);

function cpuChoice() {
  // get a random choice
  let choices = [rock, paper, scissors];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function gameResult(randomChoice) {
  // compares player vs cpu
  // console.log(randomChoice);
  let result = randomChoice();
  console.log(result);
  if (userChoice === result) {
    gameDisplay.textContent = 'Draw, try again!';
  } else if (rules[userChoice] === result) {  // check if the cpu choice equals what beats your choice
    gameDisplay.textContent = 'Congrats, you have won!';
}  else {
    gameDisplay.textContent = 'Womp Womp, loser!';
    
}

}

function rockChoice() {
  // calls cpuChoice() and sets userChoice as rock
  userChoice = rock;
  gameResult(cpuChoice);
}

function paperChoice() {
  // calls cpuChoice() and sets userChoice as paper
  userChoice = paper;
  gameResult(cpuChoice);
}

function scissorsChoice() {
  // calls cpuChoice() and sets userChoice as scissors
  userChoice = scissors;
  gameResult(cpuChoice);
}
