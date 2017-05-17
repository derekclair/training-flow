/* @flow */
/* eslint no-console: 0, no-var: 0, vars-on-top: 0 */

import type { CustomUser } from './class.js';

import UserClass from './class.js';
import { add, divide, stringify } from './functions.js';

// require('./primatives.js');


/******************************************************************************/

console.log('\n!!!SERVER RUNNING!!!\n');

/******************************************************************************/

// var a: string = '1'; // ERROR
// var a = 'string'; 		// ERROR

// var a: number = 1; 	// PASS
var a = 1; 					// PASS

console.log(
	add(a, 2, 3),
	divide(Math.PI, 2),
	stringify('add() => ', add(1, 2, 3)),
);


/******************************************************************************/

const user: UserClass<CustomUser> = new UserClass({
	id: 123,
	firstName: 'Jimbo',
	lastName: 'The GREAT',
});

user.setFavoriteColor('purple'); // Type Error

/******************************************************************************/
