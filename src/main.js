import {
    FizzBuzz
}
from './FizzBuzz';

import {
    NumSum
}
from './NumSum';

import {
    Anagram
}
from './Anagrams';

var fizzBuzz = new FizzBuzz();
fizzBuzz.generate(1, 100);
// fizzBuzz.iterate() // prints the result to console


var numSum = new NumSum();
numSum.compute(17);
// console.log(numSum.sum); // prints the result to console

var anagram = new Anagram();
anagram.find(20);
console.log(anagram);
