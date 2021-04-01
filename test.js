'use strict';

//example event handler below
function handleFormSubmitted(event) {
  event.preventDefault();
  console.log('submitted');
}

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', handleFormSubmitted);

//arrow function event handler below
myForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('submitted');
});

//line 19 and 20: creates a variable named nameEl and nameHeadeEl that contains the value of the "name" and "nameHeader" property in html.
const nameEl = document.getElementById('name');
const nameHeaderEl = document.getElementById('nameHeader');
//line 22: creates an event listener and attaches it to the "nameEl" variable. The event listener is using 'input' which is a property of the listener that tracks every change made inside the text field on a form.
nameEl.addEventListener('input', event => {
  nameHeaderEl.innerText = `Welcome, ${event.target.value}!`;
});

myForm.addEventListener('submit', handleFormSubmitted);

let nums = [5, 3, 9, 2, 1];
let results = nums.map(num => num * 3); //map prototype displays the results of a function in a new array that touches all elements or indexes from the origin array
console.log(results);