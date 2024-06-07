let products = [
    {
        id: 1,
        name: 'Mouse',
        image: './images/istockphoto-173863591-1024x1024.jpg',
        price: 50
    },
    {
        id: 2,
        name: 'Keyboard',
        image: './images/jan-loyde-cabrera-p5rgceFiOH0-unsplash.jpg',
        price: 150
    },
    {
        id: 3,
        name: 'Monitor',
        image: './images/nicolas-gonzalez-183F_vNaN8A-unsplash.jpg',
        price: 300
    },
    {
        id: 4,
        name: 'Mouse Pad',
        image: './images/istockphoto-1313952990-1024x1024.jpg',
        price: 20
    },
    {
        id: 5,
        name: 'Printer',
        image: './images/mahrous-houses-5AoOejjRUrA-unsplash.jpg',
        price: 200
    },
    {
        id: 6,
        name: 'Laptop',
        image: './images/samantha-borges-gXsJ9Ywb5as-unsplash.jpg',
        price: 1000
    }
]

let productList =  document.querySelector('.products');
function initializeProduct() {
    products.forEach((value, button) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'width: 12rem;');
        card.innerHTML = `
            <img src="${value.image}" class="card-img">
            <div class="card-body">
                <h4 class="card-title">${value.name}</h4>
                <p class="card-text">Price: ${value.price}</p>
                <button class="addbtn" onclick="addToCart(${button})">Add to Cart</button>
            </div>`;
        productList.appendChild(card);
    });
}

initializeProduct();

let cart = document.querySelector('.cart');
let addCart = document.querySelector('.add-cart');
let cartList = [];

function addToCart(button) {
    if (cartList[button] == null) {
        cartList[button] = JSON.parse(JSON.stringify(products[button]));
        cartList[button].quantity = 1;
    }
    rCart();
}

function rCart() {
    addCart.innerHTML = '';
    let totalProduct = 0;
    cartList.forEach((value, button) => {
        totalProduct = totalProduct + value.price;

        if (value != null) {
            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'product-item');
            listItem.innerHTML = `
                <div><img src="${value.image}" style="width: 70px"/></div>
                <div><h4>${value.name}</h5></div>
                <div><h5>${value.price.toLocaleString()}</h6></div>
                <div>
                    <button onclick="addMinus(${button}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="addMinus(${button}, ${value.quantity + 1})">+</button>
                </div>`;
            addCart.appendChild(listItem);
        }
    });

let total = document.querySelector('.total');
let tax = document.querySelector('.tax');
let subtotal = document.querySelector('.subtotal');

    subtotal.innerText = totalProduct.toLocaleString();
    tax.innerText = (totalProduct * 0.12).toLocaleString();
    total.innerText = (totalProduct + parseFloat(tax.innerText)).toLocaleString();

    quantity.innerText = count;
}

function addMinus(button, quantity) {
    if (quantity == 0) {
        delete cartList[button];
    } else {
        cartList[button].quantity = quantity;
        cartList[button].price = quantity * products[button].price;
    }
    rCart();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clear-btn").addEventListener("click", clearCart);
});

function clearCart() {
    cartList = [];
    rCart();
}