let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.prevGuess');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

//function to validate guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter Valid Number')
    } else if (guess < 1) {
        alert('Please Enter Number More Than 1')
    } else if (guess > 100) {
        alert('Please Enter Number Less Than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`GameOver - Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

//function to check guess
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations !!  You 🫵 Guessed it right`)
        endGame();
    } else if (guess > randomNumber) {
        displayMessage(`Number is Tooooo Low`)
    } else if (guess < randomNumber) {
        displayMessage(`Number is Tooooo High`)
    } else {
        displayGuess(guess);
    }
}

//function to display guess
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

//function to display message
function displayMessage(message) {
    loworHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        playGame = true;
    })
}
