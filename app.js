// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
// initialize state

let guessesLeft = 5;
const randomNumber = Math.ceil(Math.random()*20);


// set event listeners to update state and DOM

const button = document.getElementById('button');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const input = document.getElementById('input');
const numBox = document.getElementById('numBox');
const triesBox = document.getElementById('tries-box');
const messageBox = document.getElementById('messageBox');
const imgContainer = document.getElementById('imageContainer');
const imgContainer2 = document.getElementById('imageContainer-2');



button.addEventListener('click', () => {
    const inputNum = Number(input.value);

    const comparison = compareNumbers(inputNum, randomNumber)

    if (comparison === 0) {
        numBox.textContent = randomNumber;
        messageBox.textContent = "Hooray! You got it right!"
        button.style.display = "none";
        tryAgainBtn.classList.add('toggle')
        imgContainer.classList.add('winner')
    }

    if (comparison === -1) {
        messageBox.textContent = "Too small! Try again."
        guessesLeft--;
        triesBox.textContent = guessesLeft;
    }

    if (comparison === 1) {
        messageBox.textContent = "Too large! Try again."
        guessesLeft--;
        triesBox.textContent = guessesLeft;
    }

    if (guessesLeft < 1) {
         messageBox.textContent = "Sorry, you lose."
         triesBox.textContent = 0;
         button.style.display = "none";
         tryAgainBtn.classList.add('toggle')
         imgContainer2.classList.add('loser')
    }

    





})