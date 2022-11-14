const nameInp = document.getElementById('name-input');
const priceInp = document.getElementById('price-input');
const submitBtn = document.getElementById('order-submit');

let orders = [];

submitBtn.onclick = () => {

    let newOrder = {
        id: orders.length + 1,
        name: nameInp.value,
        price: priceInp.value
    }
    console.log(newOrder);

    orders.push(newOrder);
    addOrder(newOrder);
};

const tableBody = document.getElementById('table-body');

function addOrder(order) {
    tableBody.innerHTML += `
        <tr class="table-dark align-middle">
            <th scope="row">${order.id}</th>
            <td>${order.name}</td>
            <td>${order.price}$</td>
            <td>
                <button type="button" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>`;
}