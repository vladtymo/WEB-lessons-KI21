// -------------- DOM --------------
// Document Object Model

// add html code to the end of the html document
document.write("<p>Hello DOM!</p>");

const count = +prompt("Enter count:");

document.write("<ul>");
for (let i = 0; i < count; i++) {
    document.write(`<li>[${i + 1}] - Element</li>`);
}
document.write("</ul>");

// get element from document
const list = document.getElementById('my-list');

for (let i = 0; i < count; i++) {
    addItem("Custom element");
}

function addItem(text) {
    // 1 - using innerHTML
    //list.innerHTML += `<li>${text}</li>`;

    // 2 - using document methods
    const item = document.createElement('li');
    item.innerText = text;
    list.appendChild(item);
}

// add event handlers
const clearBtn = document.getElementById('clear-btn');
const addBtn = document.getElementById('add-btn');
const txtInput = document.getElementById('text-input');

// add onclick event handler
clearBtn.onclick = () => {
    // clear list items
    list.innerHTML = "";
};

addBtn.onclick = () => {

    // 1 - get text from prompt()
    //const text = prompt("Enter item text:");

    // 2 - from input
    const text = txtInput.value;

    addItem(text);
};