const allProducts = [];
emptyCart();
productQuantity();
function handleAddToBasketClick(event) {
    const button = event.target; // The clicked button
    const productDiv = button.closest('.popular-products-main-div'); // Find the closest parent div

    if (productDiv) {
        const productName = productDiv.querySelector('h3')?.textContent || 'N/A';
        const productPrice = parseFloat(productDiv.querySelector('.discount')?.textContent.replace('₾', '').trim()) || 0;
        const productOldPrice = productDiv.querySelector('.prise-line-through') ? parseFloat(productDiv.querySelector('.prise-line-through').textContent.replace('₾', '').trim()) : null;
        
        const productPhotoDiv = productDiv.querySelector('.popular-product-photo');
        const productImageStyle = window.getComputedStyle(productPhotoDiv);
        const productImageUrl = productImageStyle.backgroundImage;
        const productImageSrc = productImageUrl.slice(5, -2) || 'N/A'; // Remove 'url("') and '")'

        const existingProduct = allProducts.find(product => product.name === productName);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            const newProduct = {
                path: productImageSrc,
                name: productName,
                price: productPrice,
                oldPrice: productOldPrice,
                discount: productOldPrice ? ((productOldPrice - productPrice) / productOldPrice * 100).toFixed(0) : null,
                quantity: 1,
            };
            allProducts.push(newProduct);
        }

        renderProducts();
        allProductsPrice();
        emptyCart();
        productQuantity();
    }  
}

// Add event listeners to all "add-to-basket-btn" buttons
document.querySelectorAll('.add-to-basket-btn').forEach(button => {
    button.addEventListener('click', handleAddToBasketClick);
});
function productQuantity(){
  const number =  allProducts.length
  const dot = document.querySelector(".red-dot")
  if(number !== 0){
    dot.innerHTML = number
    dot.style.display = "flex"
  }else{
    dot.style.display = "none"
  }
}
function emptyCart(){
    const midCart = document.querySelector(".mid-cart");
    const bottCart = document.querySelector(".bott-cart");
    if(allProducts.length === 0){
        midCart.innerHTML = `
        <img src="photos/empty-cart.png" class="empty-cart-img">
        <p class="empty-cart-p">კალათა ცარიელია</p>
    `
    midCart.style.height = "100%"
    midCart.style.display = "flex"
    midCart.style.alignItems = "center"
    midCart.style.flexDirection = "column"
    bottCart.style.display = "none"
    }else{
        bottCart.style.display = "flex"
        midCart.style.height = "292px"
    }
}

function renderProducts() {
    const midCart = document.querySelector(".mid-cart");
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

    // Add event listeners for the trash bin icons and quantity buttons
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
        // Remove the product from the allProducts array
        allProducts.splice(productIndex, 1);

        // Re-render the products and update the total price
        renderProducts();
        allProductsPrice();
        productQuantity();
    }   
    emptyCart();
}

function handleDecreaseQuantity(event) {
    const decreaseButton = event.target;
    const productDiv = decreaseButton.closest('.cart-prd');
    const productIndex = productDiv.getAttribute('data-index');

    if (productIndex !== null) {
        const product = allProducts[productIndex];
        if (product.quantity > 1) {
            product.quantity -= 1;
            renderProducts();
            allProductsPrice();
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
        renderProducts();
        allProductsPrice();
    }
}

function allProductsPrice() {
    let wholePrice = 0;

    allProducts.forEach(product => {
        if (product.price) {
            wholePrice += product.price * product.quantity;
        }
    });

    document.getElementById("whole-price").textContent = `სულ : ${wholePrice.toFixed(2)}₾`;
}

document.getElementById("x").addEventListener("click", function () {
    document.getElementById("cart").style.display = "none";
    document.querySelector(".shadow").style.display = "none";
    document.querySelector("body").style.overflow = "auto"
});
document.querySelector(".shadow").addEventListener("click", function () {
    document.getElementById("cart").style.display = "none";
    document.querySelector(".shadow").style.display = "none";
    document.querySelector("body").style.overflow = "auto"
});
document.getElementById("basket-icon").addEventListener("click", function () {
    document.getElementById("cart").style.display = "block";
    document.querySelector(".shadow").style.display = "block";
    document.querySelector("body").style.overflow = "hidden"
});

// Scroll to the bottom of the basket when a new product is added
function addProductToBasket(productHTML) {
    const basket = document.querySelector('.mid-cart');
    basket.insertAdjacentHTML('beforeend', productHTML);
    basket.scrollTop = basket.scrollHeight;
}
document.getElementById("buy-btn").addEventListener("click", function() {
    localStorage.setItem('cartItems', JSON.stringify(allProducts));
    window.location.href = "./html/cart.html";
});

// document.getElementById("buy-btn").addEventListener("click", function(){

// })