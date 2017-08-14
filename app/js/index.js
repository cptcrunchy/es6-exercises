/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ES6 Promises');
/* coding examples */

const namesPromise = new Promise( (resolve, reject) => {
	setTimeout( () => {
		resolve(['jessica','jake','anna']);
	}, 3000);
	setTimeout( () => {
		reject("No data back from server, error encountered");
	}, 5000);

});

const surnamesPromise = new Promise( (resolve, reject) => {
	setTimeout( () => {
		resolve(['jones','taylor','smith']);
	}, 3000);
	setTimeout( () => {
		reject("No data back from server, error encountered");
	}, 5000);

});

Promise.all([namesPromise, surnamesPromise]).then(data => {
	const [names, surnames] = data;
	for(let i = 0; i < names.length; i++) {
		const name = names[i];
		const surname = surnames[i];
		log(`${name}, ${surname}`);
	}
}).catch(error => {
	log(error);
});