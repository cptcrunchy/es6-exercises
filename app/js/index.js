/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ECMAScript 2015');
/* coding examples */
const arrayOne = ['James', 'Jenny', 'Jessica', 'Jerry'];
const arrayTwo = ['Oscar', 'Marissa', 'Chey', 'Dorothy'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
  log(name);
});

const name = 'Mario';
const nameToArray = [...name];
nameToArray.forEach(function(letter){
  log(letter);
});

const addNumbers = function(n1,n2,n3) {
  return n1+n2+n3;
}

const numbers = [1,5,19];

// const addition = addNumbers(numbers[0], numbers[1], number[2]);
const addition = addNumbers(...numbers);

log(addition);