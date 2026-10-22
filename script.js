// Shopping Cart

let cart = [];


// Add item to cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}


// Update cart

function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    let cartItems =
        document.getElementById("cart-items");

    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach(function(item, index) {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <span>
                    ${item.name}
                </span>

                <span>
                    ₹${item.price}

                    <button
                        onclick="removeItem(${index})">
                        ❌
                    </button>
                </span>

            </div>
        `;

    });


    document.getElementById("cart-total").innerText = total;
}


// Remove item

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// Open cart

function openCart() {

    document.getElementById("cart-modal")
    .style.display = "block";

}


// Close cart

function closeCart() {

    document.getElementById("cart-modal")
    .style.display = "none";

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "🎉 Order placed successfully!\n\n" +
        "Thank you for ordering from FoodieHub!"
    );


    cart = [];

    updateCart();

    closeCart();
}


// Search food

function searchFood() {

    let searchValue =
        document.getElementById("search")
        .value
        .toLowerCase();


    let cards =
        document.querySelectorAll(".food-card");


    cards.forEach(function(card) {

        let foodName =
            card.querySelector("h3")
            .innerText
            .toLowerCase();


        if (foodName.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Contact form

function submitForm(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;


    alert(
        "Thank you " +
        name +
        "! Your message has been submitted."
    );


    event.target.reset();
}