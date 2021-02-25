'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeSecretNumber = function() {
  document.querySelector('.number').textContent = secretNumber;
}

const changeBackgroundColor = function(color) {
  document.querySelector('body').style.backgroundColor = color;
}

const changeNumberWidth = function(width) {
  document.querySelector('.number').style.width = width;
}

const changeHighscore = function() {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
}

const downScore = function() {
  score--;
  document.querySelector('.score').textContent = score;
}

 
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    changeSecretNumber();
    changeBackgroundColor("#60b347");
    changeNumberWidth('30rem');
    changeHighscore();

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {

      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      downScore();
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }


});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
});
