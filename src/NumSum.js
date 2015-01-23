// a function that will take a number as input, raise 2 to the power of the inputted number, and
// print out the sum of the digits of the result.

class NumSum {
    constructor() {
        this.sum = 0;
    }
    compute(number) {
        let power = Math.pow(2, number);
        let individualNumbers = power.toString(10).split("").map(t => parseInt(t));
        this.sum = 0;
        for (let number of individualNumbers) {
            this.sum += number;
        }
    }
}

export {
    NumSum
}
