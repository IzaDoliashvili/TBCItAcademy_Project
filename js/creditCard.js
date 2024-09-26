document.addEventListener("DOMContentLoaded", function(){
    const storedCartItems = localStorage.getItem('cartItems');
    let allProducts = [];

    if (storedCartItems) {
        allProducts = JSON.parse(storedCartItems);
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
    function allProductsPrice() {
        let wholePrice = 0;
    
        allProducts.forEach(product => {
            if (product.price) {
                wholePrice += product.price * product.quantity;
            }
        });
    
        document.getElementById("whole-price").textContent = `${wholePrice.toFixed(2)}₾`;
        
        
    }
    allProductsPrice();
    calculateTotalDiscount();
})

