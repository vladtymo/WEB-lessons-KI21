// ---------------- classes ----------------
let myPhone = {
    id: 1001,
    name: "iPhone X",
    price: 320,
    quantity: 12,
    manufacture: "Apple",
    applications: ["Twitter", "Facebook", "Safari"],
    battery: {
        model: "Baseus",
        voltage: 2.7,
        capacity: 3200
    },
    warantyExpired: true,

    show() {
        console.log(`${this.name} - ${this.price}$`);
    }
};

myPhone.show();

// add property
myPhone.memory = 64;
console.log(`Memory: ${myPhone.memory} Gb`);

// remove property
delete myPhone.memory;
console.log(`Memory: ${myPhone.memory} Gb`);

class Phone {
    // constructors with property creation
    constructor(id, model, price, manufacture, battery) {
        this.id = id;
        this.model = model;
        this.price = price;
        this.manufacture = manufacture;
        this.battery = battery;
        this.quantity = 1;
        this.applications = [];
        this.warantyExpired = false
    }

    // methods
    show() {
        console.log(`${this.model} - ${this.price}$`);
    }
}

let yourPhone = new Phone(2003, 'Pixel 3', 790, "Google", { model: "Baseus", voltage: 4.5, capacity: 4400 });
console.log(`Battery model: ${yourPhone.battery.model}`);

yourPhone.show();