function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}


var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, buttonPaper, buttonRock, buttonScissors;

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamien';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nozyce'
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamien';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamien') {
    printMessage('Wygrywasz!');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
  buttonClicked('kamien');
});
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier');
});
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
  buttonClicked('nozyce');
});