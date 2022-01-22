function printFobonacciNumbers(n) {
    var firstNumber = 0,
        secondNumber = 1,        
        fibNumbers = [];
    if (n <= 0) {
        return fibNumbers;
    }
    if (n === 1) {
        return fibNumbers.Push(firstNumber);
    }
   
    fibNumbers[0] = firstNumber;
    fibNumbers[1] = secondNumber;
    for (var i = 2; i <= n; i++) {
        fibNumbers[i] = fibNumbers[(i - 1)] + fibNumbers[(i - 2)];
    }
    return fibNumbers;
}

var result = printFobonacciNumbers(19);
if (result) {
    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}