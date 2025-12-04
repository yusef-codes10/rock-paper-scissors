const gameDisplay = document.querySelector('.game-display');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';

let userChoice = rock;

rockBtn.addEventListener('click', rockChoice);


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
    result === userChoice ? console.log('yes') : console.log('no') && 
    console.log(randomChoice);
    ;
}

function rockChoice() {
    // calls cpuChoice() and sets userChoice as rock
    userChoice = rock;
    gameResult(cpuChoice);
}

function paperChoice() {
    // calls cpuChoice() and sets userChoice as paper
    userChoice = paper;
    gameDisplay(cpuChoice);
}

function scissorsChoice() {
    // calls cpuChoice() and sets userChoice as scissors
    userChoice = scissors;
    gameDisplay(cpuChoice);
}