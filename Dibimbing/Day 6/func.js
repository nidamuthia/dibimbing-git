function showName(name) {
    console.log("My name is", name)
}
showName("Nida");

function sum(a, b) {
    return a + b;
}
function nida(c, d) {
    return c - d;
}

let aku = nida(10, 3)
console.log(aku);

function ask(question, yes, no) {
    confirm(question) ? yes() : no();
}
function showOk() {
    alert('You agreed.');
}
function showCancel() {
    alert('You cancel the Excecution');
}

let sum2 = (num1,num2) => num1 + num2;
console.log (sum(1,100));

let showStr = str => console.log (str);
showStr("tampil String");
