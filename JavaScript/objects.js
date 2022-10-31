// ---------------- objects ----------------
// primitive types
let number = 10;
let name = "farefaergae";

// Product: id, name, price, quntity, manufacture
// create object: { property: value, ... }
let myPhone = {
    id: 1001,
    name: "iPhone X",
    price: 320,
    quantity: 12,
    manufacture: "Apple"
};

// ---------------- functions ----------------
// function expression: funciton [name](param1, param2...) { ...body... }
function showProduct(product) {
    console.log(`Product ${product.name} - ${product.price}$\nManufacture: ${product.manufacture}`);
}
// arrow function: (param1, param2...) => { ...body... }
let showSumm = (a, b) => { alert(`a + b: ${a + b}`); }

showProduct(myPhone);

// ---------------- arrays ----------------
let array = [4, 123, 8, -1, 0, 123, -34];
let colors = ["red", "green", "blue", "white", "orange"];

colors[0] = "gray";
console.log(`First color: ${colors[0]}`);
console.log(`Colors count: ${colors.length}`);

let mixedArray = ["hello", 10, true, showSumm, myPhone, { x: 1, y: 2 }, [1, 2, 3]];
mixedArray[3](5, 6);

// ---------------- array cycles ----------------
// for cycle
for (let i = 0; i < colors.length; i++) {
    console.log(`Color [${i + 1}]: ${colors[i]}`);
}

// forEach method
colors.forEach((item) => {
    console.log(`Color: ${item}`);
});

// for of cycle: iterate elements values
for (const item of colors) {
    console.log(item);
}

// for of cycle: iterate elements indexes
for (const key in colors) {
    console.log(key);
}

// ---------------- array methods ----------------
console.log("Array:" + array);

array.push(777);
console.log("Array:", array);

array.pop();
console.log("Array:", array);

array.shift();
console.log("Array:", array);

array.unshift(555);
console.log("Array:", array);

console.log("Index of first 123:", array.indexOf(123));    // from start 
console.log("Index of last 123:", array.lastIndexOf(123)); // from end

console.log("Found:", array.find((elem) => elem < 0));

array.sort();
console.log("Sorted by default:", array);

// returned value: 
// 0    : elements are equals
// > 0  : left bigger than right
// < 0  : left less than right
array.sort((a, b) => a - b);
console.log("Sorted with custom func:", array);

// ---------------- strings ----------------
let login = 'My login is "Vlad"?';
let end = "end!";

console.log("login[3]: ", login[3]); // l 
console.log("Char at 3: ", login.charAt(3)); // l
console.log(login + end);

if (login.endsWith("?")) console.log("Ends with ?");

if (login.startsWith("A")) console.log("Starts with A");
else console.log("Does not start with A");

console.log("Index of i: ", login.indexOf('i')); // 6
console.log("Last Index of i: ", login.lastIndexOf('i')); // 9

if (login.includes("is")) console.log("Includes the word 'is'");

console.log("Symbols: ", login.length);

console.log("After replace: ", login.replace(" ", "-"));

let welcome = "Hello";
console.log(welcome.repeat(3));
console.log("Hello".repeat(3));

console.log("Slice from 3 to 8: ", login.slice(3, 8));
console.log("Upper case: ", login.toUpperCase());
console.log("Lower case: ", login.toLowerCase());

console.log("Before substring: " + login);
console.log('Substring with 6 symbols from: ', login.substring(login.indexOf('"'), login.lastIndexOf('"') + 1));

let email = prompt("Enter your email:"); //" example@gmail.com "
console.log(`Trimmed: |${email.trim()}|`);

let text = "How are you today? And, blabla. Goodbye!";
const words = text.split(" ");
console.log("Words: ", words);

console.log("Joined: ", words.join('-'));