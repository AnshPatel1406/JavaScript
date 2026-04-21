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



```
