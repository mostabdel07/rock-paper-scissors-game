let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); 
    // Math.random() gets a random number and Math.floor() rounded the number to a integer
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "rock";   
    if (letter === "p") return "paper";
    return "scissor"; 
}

function win(userChoice, computerChoice) {
    const UserWord = "User ";
    const CompWord = "Computer's ";
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${UserWord}${convertToWord(userChoice)} beats ${CompWord}${convertToWord(computerChoice)}, you win!`;
    userChoice_div.classList.add('green-glow'); // .classList returns an array of all the classes of that element
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    const UserWord = "User ";
    const CompWord = "Computer's ";
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${UserWord}${convertToWord(userChoice)} loses to ${CompWord}${convertToWord(computerChoice)}, you lost...`;
    userChoice_div.classList.add('red-glow'); // .classList returns an array of all the classes of that element
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    const UserWord = "User ";
    const CompWord = "Computer's ";
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${UserWord}${convertToWord(userChoice)} draws ${CompWord}${convertToWord(computerChoice)}, it's a draw!`;
    userChoice_div.classList.add('gray-glow'); 
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":  
            lose(userChoice, computerChoice);
            break;  
        case "rr":
        case "pp":
        case "ss":  
            draw(userChoice, computerChoice);
            break;    
    }
   
}

function main() { 
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
}

main();