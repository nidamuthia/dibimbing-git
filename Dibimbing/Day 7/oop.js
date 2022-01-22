// parent class
class Vehicle {

    constructor(name, factory, year, price) {
        // public
        this.name = name;
        this.factory = factory;
        this.year = year;
        this.price = price;
    }

    // encapsulation : because tax can't be accessed directly
    setTax = (tax) => {
        //private
        this.tax = tax;
    }

    getTax = () => {
        console.log(this.tax);
    }

    // abstraction : because it only outputs the selling price without knowing where the calculation comes from
    sellingPrice = () => {
        return this.tax + this.price;
    }


    detail = () => {
        return `${this.name} Is Vehicle with factory ${this.factory}`;
    }

}

// let cycle = new Vehicle('Bmx', 'Nosan', 2021, 100000);
// cycle.setTax(10000);
// console.log(cycle.sellingPrice());


// inheritance
// child
class Car extends Vehicle {
    constructor(name, price, type) {
        super(name, '', '', price);
        this.name = name;
        this.price = price;
        this.type = type;
    }

    // polymorphysm : because the method is named the same as the parent but different in purpose or content
    detail = () => {
        return `${this.name} The Price Is ${this.price}`;
    }

}

let honda = new Car('Honda', 200000000, "car");
console.log(honda.detail());