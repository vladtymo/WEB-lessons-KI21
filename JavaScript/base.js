// ---------- data types ----------
// primitive types: number, string, boolean
// create variable: var/let var_name = value;

console.log(`Price: ${price}, type: ${typeof price}`); // undefined

var price = 40;                 // number
let email = "bla@gmail.com";    // string
let isValid = true;             // boolean
let emptyObject = null;         // null

console.log(`Price: ${price}, type: ${typeof price}`);
console.log(`Email: ${email}, type: ${typeof email}`);
console.log(`Is valid: ${isValid}, type: ${typeof isValid}`);
console.log(`Empty object: ${emptyObject}, type: ${typeof emptyObject}`);

// JS has dynamic typing
price = "good price";            // change type from number to string

console.log(`Price: ${price}, type: ${typeof price}`);

// function type
let summ = function (a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
};
summ(8, 9);

// create array
let array = [1, 5, 43.7, "red", "white", true, [1, 2, 3], summ];

console.log("Array: " + array);

// invoke function
array[7](5, 6);

// stepin operator: **
console.log("2^8 = " + 2 ** 8);

// base statements: if else switch for ...
if (5 > 2) {
    console.log("5 is bigger than 2");
} else console.log("5 is not bigger than 2");

switch (price) {
    case 0:
        break;
    case 'good price':
        break;
    default:
        break;
}

for (let i = 0; i < array.length; i++) {
}

for (const element of array) {
}

// convert UAH value to USD
const kurs = 40.3;

// convert string to number: +{string_value}
let salary = +prompt("Enter your salary (UAH):");

while (isNaN(salary)) {
    console.warn("Invalid salary. Please enter again:");
    salary = +prompt("Enter your salary (UAH):");
}

console.log(`Salary: ${salary}, type: ${typeof salary}`);

console.log(`Salary with bonuses: ${salary + 550} UAH`);
console.log(`Salary: ${(salary / kurs).toFixed(2)} $`);