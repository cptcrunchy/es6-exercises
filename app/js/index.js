/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ECMAScript 2015');
/* coding examples */
const name = 'Jason';
const city = 'San Antonio';
const age = 33;

log("Name: " + name + " City: " + city + " Age: " + age);
log(`Name: ${name} City: ${city} Age: ${age}`);