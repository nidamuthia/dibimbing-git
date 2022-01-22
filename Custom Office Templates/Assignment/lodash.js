const _ = require('lodash');

let users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
]

//first Name user
let nama = _.map(users, 'firstName')
console.log(nama);

//ageGenderfilter
let user = _.filter(users, (ageGenderfilter) => ageGenderfilter.age < 30 && ageGenderfilter.gender === "male");
console.log(user);

//filter index of firstName
let user2 = _.filter(users, (indexfilterfirst) => indexfilterfirst.firstName.charAt(0) === "J");
console.log(user2);


//filter index of LastName
let user3 = _.filter(users, (indexfilterlast) => indexfilterlast.lastName.charAt(0) === "D");
console.log(user3);













