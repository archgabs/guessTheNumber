'use strict';

const guessButton = document.querySelector('.btn-guess');
const openButton = document.querySelector('.btn-open');
const againButton = document.querySelector('.asideBtn');
const closeButton = document.querySelector('.closeBtn');

const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const response = document.querySelector('.response');
const revealNumber = document.querySelector('.resultNumber');
const resultField = document.querySelector('.hidden');
let randomNumber = Math.trunc(Math.random() * 20 + 1);

guessButton.addEventListener('click', function () {
    // Getting The Value From the Input
    resultField.style.opacity = 1;
    resultField.style.cursor = 'auto';
    const numberInput = Number(document.querySelector('.numberInput').value);
    isNumberEqual(numberInput);
});

// Open || Close Functions

openButton.addEventListener('click', function () {
    resultField.style.opacity = 1;
    resultField.style.cursor = 'auto';
});
closeButton.addEventListener('click', function () {
    resultField.style.opacity = 0;
    resultField.style.cursor = 'auto';
});

// Reset Function

againButton.addEventListener('click', function () {
    revealNumber.style.color = '#333';
    resultField.style.cursor = 'auto';
    score.textContent = 20;
    resultField.style.opacity = 0;
    response.textContent = 'Waiting Guess';
    revealNumber.textContent = '?';
    randomNumber = Math.trunc(Math.random() * 20 + 1);
});

// Comparing Function

const isNumberEqual = (input) => {
    if (input === randomNumber) {
        response.textContent = `You've Won!\nCongrats!`;
        highscore.textContent = score.textContent;
        revealNumber.textContent = randomNumber;
        revealNumber.style.color = '#09431E';
    } else if (input !== randomNumber) {
        if (score.textContent > 1) {
            response.textContent = `Wrong number, it was ${
                input > randomNumber ? 'lower' : 'higher'
            }!`;
            score.textContent--;
        } else {
            response.textContent = `You've lost..`;
            revealNumber.textContent = randomNumber;
            revealNumber.style.color = '#791515';
        }
    }
};
