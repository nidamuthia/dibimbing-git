for (let bilangan = 1; bilangan < 16; bilangan++) {
    if (bilangan % 3 === 0 && bilangan % 5 === 0) {
        console.log("hipHura");
    } else if (bilangan % 5 === 0) {
        console.log("Hura");
    } else if (bilangan % 3 === 0) {
        console.log("hip");
    }
    else {
        console.log(bilangan);
    }
}