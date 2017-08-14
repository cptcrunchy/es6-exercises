/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Enhanced Object Properties');
/* coding examples */

const pricePropName = "PRICE";

const calc = (name, price) => {
  return {
     name,
     add(n1,n2) {
       return n1 + n2;
     },
     [pricePropName.toLowerCase()] : price
  }
}

const cal = calc('casio', 19.99);

log(cal.name);
log(cal.add(30,20));
log(cal.price);