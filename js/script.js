var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, buttonPaper, buttonRock, buttonScissors;

function playGame(argMoveId) {

  function getMoveName(argMove) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMove);
    if (argMove == 1) {
      return 'kamien';
    } else if (argMove == 2) {
      return 'papier';
    } else if (argMove == 3) {
      return 'nozyce'
    } else {
      printMessage('Nie znam ruchu o id ' + argMove + '. Zakładam, że chodziło o "kamień".');
      return 'kamien';
    }
  }

  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  playerMove = getMoveName(argMoveId);
  console.log('Twój ruch to: ' + playerMove);

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

  displayResult(playerMove, computerMove);
}

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function () {
  clearMessages();
  playGame(1);
});

buttonPaper.addEventListener('click', function () {
  clearMessages();
  playGame(2);
});

buttonScissors.addEventListener('click', function () {
  clearMessages();
  playGame(3);
});