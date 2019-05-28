'use strict';

var paper = 1;
var rock = 2;
var scissors = 3;
// var computerScore = 0;
// var userScore = 0;
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

var param = {
  computerScore: 0,
  userScore: 0
};

// var params = {
//   parsedNumber: '',
//   roundsToWin: '',
//   paper: 1,
//   rock: 2,
//   scissors: 3,
//   computerScore: 0,
//   userScore: 0,
//   roundNumber: 0
// };

var resetThis = function() {
  output.innerHTML = "";
  result.innerHTML = "";
  thisGame.innerHTML = "";
  roundNumber = 0;
  param.userScore = 0;
  param.computerScore = 0;
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
  //console.log(window);
  window[player]++;
  addText(param['userScore'] + ':' + param['computerScore'], result);
  roundNumber++;
  
  if (param.userScore == parsedNumber) {
    addText('You WON the entire game!', thisGame);
    buttonsDisabled();
  }  
  
  if (param.computerScore == parsedNumber) {
    addText('You LOST', thisGame);
    buttonsDisabled();
  }
};

var playPaper = function() {
  
  var drawNumReturn = drawNum(1, 3);
  
  if (drawNumReturn == rock) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked PAPER<br> Computer picked ROCK<br> Result: You WON <br><br>');
    addToScore(param['userScore']);
  }
  
  if (drawNumReturn == scissors) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked PAPER<br> Computer picked SCISSORS<br> Result: You LOST <br><br>');
    addToScore(param['computerScore']);
  }
  
  else {
    output.insertAdjacentHTML('afterBegin', 'YOU picked PAPER<br> Computer picked PAPER<br> Result: DRAW <br><br>');
  }
};

var playRock = function() {
  
  var drawNumReturn = drawNum(1, 3);
  
  if (drawNumReturn == scissors) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked ROCK<br> Computer picked SCISSORS<br> Result: You WON <br><br>');
    addToScore(param['userScore']);
  }
  
  if (drawNumReturn == paper) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked ROCK<br> Computer picked PAPER<br> Result: You LOST <br><br>');
    addToScore(param['computerScore']);
  }
  
  else {
    output.insertAdjacentHTML('afterBegin', 'YOU picked ROCK<br> Computer picked SCISSORS<br> Result: DRAW <br><br>');
  }
};

var playScissors = function() {
  
  var drawNumReturn = drawNum(1, 3);
  
  if (drawNumReturn == paper) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked SCISSORS<br> Computer picked PAPER<br> Result: You WON <br><br>');
    addToScore(param['userScore']);
  }
  
  if (drawNumReturn == rock) {
    output.insertAdjacentHTML('afterBegin', 'YOU picked SCISSORS<br> Computer picked ROCK<br> Result: You LOST <br><br>');
    addToScore(param['computerScore']);
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

var selectButton = function(event) {
  document.querySelector(event.target.id);
  if (event.target.id == 'paper'){
    playPaper();
    return;
  }
  if (event.target.id == 'rock'){
    playRock();
    return;
  } else {
    playScissors();
  }
};

var yourMove = function() {
var gameButtons = document.querySelectorAll('.player-move');
for (var i = 0; i < gameButtons.length; i++) {
  console.log(event);
  gameButtons[i].addEventListener('click', selectButton);
}
};

buttonsDisabled();
buttonReset.addEventListener('click', resetThis);
yourMove();
// buttonPaper.addEventListener('click', playPaper);
// buttonRock.addEventListener('click', playRock);
// buttonScissors.addEventListener('click', playScissors);
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