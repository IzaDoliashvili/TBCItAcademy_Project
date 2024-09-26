//  section baby-care-popular 
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            image: '../Image/baby-care-image/sale1.png', 
            rating: 5,
            brand: "Carter's",
            description: 'ბოდე მოკლე მკლავით. გოგო.',
            price: 29.00,
            oldPrice: 58.00,
            discount: 50
        },
        {
            image: '../Image/baby-care-image/sale2.png', 
            rating: 5.0,
            brand: "Carter's",
            description: 'ნაკრები წინდა. ბიჭი. 12-24თვ',
            price: 34.00,
            oldPrice: 68.00,
            discount: 50
        },
        {
            image: '../Image/baby-care-image/sale3.png', 
            rating: 5.0,
            brand: "Carter's",
            description: 'ნაკრები კომბინიზონი',
            price: 69.00,
            oldPrice: 138.00,
            discount: 50
        }
    ];

    const babycardContainer = document.getElementById('babycardContainer');

    products.forEach(product => {
        const babycard = document.createElement('div');
        babycard.classList.add('baby-sale-card');

        babycard.innerHTML = `
            <img src="${product.image}" alt="${product.description}">
            <div class="rating"><i class="fas fa-solid fa-star"></i> ${product.rating + ".0"}</div>
            
            <div class="heart-icon">
            <img src="../Image/baby-care-image/Shape.png" alt="">
            </div>
            <div class="details">
                <div class="brand">${product.brand}</div>
                <div class="description">${product.description}</div>
                <div class="price">
                    <span class="new-price">${product.price + ".00"}₾</span>
                    <span class="old-price">${product.oldPrice + ".00"}₾</span>
                    <span class="discount">-${product.discount}%</span>
                </div>
                <div class="button">
                    <button>კალათაში დამატება</button>
                </div>
                <div id="baby-care-hidden-button">
                <a>
                <img src="../Image/baby-care-image/Icon Left.png" alt="">დამატება
                </a>
                </div>
            </div>
        `;

        babycardContainer.appendChild(babycard);
    });
});

// section baby-care-popular 

document.addEventListener('DOMContentLoaded', function() {
    const products1 = [
        {
            image: '../Image/baby-care-image/popular1.png',
            rating: 5.0,
            brand: "Pampers",
            description: 'ბავშვის ტრუსი 4 ზომა,9-15 კგ,25 ცალი',
            Price: 37.00,
        },
        {
            image: '../Image/baby-care-image/popular2.png',
            rating: 5.0,
            brand: "Huggies",
            description: 'სვ. ხელსახოცი საბავშვო ალოე',
            Price: 8.75,
        },
        {
            image: '../Image/baby-care-image/popular3.png',
            rating: 5.0,
            brand: "Gerber",
            description: 'ფაფა რძიანი მოცვი. ჟოლო 180გრ',
            Price: 11.90,
        }
    ];

    const babypopularcontainer = document.getElementById('babypopularcardContainer');

    products1.forEach(product1 => {
        const popularcard = document.createElement('div');
        popularcard.classList.add('baby-popular-card');

        popularcard.innerHTML = `
            <img src="${product1.image}" alt="${product1.description}">
            <div class="rating"><i class="fas fa-star"></i> ${product1.rating + ".0"}</div>
            <div class="heart-icon">
            <img src="../Image/baby-care-image/Shape.png" alt="">
            </div>
            <div class="details">
                <div class="brand">${product1.brand}</div>
                <div class="description">${product1.description}</div>
                <div class="price">
                    <span class="new-price">${product1.Price.toFixed(2)}₾</span>
                </div>
                <div class="button">
                    <button>კალათაში დამატება</button>
                </div>
                <div id="baby-care-hidden-button">
                <a>
                <img src="../Image/baby-care-image/Icon Left.png" alt="">დამატება
                </a>
                </div>
            </div>
        `;

        babypopularcontainer.appendChild(popularcard);
    });
});

// baby-care-sea


document.addEventListener('DOMContentLoaded', function() {
    const products2 = [
        {
            image: '../Image/baby-care-image/sea1.png',
            rating: 5.0,
            brand: "Dermedic",
            description: 'საბავშვო მზისგან დამცავი რძე SPF50 100მლ',
            Price: 43.00,
        },
        {
            image: '../Image/baby-care-image/sea2.png',
            rating: 5.0,
            brand: "Carter’s",
            description: 'ქუდი მარწყვის პრინტით, ორმხრივი, გოგო, 12-24თვ',
            Price: 28,
        },
        {
            image: '../Image/baby-care-image/sea3.png',
            rating: 5.0,
            brand: "Suavinex",
            description: 'საბავშვო,მზისგან დამცავი სათვალე ჩასადებით, 24-36 თვ',
            Price: 65,
        }
    ];

    const babyseacontainer = document.getElementById('babyseacardContainer');

    products2.forEach(product2 => {
        const seacard = document.createElement('div');
        seacard.classList.add('baby-sea-card');

        seacard.innerHTML = `
            <img class="sea-img"src="${product2.image}" alt="${product2.description}" >
            <div class="rating"><i class="fas fa-star"></i> ${product2.rating + ".0"}</div>
            <div class="heart-icon">
            <img src="../Image/baby-care-image/Shape.png" alt="">
            </div>
            <div class="details">
                <div class="brand">${product2.brand}</div>
                <div class="description">${product2.description}</div>
                <div class="price">
                    <span class="new-price">${product2.Price + ".00"}₾</span>
                </div>
                <div class="button">
                    <button>კალათაში დამატება</button>
                </div>
                <div id="baby-care-hidden-button">
                <a>
                <img src="../Image/baby-care-image/Icon Left.png" alt="">დამატება
                </a>
                </div>
            </div>
        `;

        babyseacontainer.appendChild(seacard);
    });
});
document.getElementById('babyFoodCard').addEventListener('click', function() {
    window.location.href = 'baby-food.html';
});
