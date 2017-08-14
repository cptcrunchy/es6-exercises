/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Array Destructuring');
/* coding examples */

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [a,m,j, ...restOfNames] = names;

log(`${a} ${m} ${j}`);
log(restOfNames);

