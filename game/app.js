const gameDisplay = document.querySelector('.game-display');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';

let userChoice = null;

cpuChoice();

function cpuChoice() {
    // get a random choice
    let choices = [rock, paper, scissors];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomChoice);
}

function gameResult() {
    // compares player vs cpu
}

function rockChoice() {
    // calls cpuChoice() and sets userChoice as rock
    userChoice = rock;
}

function paperChoice() {
    // calls cpuChoice() and sets userChoice as paper
}

function scissorsChoice() {
    // calls cpuChoice() and sets userChoice as scissors
}