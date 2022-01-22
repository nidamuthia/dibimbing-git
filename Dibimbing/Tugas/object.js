//let user = new Object ();
let user = {
    name: "John",
    age: "30",
    isAdmin: true,
    hobbies: ["football", "basket", "coding", {}]
}
let {name}= user
console.log(user);
console.log(user.age);

for (let prop in user) {
    console.log(prop + ":" + user[prop])
}