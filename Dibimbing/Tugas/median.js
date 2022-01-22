// Median number 1
let number1 = [3, 5, 6, 8, 9];
number1.sort(function (a, b) { return a - b });
n = (number1.length + 1) / 2;
m = (number1.length / 2);
//untuk array genap
if (number1.length % 2 == 0) {
    console.log(number1[m - 1]);
}
//untuk array ganjil
else {
    console.log(number1[n - 1])
};

// Median number 2
let number2 = [1, 3, 5, 7];
number2.sort(function (a, b) { return a - b });
n = (number2.length + 1) / 2;
m = (number2.length / 2);
//untuk array genap
if (number2.length % 2 == 0) {
    console.log(number2[m - 1]);
}
//untuk array ganjil
else {
    console.log(number1[n - 1])
};