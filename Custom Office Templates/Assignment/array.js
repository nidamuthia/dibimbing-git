// let  car =  "Saab";
// let  car2 =  "Volvo";
// let  car3 =  "BMW";

let cars = ["Saab", "Volvo", "BMW", "Merci"];

console.log(cars[cars.length - 1]);

function showArray() {
    let array = [1, 2, 3];

    console.log(array[1]);
}

showArray();

// // // access element of array
console.log(cars[3]);

// Insert an element at the end of the array

console.log('before', cars);

cars.push("Tesla");

console.log('after push', cars);

// // Insert an element at the beginning of the array
cars.unshift("Lambo");

// // // Remove an element from the end of the array
cars.pop();

// // // Remove an element from the beginning of the array.
cars.shift();

console.log('after', cars);

// Determine
// if a value is an array
console.log(Array.isArray([]));

// Determine the size of an array
console.log(cars.length);

console.log(cars[cars.length - 1]);

console.log(cars.indexOf("Volvo"));

console.log(cars);