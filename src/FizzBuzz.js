class FizzBuzz {
    constructor() {
        this.results = [];
    }
    generate(start, stop) {
        for (let i = start; i <= stop; i++) {
            let process = {
                index: i,
                string: ''
            };
            if (i % 5 === 0) { // 5 ouputs Fizz
                if (i % 7 === 0) { // check if it's divisible by 5 & 7, output FizzBuzz
                    process.string = "FizzBuzz"
                    this.results.push(process);
                } else { // just 5
                    process.string = "Fizz"
                    this.results.push(process);
                }
            } else if (i % 7 == 0) { // 7 outputs Buzz
                process.string = "Buzz"
                this.results.push(process);
            } else { // no match, output FizzBuzz
                process.string = "FizzBuzz"
                this.results.push(process);
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
