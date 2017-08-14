/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ECMAScript 2015');
/* coding examples */
const address = {
  city: 'SA',
  country: 'USA',
  postCode: 'SATX'
};

const name = {
  firstName: 'Jason',
  lastName: 'Gutierrez'
};

const person = {...address, ...name};

log(JSON.stringify(person, null, 2));