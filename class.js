/* @flow */
/* eslint no-console: 0 */

import type { User } from './types.js.flow';

type Colors = 'blue' | 'red' | 'green' | 'pink';

export type CustomUser = User & {
	favoriteColor?: Colors,
};

export default class UserClass<T> {
	user: User;

	constructor(user: T) {
		this.user = user;

		console.log('\nnew UserClass() =>\nuser:', this.user, '\n');
	}

	setFavoriteColor(color: Colors): void {
		this.user = {
			...this.user,
			favoriteColor: color,
		};

		console.log('setFavoriteColor() =>\ncolor:', color, '\nuser:', this.user, '\n');
	}
}
