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
        this._price = price;
        this.manufacture = manufacture;
        this.battery = battery;
        this.quantity = 1;
        this.applications = [];
        this.warantyExpired = false
    }

    // setter / getter
    /**
     * @param {number} newPrice - new price of the phone
     */
    set price(newPrice) {
        if (newPrice >= 0)
            this._price = newPrice;
    }
    get applicationCount() {
        return this.applications.length;
    }

    // methods
    show() {
        console.log(`${this.model} - ${this._price}$`);
    }
}

let yourPhone = new Phone(2003, 'Pixel 3', 790, "Google", { model: "Baseus", voltage: 4.5, capacity: 4400 });
console.log(`Battery model: ${yourPhone.battery.model}`);

yourPhone.price = -200;                                          // set
console.log(`Application count: ${yourPhone.applicationCount}`); // get

yourPhone.show();

/*
.selected {
     color: white;
     height: 100%;
     text-align: center;            
}
name: string, 
properties: [
    {
        name: string,
        value: string
    },
    {
        name: string,
        value: string
    }
]
*/