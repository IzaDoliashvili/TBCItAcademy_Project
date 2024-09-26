document.addEventListener('DOMContentLoaded', () => {
    const filterIcon = document.getElementById('filter-icon');
    const filterSection = document.querySelector('.filter-section');
    const filters = document.querySelectorAll('.filter-group h2');

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    filterSection.parentElement.insertBefore(dropdownMenu, filterSection);

    while (filterSection.firstChild) {
        dropdownMenu.appendChild(filterSection.firstChild);
    }

    filterIcon.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

   
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const group = filter.parentElement;
            group.classList.toggle('open');
        });
    });

    function handleFilterChange(event) {
        filterProducts();
    }

    const filterElements = document.querySelectorAll('.filter');
    filterElements.forEach(filter => {
        filter.addEventListener('change', handleFilterChange);
    });

    function filterProducts() {
        
    }

    const clearAllButton = document.getElementById('clearAll');
    clearAllButton.addEventListener('click', () => {
        const filterElements = document.querySelectorAll('.filter');
        filterElements.forEach(filter => {
            if (filter.type === 'checkbox') {
                filter.checked = false;
            } else if (filter.type === 'number') {
                filter.value = '';
            }
        });
        filterProducts();
    });

    displayProducts(products);

    function displayProducts(products) {
        
    }
});
