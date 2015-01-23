// find and print the first 20 (by any sorting method you wish) words that are anagrams of each other
// e.g. “dog” is an anagram of “god”
import {
    words
}
from './helpers/words';

class Dictionary {
    constructor() {
        this.palindromes = [];
        this.anagrams = [];
    }
    findPalindromes(limit) {
        var gen = wordsIterator();
        while (this.palindromes.length < limit) {
            this.palindromes.push(gen.next().value);
        }

        function* wordsIterator() {
            for (let word of words) {
                if (word.length > 3) {
                    if (word.split('').reverse().join('') === word) {
                        yield word;
                    }
                }
            }
        }
    }
    findAnagrams(limit) {
        for (var i = 0; i < words.length; i++) {
            if (this.anagrams.length === limit) {
                i = words.length;
                return;
            };
            var word = words[i];
            var anagram = word.split('').reverse().join(''); // reverse the word
            for (var ii = i; ii < words.length; ii++) { // start from last found anagram
                if (this.anagrams.length === limit) return;
                if (words[ii] === anagram) {
                    this.anagrams.push({
                        word: word,
                        match: words[ii]
                    })
                }
            }
        }
    }
}

export {
    Dictionary
}
