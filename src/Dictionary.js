import {
    words
}
from './helpers/words';

class Dictionary {
    constructor() {
        this.palindromes = [];
        this.anagrams = [];
    };
    findPalindromes(limit) {
        //finds the first N palindromes of more than 3 characters (if any.)
        //A palindrome is a word spelled the same way forwards and backwards, e.g. ere or bob
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
    };
    findAnagrams(limit) {
        // finds and print the first N words that are anagrams of each other
        // e.g. “dog” is an anagram of “god”
        for (let i = 0; i < words.length; i++) {
            if (this.anagrams.length === limit) break;
            var word = words[i];
            var anagram = word.split('').reverse().join('');
            for (let ii = i + 1; ii < words.length; ii++) { // start from the next word;
                if (this.anagrams.length === limit) break;
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
