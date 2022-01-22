class Car {
    constructor(name, year, price) {
        this.name = name;
        this.year = year;
        this.price = price;
    }

    //setter
    setName(name) {
        this.name = name;
    }


    //getter
    getName() {
        return this.name;
    }

}


let mazda = new Car("Mazda", 2000, 100000);
console.log(mazda);
mazda.setName("Lambo");
console.log(mazda.getName());
console.log(mazda);