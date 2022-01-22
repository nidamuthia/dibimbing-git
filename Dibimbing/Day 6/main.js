const _ = require('lodash');

// // // map array lodash
let num = [1, 2, 3, 4];

// num6 / array method js
// untuk memecah sebuah array
num.map(n => console.log(n));

console.log("-----------");

// // //lodash map
_.map(num, n => console.log(n));

// // // map obj lodash
let data = {
    nama: 'fiqri',
    umur: 15
}

data.map(n => console.log(n));

_.map(data, (value, prop) => console.log(prop + " : " + value));


let arr = [
    { n: 1 },
    { n: 2 }
];

// ES6
console.log('ES6', arr.map(x => x.n)); //dia harus memakai function lagi untuk mengakses key dalam object array arr

// lodash
console.log('lodash', _.map(arr, 'n')); // bisa langsung akses key dalam object tanpa menggunakan . lagi

let arr2 = [
    { a: [{ n: 1 }] },
    { a: [{ n: 2 }] }
];

//ES6
console.log(arr2.map((obj) => obj.a[0].n));
//lodash
console.log(_.map(arr2, 'a[0].n'));

// // lodash filter
let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

// // ES6
console.log(users.filter(user => user.active));

// //lodash
console.log(_.filter(users, 'active'));
console.log(_.filter(users, ['active', false]));
console.log(_.filter(users, { 'age': 36, 'active': true }));