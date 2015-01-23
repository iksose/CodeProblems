// find and print the first 20 (by any sorting method you wish) words that are anagrams of each other
// e.g. “dog” is an anagram of “god”
import {
    words
}
from './helpers/words';

class Anagram {
    constructor() {
        this.results = [];
    }
    find(limit) {
        var gen = wordsIterator();
        while (this.results.length < limit) {
            this.results.push(gen.next().value);
        }

        function* wordsIterator() {
            for (let word of words) {
                if (word.split('').reverse().join('') === word) {
                    yield word;
                }
            }
        }
    }
}

export {
    Anagram
}
