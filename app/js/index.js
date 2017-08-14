/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ES6 Classes');
/* coding examples */

class Animal {
  constructor(name, age) {
    log(`${name} is an animal and was created`);
    this.name = name;
    this.age = age;
  }

  eat() {
    log(`${this.name} is eating`);
  }

  sleep(){
    log(`${this.name} is sleeping`);
  }

  wakeUp(){
    log(`${this.name} is waking up`);
  }

  logAge(){
    log(`${this.name} is ${this.age} years old`);
  }
}

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

log('---------------');

const marshall = new Animal("marshall", 3);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.logAge();


