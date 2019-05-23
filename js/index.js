'use strict';

var paper = 1;
var rock = 2;
var scissors = 3;
var computerScore = 0;
var userScore = 0;
var roundNumber = 0;
var newGameButton = document.getElementById('newGame');
var output = document.getElementById('output');
var result = document.getElementById('result');
var buttonPaper = document.getElementById('paper');
var buttonRock = document.getElementById('rock');
var buttonScissors = document.getElementById('scissors');
var buttonReset = document.getElementById('reset');
var roundsToWin;
var parsedNumber;

var buttonsDisabled = function () {

  buttonPaper.disabled = true;
  buttonRock.disabled = true;
  buttonScissors.disabled = true;
  buttonPaper.classList.add('grey');
  buttonRock.classList.add('grey');
  buttonScissors.classList.add('grey');
  
};

var buttonsEnabled = function() {
  
  buttonPaper.disabled = false;
  buttonRock.disabled = false;
  buttonScissors.disabled = false;
  buttonPaper.classList.remove('grey');
  buttonRock.classList.remove('grey');
  buttonScissors.classList.remove('grey');
};

var resetThis = function() {
  output.innerHTML = "";
  result.innerHTML = "";
  thisGame.innerHTML = "";
  roundNumber = 0;
  userScore = 0;
  computerScore = 0;
  roundsToWin = 0;
  parsedNumber = 0;
  buttonsDisabled();
}

var drawNum = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var addText = function(text, target) {
  target.innerHTML = text + '<br>' + target.innerHTML;
  };

var addToScore = function(player) {
  // console.log(window);
  window[player]++;
  addText(userScore + ':' + computerScore, result);
  roundNumber++;
  
  if (userScore == parsedNumber) {
    addText('You WON the entire game!', thisGame);
    buttonsDisabled();
  }  
  
  if (computerScore == parsedNumber) {
    addText('You LOST', thisGame);
    buttonsDisabled();
  }
};

var playPaper = function() {
  
  var drawNumReturn = drawNum(1, 3);
  
  if (drawNumReturn == rock) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked PAPER<br> Computer picked ROCK<br> Result: You WON <br><br>');
    addToScore('userScore');
  }
  
  if (drawNumReturn == scissors) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked PAPER<br> Computer picked SCISSORS<br> Result: You LOST <br><br>');
    addToScore('computerScore');
  }
  
  else {
    output.insertAdjacentHTML('afterBegin', 'YOU picked PAPER<br> Computer picked PAPER<br> Result: DRAW <br><br>');
  }
};

var playRock = function() {
  
  var drawNumReturn = drawNum(1, 3);
  
  if (drawNumReturn == scissors) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked ROCK<br> Computer picked SCISSORS<br> Result: You WON <br><br>');
    addToScore('userScore');
  }
  
  if (drawNumReturn == paper) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked ROCK<br> Computer picked PAPER<br> Result: You LOST <br><br>');
    addToScore('computerScore');
  }
  
  else {
    output.insertAdjacentHTML('afterBegin', 'YOU picked ROCK<br> Computer picked SCISSORS<br> Result: DRAW <br><br>');
  }
};

var playScissors = function() {
  
  var drawNumReturn = drawNum(1, 3);
  
  if (drawNumReturn == paper) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked SCISSORS<br> Computer picked PAPER<br> Result: You WON <br><br>');
    addToScore('userScore');
  }
  
  if (drawNumReturn == rock) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked SCISSORS<br> Computer picked ROCK<br> Result: You LOST <br><br>');
    addToScore('computerScore');
  }
  
  else {
    output.insertAdjacentHTML('afterBegin', 'YOU picked SCISSORS<br> Computer picked SCISSORS<br> Result: DRAW <br><br>');
  }
};

var finalResult = function () {
  
  if (userScore == parsedNumber) {
    addText('you WON', thisGame);
  }
  
  if (computerScore == parsedNumber) {
    thisGame.insertAdjacentHTML('afterBegin', 'You LOST', thisGame);
  }
};

buttonsDisabled();
buttonReset.addEventListener('click', resetThis);
buttonPaper.addEventListener('click', playPaper);
buttonRock.addEventListener('click', playRock);
buttonScissors.addEventListener('click', playScissors);
newGameButton.addEventListener('click', function () {
  resetThis();
  buttonsEnabled();
  roundsToWin = prompt('How many rounds you want to play?');
  parsedNumber = parseInt(roundsToWin, 10);
   if (isNaN(roundsToWin)) {
    return thisGame.insertAdjacentHTML('afterBegin', 'error<br>');
   };
  thisGame.insertAdjacentHTML('afterBegin', 'You have to win ' + roundsToWin + ' rounds to succeed<br>');
  thisGame.insertAdjacentHTML('afterBegin', typeof(parsedNumber) + '<br>');

});