 for (let bilangan = 1; bilangan < 51; bilangan++) {
        if (bilangan % 3 === 0 && bilangan % 5 === 0) {
            console.log("FizzBuzz");
        } else if (bilangan % 5 === 0) {
            console.log("Buzz");
        } else if (bilangan % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(bilangan);
        }
    }