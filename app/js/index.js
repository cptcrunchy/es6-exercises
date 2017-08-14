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

  static iAmAstaticMethod() {
  	log('I am a static method inside of Animal class');
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

class Dog extends Animal{
	constructor(name, age,breed) {
		super(name, age)
		this.breed = breed;
	}

	logBreed() {
		log(`${this.name} is a ${this.breed}`);
	}
	logAgeFromDog() {
		super.logAge();
	}
}

//
// const mike = new Dog("Mike", 4,"Dacshund");
// mike.logBreed();
// mike.logAgeFromDog();


Animal.iAmAstaticMethod();

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

// log('---------------');
//
// const marshall = new Animal("marshall", 3);
// marshall.eat();
// marshall.sleep();
// marshall.wakeUp();
// marshall.logAge();