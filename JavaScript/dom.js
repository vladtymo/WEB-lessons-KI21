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