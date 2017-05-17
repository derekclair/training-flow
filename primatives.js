/* @flow */
/* eslint-disable */

/******************************************************************************/

var undef: void;

// console.log(typeof undef, undef);

/******************************************************************************/

var num: number = 1;

// console.log(typeof num, num);

/******************************************************************************/

var str: string = 'string';

// console.log(typeof str, str);

/******************************************************************************/

var obj: { [key: string]: any } = { key: 'value' };

// console.log(typeof obj, obj);

/******************************************************************************/

var array: (?any)[] = [1, 2, 3, 4]; // (!any)[] equivalent to Array<any>

// console.log(typeof array, array);

/******************************************************************************/

var date: Date = new Date();

// console.log(typeof date, date);

/******************************************************************************/

var func = function (argument: any): void {
  console.log('func() argument =', argument);
}

// console.log(typeof func, func);

func('string');

/******************************************************************************/

function namedFunc(argument: any): typeof any {
  console.log('namedFunc() argument =', argument);
  return typeof argument;
}

// console.log(typeof namedFunc, namedFunc);

namedFunc('string');

/******************************************************************************/

var err: Error = new Error('Error Message.');

// console.log(typeof err, err);

/******************************************************************************/

var symbol: Symbol = Symbol('foo');

// console.log(typeof symbol, symbol);

/******************************************************************************/

