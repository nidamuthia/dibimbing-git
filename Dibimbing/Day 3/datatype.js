
newFunction();
function newFunction() {
    let str = "Hello";
    let str2 = ` Single quote are ok too`;
    let phrase = `can embed ${str}`;
    console.log(phrase);
    console.log(typeof (phrase));
    console.log(str + str2);
    let nameFieldchecked = true;
    let ageFieldchecked = false;

    ageFieldchecked = true;
    nameFieldchecked = ageFieldchecked;
    nameFieldchecked = false;
    console.log(nameFieldchecked);
    let email = "nida.muthia@gmail.com";
    let password = "abcd";
    let isLoginSuccess = false;
    if (email == "nida.muthia@gmail.com" && "abcd") {
        isLoginSuccess = true;
    }
    console.log(isLoginSuccess);
}

