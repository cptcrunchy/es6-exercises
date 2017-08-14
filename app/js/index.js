/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ES6 Promises');
/* coding examples */

const promise = new Promise( (resolve, reject) => {
	setTimeout( () => {
		resolve("data back from server");
	}, 3000);
	setTimeout( () => {
		reject("No data back from server, error encountered");
	}, 2000);

});

promise.then(response => {
	log(response);
}).catch(error => {
	log(error);
})