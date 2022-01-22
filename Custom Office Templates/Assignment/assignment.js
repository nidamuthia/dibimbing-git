const _ = require('lodash');

let users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Doe", age: 28, gender: "male" },
]

//first Name user
let nama=_.map(users, 'firstName')
console.log(nama);

//filter ageGender
// const newData3=users.filter(ageGenderfilter =>(ageGenderfilter.age <30 && ageGenderfilter.gender === "male"));
// console.log(newData3);
A
//lodash
let user=_.filter(users, (ageGenderfilter) =>  ageGenderfilter.age < 30 && ageGenderfilter.gender === "male");
console.log (user);
// const newData4=users.filter(indexFilter =>(indexFilter.firstName.charAt(0) == "J" ));
// // console.log(newData4);
// let user2=_.filter(users,  function (indexfilter) {
//     return  indexfilter.firstName.charAt(0) === "male"});
let user2=_.filter(users, (indexfilter) =>  indexfilter.firstName.charAt(0) === "J");
console.log (user2); 


// console.log (user2);
//filter index of LastName
// const newData5=users.filter(indexFilterlast =>(indexFilterlast.lastName.charAt(0) == "D" ));
// console.log(newData5);



