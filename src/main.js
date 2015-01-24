import {FizzBuzz} from './FizzBuzz';
import {NumSum} from './NumSum';
import {Dictionary} from './Dictionary';

var fizzBuzz = new FizzBuzz();
fizzBuzz.generate(1, 100);
// fizzBuzz.iterate() // prints the result to console


var numSum = new NumSum();
numSum.compute(17);
// console.log(numSum.sum); // prints the result to console

var dictionary = new Dictionary();
dictionary.findPalindromes(20);
dictionary.findAnagrams(20);
console.log(dictionary);
