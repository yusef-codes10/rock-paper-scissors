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
  if (userChoice === rock) {
    if (result === paper) {
      gameDisplay.textContent = "You have won";
    } else if (result === scissors) {
      gameDisplay.textContent = "You have lost";
    } else if (result === rock) {
      gameDisplay.textContent = "Draw";
    }
  } else if (userChoice === paper) {
    if (result === paper) {
      gameDisplay.textContent = "Draw";
    } else if (result === scissors) {
      gameDisplay.textContent = "You have lost";
    } else if (result === rock) {
      gameDisplay.textContent = "You have won";
    }
  }
  if (userChoice === scissors) {
    if (result === paper) {
      gameDisplay.textContent = "You have won";
    } else if (result === scissors) {
      gameDisplay.textContent = "Draw";
    } else if (result === rock) {
      gameDisplay.textContent = "You have lost";
    }
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
