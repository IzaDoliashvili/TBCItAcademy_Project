document.addEventListener("DOMContentLoaded", function() {
    const storedCartItems = localStorage.getItem('cartItems');
    let allProducts = [];

    if (storedCartItems) {
        allProducts = JSON.parse(storedCartItems);
        renderProducts();
        allProductsPrice();
        calculateTotalDiscount();
        document.getElementById("button").addEventListener("click", function() {
            localStorage.setItem('cartItems', JSON.stringify(allProducts));
            window.location.href = "creditCard.html";
        });
    }

    function renderProducts() {
        const midCart = document.querySelector(".left-side-products");
        midCart.innerHTML = ''; // Clear existing content

        allProducts.forEach((product, index) => {
            midCart.innerHTML += `
                <div class="cart-prd" data-index="${index}">
                    <div class="card-prd-img">
                        <img src="${product.path}" alt="">
                        <div class="heart-icon-div2">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="star-box2">
                            <img src="../Super-App-Project-3rd-Team/photos/Star 2.png" alt="">
                            <span>5.0</span>
                        </div>
                    </div>
                    <div class="cart-prd-right">
                        <p>${product.name} <img src="photos/trash bin.png" alt="" class="basket-img trash-icon"></p>
                        <div class="cart-price">
                          <h1>${product.price.toFixed(2)}₾</h1>
                          ${product.oldPrice !== null ? `<p>${product.oldPrice.toFixed(2)}₾</p>` : ''}
                          ${product.discount !== null ? `<span>${product.discount}%</span>` : ''}
                        </div>
                        <div class="quantity">
                            <div class="decrease-quantity">-</div>
                            <div class="quantity-mid"><p>${product.quantity}</p></div>
                            <div class="increase-quantity">+</div>
                        </div>
                    </div>
                </div>`;
        });

        addEventListeners();
    }

    function addEventListeners() {
        document.querySelectorAll('.trash-icon').forEach(trashIcon => {
            trashIcon.addEventListener('click', handleRemoveFromBasketClick);
        });

        document.querySelectorAll('.decrease-quantity').forEach(decreaseButton => {
            decreaseButton.addEventListener('click', handleDecreaseQuantity);
        });

        document.querySelectorAll('.increase-quantity').forEach(increaseButton => {
            increaseButton.addEventListener('click', handleIncreaseQuantity);
        });
    }

    function handleRemoveFromBasketClick(event) {
        const trashIcon = event.target;
        const productDiv = trashIcon.closest('.cart-prd');
        const productIndex = productDiv.getAttribute('data-index');

        if (productIndex !== null) {
            allProducts.splice(productIndex, 1);
            updateCart();
        }
    }

    function handleDecreaseQuantity(event) {
        const decreaseButton = event.target;
        const productDiv = decreaseButton.closest('.cart-prd');
        const productIndex = productDiv.getAttribute('data-index');

        if (productIndex !== null) {

            const product = allProducts[productIndex];
            if (product.quantity > 1) {
                product.quantity -= 1;
                updateCart();
            }
        }
    }

    function handleIncreaseQuantity(event) {
        const increaseButton = event.target;
        const productDiv = increaseButton.closest('.cart-prd');
        const productIndex = productDiv.getAttribute('data-index');

        if (productIndex !== null) {
            const product = allProducts[productIndex];
            product.quantity += 1;
            updateCart();
        }
    }

    function updateCart() {
        localStorage.setItem('cartItems', JSON.stringify(allProducts));
        renderProducts();
        allProductsPrice();
        calculateTotalDiscount();
    }

    function allProductsPrice() {
        let wholePrice = 0;

        allProducts.forEach(product => {
            if (product.price) {
                wholePrice += product.price * product.quantity;
            }
        });

        document.querySelectorAll(".whole-price2").forEach(price => {
            price.textContent = `${wholePrice.toFixed(2)}₾`;
        })
    }
    function calculateTotalDiscount() {
        let totalDiscount = 0;
    
        allProducts.forEach(product => {
            if (product.oldPrice !== null) {
                totalDiscount += (product.oldPrice - product.price) * product.quantity;
            }
        });
    
        document.getElementById("discount").textContent = `-${totalDiscount.toFixed(2)}₾`;
    }
});




