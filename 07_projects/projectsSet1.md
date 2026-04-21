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
