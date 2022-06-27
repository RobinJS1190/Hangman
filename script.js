'use strict';

let randomWord;
const word1 = 'rainbow';
const word2 = 'computer';
const word3 = 'guitar';
let loseCounter = 0;
let winCounter = 0;
let saveLetter = [];
document.querySelector('.btn--go').classList.add('hidden');

// let letterEl0 = document.querySelector('.letter-pos0');
// let letterEl1 = document.querySelector('.letter-pos1');
// let letterEl2 = document.querySelector('.letter-pos2');
// let letterEl3 = document.querySelector('.letter-pos3');
// let letterEl4 = document.querySelector('.letter-pos4');
// let letterEl5 = document.querySelector('.letter-pos5');
// let letterEl6 = document.querySelector('.letter-pos6');
// let letterEl7 = document.querySelector('.letter-pos7');
// let letterEl8 = document.querySelector('.letter-pos8');
// let letterEl9 = document.querySelector('.letter-pos9');

// const hangmanEl0 = document.querySelector('.hangman0');
// const hangmanEl1 = document.querySelector('.hangman1');
// const hangmanEl2 = document.querySelector('.hangman2');
// const hangmanEl3 = document.querySelector('.hangman3');
// const hangmanEl4 = document.querySelector('.hangman4');
// const hangmanEl5 = document.querySelector('.hangman5');
// const hangmanEl6 = document.querySelector('.hangman6');

const displayMessage = function (message) {
  document.querySelector('.guessheading').textContent = message;
};

const hideHangman = function () {
  for (let i = 0; i <= 6; i++) {
    document.querySelector(`.hangman${i}`).classList.add('hidden');
  }
};

const hideLetter = function () {
  for (let i = 0; i <= 9; i++) {
    document.querySelector(`.letter-pos${i}`).classList.add('hidden');
  }
};

//New Game button
document.querySelector('.btn--new').addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    randomWord = word1;
  } else if (randomNumber === 2) {
    randomWord = word2;
  } else if (randomNumber === 3) {
    randomWord = word3;
  }

  hideHangman();
  hideLetter();
  loseCounter = 0;
  winCounter = 0;
  saveLetter = [];
  displayMessage('Guess a letter');
  document.querySelector('.btn--go').classList.remove('hidden');
  document.querySelector('.cloud').classList.remove('hidden');
  document.querySelector('.cloud2').classList.remove('hidden');
  document.querySelector('.sun').classList.remove('hidden');

  for (let i = 0; i <= randomWord.length; i++) {
    document.querySelector(`.letter-pos${i}`).textContent = String(
      randomWord[i]
    );
  }
});
//Go button
document.querySelector('.btn--go').addEventListener('click', function () {
  const guess = String(document.querySelector('.guess').value);
  console.log(randomWord);
  let letterCount = 0;
  displayMessage('Guess a letter');

  const checkLetter = function (word, input) {
    for (let i = 0; i <= word.length; i++) {
      if (word[i] === input) {
        letterCount = letterCount + 1;
        return letterCount;
      }
    }
  };

  checkLetter(randomWord, guess);

  //When guess is no letter
  if (
    guess !== 'a' &&
    guess !== 'b' &&
    guess !== 'c' &&
    guess !== 'd' &&
    guess !== 'e' &&
    guess !== 'f' &&
    guess !== 'g' &&
    guess !== 'h' &&
    guess !== 'i' &&
    guess !== 'j' &&
    guess !== 'k' &&
    guess !== 'l' &&
    guess !== 'm' &&
    guess !== 'n' &&
    guess !== 'o' &&
    guess !== 'p' &&
    guess !== 'q' &&
    guess !== 'r' &&
    guess !== 's' &&
    guess !== 't' &&
    guess !== 'u' &&
    guess !== 'v' &&
    guess !== 'w' &&
    guess !== 'x' &&
    guess !== 'y' &&
    guess !== 'z'
  ) {
    displayMessage('Insert a letter!');
  }
  //Wenn guess is already guessed
  else if (saveLetter.includes(guess)) {
    displayMessage(`Already guessed a "${guess}", try another letter!`);
  }
  //When guess is a letter
  else {
    //When guess is correct
    if (letterCount > 0) {
      for (let i = 0; i <= randomWord.length; i++) {
        if (randomWord[i] === String(guess)) {
          document.querySelector(`.letter-pos${i}`).classList.remove('hidden');
          letterCount = 0;
          winCounter = winCounter + 1;
          console.log(winCounter);
        }
      }
      saveLetter.push(guess);
      console.log(saveLetter);
      //If Word is complete
      if (winCounter === randomWord.length) {
        document.querySelector('.guessheading').style.fontSize = '4rem';
        displayMessage('You win!');
        document.querySelector('.btn--go').classList.add('hidden');
        document.querySelector('.cloud').classList.add('hidden');
        document.querySelector('.cloud2').classList.add('hidden');
      }
    }
    //When guess if false
    else {
      letterCount = 0;
      if (loseCounter === 6) {
        displayMessage('You loose!');
        document.querySelector('.guessheading').style.fontSize = '4rem';
        document.querySelector('.sun').classList.add('hidden');
        document.querySelector('.btn--go').classList.add('hidden');
        document.querySelector('.hangman6').classList.remove('hidden');
      } else if (loseCounter === 0) {
        loseCounter = loseCounter + 1;
        document.querySelector('.hangman0').classList.remove('hidden');
      } else if (loseCounter === 1) {
        loseCounter = loseCounter + 1;
        document.querySelector('.hangman1').classList.remove('hidden');
      } else if (loseCounter === 2) {
        loseCounter = loseCounter + 1;
        document.querySelector('.hangman2').classList.remove('hidden');
      } else if (loseCounter === 3) {
        loseCounter = loseCounter + 1;
        document.querySelector('.hangman3').classList.remove('hidden');
      } else if (loseCounter === 4) {
        loseCounter = loseCounter + 1;
        document.querySelector('.hangman4').classList.remove('hidden');
      } else if (loseCounter === 5) {
        loseCounter = loseCounter + 1;
        document.querySelector('.hangman5').classList.remove('hidden');
      }
    }
  }
});
