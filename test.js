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

