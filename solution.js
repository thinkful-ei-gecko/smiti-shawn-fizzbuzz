/* eslint-disable no-undef */
'use strict';

/**
 * @param {number} num 
 * @returns {*} Will return 'fizzbuzz'/'buzz'/'fizz' or the number
 */
function fizzbuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}
/**
 * Builds the HTML for the FizzBuzz output
 * @param {*} fizzResult Will be 'fizzbuzz'/'buzz'/'fizz' a number
 * @returns {string} Generates ONE fizzbuzz item
 */
function generateFizzHtml(fizzResult) {
  let fizzClass = '';
  if (typeof fizzResult === 'string') {
    fizzClass = fizzResult;
  }
  return `
      <div class="fizz-buzz-item ${fizzClass}">
        ${fizzResult}
      </div>
  `;
}
/**
 * Handles the form submission
 */
function handleSubmit() {
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    // clear user value
    $('#number-choice').val('');
    // capture results in an array
    const fizzBuzzResults = [];
    // push the result of the fizzbuzz function 
    // being run on the param: all numbers from 1
    // to the number entered in the form
    for (let i = 1; i <= countTo; i++) {
      fizzBuzzResults.push(fizzbuzz(i));
    }

    const html = fizzBuzzResults.map(result => generateFizzHtml(result));
    $('.js-results').html(html);
  });
}

$(handleSubmit);
