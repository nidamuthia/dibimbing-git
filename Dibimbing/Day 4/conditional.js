// Case : age clasification


// // if : hanya untuk satu kondisi saja
// console.log(age <= 10);

// let name = 'Niko';
// let age = 12;

// if (name == 'Fiqri') {
//   if (age >= 18) {
//     console.log("This Is Fiqri");
//   } else {
//     console.log("Another");
//   }
// } else {
//   console.log("Who Am i?");
// }


// // if else : hanya untuk dua kondisi saja
// console.log("The condition is : ", age <= 10);
// if (age <= 10) { // true
//     console.log('kids');
// } else {
//     console.log("Adults");
// }

// // else if : bisa untuk lebih dari dua kondisi

// let age = 10;

// if (age < 10) { 
//     console.log("Kids");
// } else if (age > 10 && age <= 30) {
//     console.log("Adults");
// } else {
//     console.log("Olds");
// }

// let name = 'Niko';
// let age = 12;

// if (name == 'Fiqri') {
//   if (age >= 18) {
//     console.log("This Is Fiqri");
//   } else {
//     console.log("Another");
//   }
// } else {
//   console.log("Who Am i?");
// }

// // ternary operators
//voteable case

// let voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable);

// let name = 'Fiqri';
// let age = 19;

// (name == 'Fiqri') ?
//   (age < 18) ? console.log("Fiqri Too young") : console.log("Fiqri Old enough")
//   : console.log('another');

let ketNilai;
let nilai = 30;
let ketNilai;

// note = pointing atau patokan untuk perbandingan
switch (false) {
  case nilai >= 20 && nilai <= 50:
    ketNilai = "D";
    break;
}

console.log("Nilai = ", ketNilai);

let day;
console.log("day : ", new Date().getDay());

switch (2) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("The Day Is : ", day);