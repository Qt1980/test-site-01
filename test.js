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

myForm.addEventListener('submit', handleFormSubmitted);

let nums = [5, 3, 9, 2, 1];
let results = nums.map(num => num * 3);
console.log(results);