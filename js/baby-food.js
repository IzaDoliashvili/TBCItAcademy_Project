const products = [
    {
        image: "../Image/baby-food/food1.png",
        brand: "HIPP",
        description: "ჰიპპ 20 გ",
        price: 72,
        age: "0-3 months",
        bulk: "15-30 g",
        rating: 5
        
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "BabyBio",
        description: "ბეიბი ბიო 80 გ",
        price: 50,
        age: "3-6 months",
        bulk: "75-100 g",
        rating: 4
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Plasmon",
        description: "პლასმონი 200 გ",
        price: 150,
        age: "6-9 months",
        bulk: "100-300 g",
        rating: 3
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Humana",
        description: "ჰუმანა 400 გ",
        price: 120,
        age: "9-12 months",
        bulk: "300-500 g",
        rating: 2
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Heinz",
        description: "ჰეინზ 700 გ",
        price: 80,
        age: "1-3 years",
        bulk: "500-1000 g",
        rating: 1
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Nestle",
        description: "ნესტლე 200 გ",
        price: 90,
        age: "3-5 years",
        bulk: "100-300 g",
        rating: 5
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "HIPP",
        description: "ჰიპპ 20 გ",
        price: 72,
        age: "0-3 months",
        bulk: "15-30 g",
        rating: 5
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "BabyBio",
        description: "ბეიბი ბიო 80 გ",
        price: 50,
        age: "3-6 months",
        bulk: "75-100 g",
        rating: 4
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Plasmon",
        description: "პლასმონი 200 გ",
        price: 150,
        age: "6-9 months",
        bulk: "100-300 g",
        rating: 3
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Humana",
        description: "ჰუმანა 400 გ",
        price: 120,
        age: "9-12 months",
        bulk: "300-500 g",
        rating: 2
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Heinz",
        description: "ჰეინზ 700 გ",
        price: 80,
        age: "1-3 years",
        bulk: "500-1000 g",
        rating: 1
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Nestle",
        description: "ნესტლე 200 გ",
        price: 90,
        age: "3-5 years",
        bulk: "100-300 g",
        rating: 5
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "HIPP",
        description: "ჰიპპ 20 გ",
        price: 72,
        age: "0-3 months",
        bulk: "15-30 g",
        rating: 5
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "BabyBio",
        description: "ბეიბი ბიო 80 გ",
        price: 50,
        age: "3-6 months",
        bulk: "75-100 g",
        rating: 4
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Plasmon",
        description: "პლასმონი 200 გ",
        price: 150,
        age: "6-9 months",
        bulk: "100-300 g",
        rating: 3
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Humana",
        description: "ჰუმანა 400 გ",
        price: 120,
        age: "9-12 months",
        bulk: "300-500 g",
        rating: 2
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Heinz",
        description: "ჰეინზ 700 გ",
        price: 80,
        age: "1-3 years",
        bulk: "500-1000 g",
        rating: 1
    },
    {
        image: "../Image/baby-food/food1.png",
        brand: "Nestle",
        description: "ნესტლე 200 გ",
        price: 90,
        age: "3-5 years",
        bulk: "100-300 g",
        rating: 5
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const babyfoodproduct = document.getElementById('baby-product-conteiner');
    const filters = document.querySelectorAll('.filter');
    const priceInputs = document.querySelectorAll('.price-input');
    const searchButton = document.getElementById('searchButton');
    const sortDiv = document.getElementById('sort-div');
    const selectedFiltersDiv = document.getElementById('selected-filters');
    const clearAllButton = document.getElementById('clearAll');
    const paginationContainer = document.getElementById('pagination');
    const productsPerPage = 9; 
    let currentPage = 1;
    let filteredProducts = [...products];  

    displayProducts(filteredProducts, currentPage);

    searchButton.addEventListener('click', filterProducts);

    filters.forEach(filter => {
        filter.addEventListener('change', handleFilterChange);
    });

    clearAllButton.addEventListener('click', clearAllFilters);

    function displayProducts(products, page) {
        babyfoodproduct.innerHTML = ''; 
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const paginatedProducts = products.slice(start, end);
    
        paginatedProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.brand = product.brand;
            productCard.dataset.price = product.price;
            productCard.dataset.age = product.age;
            productCard.dataset.bulk = product.bulk;
            productCard.dataset.rating = product.rating;
    
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.description}">
                <div class="rating"><i class="fas fa-star"></i> ${product.rating}.0</div>
                <div class="heart-icon">
                    <img src="../Image/baby-care-image/Shape.png" alt="">
                </div>
                <div class="details">
                    <div class="brand">${product.brand}</div>
                    <div class="description">${product.description}</div>
                    <div class="price">
                        <span class="new-price">${product.price}.00₾</span>
                    </div>
                    <div class="button">
                        <button>კალათაში დამატება</button>
                    </div>
                    <div id="baby-care-hidden-button">
                        <a href="#"><img src="../Image/baby-care-image/Icon Left.png" alt="">დამატება</a>
                    </div>
                </div>
            `;
    
            productCard.addEventListener('click', () => {
                window.location.href = `food-item.html?productIndex=${index}`;
            });
    
            babyfoodproduct.appendChild(productCard);
        });
    
        displayPagination(products.length, page);
    }
    

    function displayPagination(totalProducts, page) {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalProducts / productsPerPage);

        const maxPagesToShow = 5;
        const firstPage = 1;
        const lastPage = totalPages;

        const createButton = (text, page) => {
            const pageButton = document.createElement('button');
            pageButton.textContent = text;
            pageButton.classList.add('pagination-button');
            if (page === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = page;
                displayProducts(filteredProducts, currentPage);
            });
            paginationContainer.appendChild(pageButton);
        };

        if (currentPage > firstPage) {
            createButton('<', currentPage - 1);
        }

        createButton(firstPage, firstPage);

        
        if (currentPage > maxPagesToShow) {
            paginationContainer.innerHTML += `<span class="ellipsis">...</span>`;
        }

        const startPage = Math.max(currentPage - 2, firstPage + 1);
        const endPage = Math.min(currentPage + 2, lastPage - 1);

        for (let i = startPage; i <= endPage; i++) {
            createButton(i, i);
        }

        
        if (currentPage < lastPage - (maxPagesToShow - 1)) {
            paginationContainer.innerHTML += `<span class="ellipsis">...</span>`;
        }

        if (lastPage > firstPage) {
            createButton(lastPage, lastPage);
        }

        if (currentPage < lastPage) {
            createButton('>', currentPage + 1);
        }
    }

    function handleFilterChange(event) {
        const filter = event.target;
        const filterType = filter.closest('.filter-group').querySelector('h2').textContent;

        if (filter.type === 'checkbox' && filter.checked) {
            addFilterToSortDiv(filterType);
        } else if (filter.type === 'number') {
            addFilterToSortDiv(filterType);
        } else {
            removeFilterFromSortDiv(filterType);
        }
        filterProducts();  
    }

    function addFilterToSortDiv(type) {
        if (!selectedFiltersDiv.querySelector(`[data-type="${type}"]`)) {
            const filterTag = document.createElement('div');
            filterTag.className = 'selected-filter';
            filterTag.dataset.type = type;
            filterTag.innerHTML = `
                ${type}
                <span class="clear-icon" onclick="removeFilterFromSortDiv('${type}')">x</span>
            `;
            selectedFiltersDiv.appendChild(filterTag);
        }
    }

    window.removeFilterFromSortDiv = function(type) {
        const filterTags = selectedFiltersDiv.querySelectorAll('.selected-filter');
        filterTags.forEach(tag => {
            if (tag.dataset.type === type) {
                tag.remove();
                filters.forEach(filter => {
                    if (filter.closest('.filter-group').querySelector('h2').textContent === type) {
                        if (filter.type === 'checkbox') {
                            filter.checked = false;
                        } else if (filter.type === 'number') {
                            filter.value = '';
                        }
                    }
                });
            }
        });
        filterProducts();  
    };

    function clearAllFilters() {
        selectedFiltersDiv.innerHTML = '';
        filters.forEach(filter => {
            if (filter.type === 'checkbox') {
                filter.checked = false;
            } else if (filter.type === 'number') {
                filter.value = '';
            }
        });
        filterProducts();  
    }

    function filterProducts() {
        const minPrice = document.getElementById('minPrice').value;
        const maxPrice = document.getElementById('maxPrice').value;
        const filters = document.querySelectorAll('.filter');
        const activeFilters = {
            brands: [],
            ages: [],
            bulks: [],
            ratings: [],
            minPrice: minPrice ? parseFloat(minPrice) : null,
            maxPrice: maxPrice ? parseFloat(maxPrice) : null,
        };

        filters.forEach(filter => {
            if (filter.type === 'checkbox' && filter.checked) {
                if (filter.classList.contains('brand')) {
                    activeFilters.brands.push(filter.dataset.filter);
                } else if (filter.classList.contains('age')) {
                    activeFilters.ages.push(filter.dataset.filter);
                } else if (filter.classList.contains('bulk')) {
                    activeFilters.bulks.push(filter.dataset.filter);
                } else if (filter.classList.contains('rating')) {
                    activeFilters.ratings.push(parseInt(filter.dataset.filter));
                }
            }
        });

        filteredProducts = products.filter(product => {
            const productBrand = product.brand;
            const productPrice = parseFloat(product.price);
            const productAge = product.age;
            const productBulk = product.bulk;
            const productRating = parseInt(product.rating);

            let show = true;

            if (activeFilters.minPrice !== null && productPrice < activeFilters.minPrice) {
                show = false;
            }

            if (activeFilters.maxPrice !== null && productPrice > activeFilters.maxPrice) {
                show = false;
            }

            if (activeFilters.brands.length > 0 && !activeFilters.brands.includes(productBrand)) {
                show = false;
            }

            if (activeFilters.ages.length > 0 && !activeFilters.ages.includes(productAge)) {
                show = false;
            }

            if (activeFilters.bulks.length > 0 && !activeFilters.bulks.includes(productBulk)) {
                show = false;
            }

            if (activeFilters.ratings.length > 0 && !activeFilters.ratings.includes(productRating)) {
                show = false;
            }

            return show;
        });

        currentPage = 1;  
        displayProducts(filteredProducts, currentPage);
    }
});


