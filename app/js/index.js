/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
import {coroutine as co} from 'bluebird';
logTitle('Generators & Promises');

// const getRandomUsers = n => {
//   const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
//   fetchRandomUsers.then(data => {
//     data.json().then(randomUsers => {
//       log(JSON.stringify(randomUsers.results.length));
//       randomUsers.results.forEach(user => {
//         const {gender, email} = user;
//         log(`${gender} - ${email}`);
//       });
//     })
//   });
// }

// getRandomUsers(100);

const getRandomUsers = co(function* (n) {
	const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`)
	const data = yield fetchRandomUsers.json();
	return data;
});

getRandomUsers(10).then(randomUsers => {
	randomUsers.results.forEach(user => {
		const {gender, email} = user;
		log(`${gender} - ${email}`);
	});
}).catch(err => log);