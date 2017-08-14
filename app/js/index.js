/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Lexical this');
/* coding examples */

const person = {
  name: 'Alex',
  cars: ['ferrari', 'lambo'],
  toString: function() {
    // log(`${this.name} has a ${this.cars}`)
    this.cars.forEach(car => {
      log(`${this.name} has ${car}`);
    })
  }
}

person.toString();
