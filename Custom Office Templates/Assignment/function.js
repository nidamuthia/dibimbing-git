// deklarasi sebuah function
// function showName(name) {
//     console.log("My Name Is ", name);
// }

// showName("Fiqri");

// function withoutParam() {
//     console.log("This Is function Without param");
// }

// withoutParam();

// // function yang tidak mengembalikan nilai
// console.log("Chat App");

// function showMessage(from, text) {
//     console.log(from.toUpperCase() + ': ' + text);
// }

// showMessage('Ann', "Hello");
// showMessage('Jeanni', "Hello Ann");
// showMessage('Ann', "How Are You?");
// showMessage('Jeanni', "Im Fine");

// function yang mengembalikan nilai
// function sum(a, b) {
//     return a + b;
// }

// function substract(c, d) {
//     console.log(c - d);
//     return c - d;
// }

// let num1 = sum(10, 100); // 110
// let num2 = sum(20, 10); // 30

// substract(num1, num2); // 80

// console.log("Result = ", result);


// callback
// memasukan function lain ke dalam parameter function tertentu
function ask(question, yes, no) {
    confirm(question) ? yes() : no();
}

let showOk = () => alert('You Agreeed.');


function showCancel() {
    alert('You Canceled the Excecution.');
}


// ask('Do you agree?', showOk, showCancel);

// function sum(a, b) {
//     return a + b;
// }

// arrow function
// penyederhanaan penulisan sebuah function
// let sum = (num1, num2) => num1 + num2;

// console.log(sum(1, 100));
// console.log(sum(2, 100));
// console.log(sum(3, 100));
// console.log(sum(4, 100));

// let showStr = str => console.log(str);
// showStr("tampil string");