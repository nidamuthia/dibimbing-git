let cars = ["Saab", "Volvo", "BMW"];


// // Creates a new array by performing a function on each array element
// cars.map(car => console.log(car, " Carss"));

// // creates a new array with all the elements that satisfies 
// // the condition mentioned in the function
let carFilter = cars.filter(car => {
    return car == "Volvo" || car == "BMW";
});

console.log(carFilter);

// console.log(cars);

// cars.forEach((car, i) => {
//     console.log(car + " " + i);
// })


// method returns a boolean value (true/false) based
//  on at least one element in the array passing the condition in the function
// let someIsVolvo = cars.some(car => {
//     return car == "Volvo";
// });

// console.log(someIsVolvo);

// // method detects if every element of
// // the array satisfies the condition passed in the function
// let allIsVolvo = cars.every(car => {
//     return car != "";
// });

// console.log(allIsVolvo);

// console.log(cars);

// Studi Kasus

// let animals = ['frog', 'lion', 'butterfly'];

// // Dari array di atas, pecahkan masalah di bawah ini
// // 1. tampilkanlah semua isi dalam array
// // 2. tampilkan animals jika animal adalah lion
// // 3. cek apakah ada animals frog atau tidak

// //1
// animals.map(animal => {
//     console.log(animal);
// });

// // 2
// let animalFilter = animals.filter(animal => {
//     return animal === 'lion';
// });

// console.log(animalFilter);

// // 3
// let someIsFrog = animals.some(animals => {
//     return animals === "frog";
// });

// console.log(someIsFrog);