// a function that will count from 1 to 100, and for each count
// if the number is an even multiple of 5 output “Fizz”
// if a multiple of 7 output “Buzz”, otherwise output "FizzBuzz"

class FizzBuzz {
    constructor() {
        this.results = [];
    }
    generate(start, stop) {
        for (let i = start; i <= stop; i++) {
            let currResult = {
                index: i,
                string: ''
            };
            if (i % 5 === 0) {
                if (i % 7 === 0) { // check if it's divisible by 5 & 7, output FizzBuzz
                    currResult.string = "FizzBuzz"
                    this.results.push(currResult);
                } else {
                    currResult.string = "Fizz"
                    this.results.push(currResult);
                }
            } else if (i % 7 == 0) {
                currResult.string = "Buzz"
                this.results.push(currResult);
            } else { // no match, output FizzBuzz
                currResult.string = "FizzBuzz"
                this.results.push(currResult);
            }
        }
        return this.results;
    }
    iterate() {
        this.results.forEach((value, index) => {
            console.log(value.index, value.string)
        })
    }
}

export {
    FizzBuzz
}
