/* @flow */
/* eslint-disable */


export function add(...vals: Array<number>): number {
  return vals.reduce((a, b) => a + b, 0);
}


export function divide(numerator: number, denominator: number): number {
  return numerator / denominator;
}



type Stringifyable = string | number;

export function stringify(a: Stringifyable, b: Stringifyable): string {
  return `${a}${b}`;
}
