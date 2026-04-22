# Projects Related to DOM

## Project Link 

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1

```javascript
const button = document.querySelectorAll('.button');

// console.log(button);
const body = document.querySelector('body');

button.forEach(function (btn) {
  console.log(btn);
  // Adding Event Listner

  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // see in console after doing this we can see
    // how to fetch element , here we can see id as the colour
    // names so using them

    if (e.target.id === 'grey') {
      // body.style.backgroundColor = 'grey';
      body.style.backgroundColor = e.target.id; // same
    }
    if (e.target.id === 'white') {
      // body.style.backgroundColor = 'grey';
      body.style.backgroundColor = e.target.id; // same
    }
    if (e.target.id === 'blue') {
      // body.style.backgroundColor = 'grey';
      body.style.backgroundColor = e.target.id; // same
    }
    if (e.target.id === 'yellow') {
      // body.style.backgroundColor = 'grey';
      body.style.backgroundColor = e.target.id; // same
    }
  });
});

```

## Project 2

```javascript

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevents get and Post method in form
  // use this both inside the function
  // when event happens // writing outside is useless
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Give a Valid Height'; 
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Give a Valid Height';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## Project 3
```javascript
const clock = document.getElementById('clock');
// document.querySelector('#clock');

let date = new Date();

console.log(date.toLocaleTimeString());
// will display time in console when we refresh

// but we want live clock

// repeatdly call function at an interval
// make sure syntax is correct
setInterval(function () {
  let date = new Date();

  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);


```

## Project 4
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const paragraph = document.createElement('p'); // You named this 'paragraph'

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Valid Number');
  } else if (guess > 100) {
    alert('Please Enter Number Less Than 100');
  } else {
    prevGuess.push(guess);
    if (numOfGuess === 10) {
      // Changed to 10 so the 10th guess is the last
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOOO low');
  } else if (guess > randomNumber) {
    displayMessage('Number is Too High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numOfGuess++;
  remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  paragraph.classList.add('button'); // Fixed: changed 'p' to 'paragraph'
  paragraph.innerHTML = `<h2 id='newGame'>Start New Game</h2>`; // Fixed: changed 'p' to 'paragraph'
  startOver.appendChild(paragraph);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numOfGuess}`; // Added: reset the UI display
    lowOrHi.innerHTML = ''; // Added: clear the last message
    userInput.removeAttribute('disabled');
    startOver.removeChild(paragraph);
    playGame = true;
  });
}


```
