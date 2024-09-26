document.addEventListener('DOMContentLoaded', function() {
    const menuData = [
        { icon: 'fas fa-tv', label: 'ტექნიკა' },
        { icon: 'fas fa-baby', label: 'ბავშის მოვლა',submenu: ['ბავშვის მოვლა', 'ბავშვის კვება', 'საბავშო ინვენტარი'] , link: '../html/baby-care.html',},
        { icon: 'fas fa-home', label: 'სახლი&მოვლა' },
        { icon: 'fas fa-spa', label: 'თავის მოვლა' },
        { icon: 'fas fa-car', label: 'სათამაშები' },
        { icon: 'fas fa-wine-bottle', label: 'ბარი&სხვა' },
        { icon: 'fas fa-book', label: 'წიგნები' },
        { icon: 'fas fa-dumbbell', label: 'ფიტნესი' },
        { icon: 'fas fa-bone', label: 'ცხოველების მოვლა' },
        // { icon: 'fas fa-camp', label: 'დასვენება' },
        // { icon: 'fas fa-medical,', label: 'ჯანმრთელობა' },
        // { icon: 'fas fa-pen', label: 'საკანცელარიო ნივთები' },


        
    ];

    
    
    const hiddenButton = document.querySelector('.hidden-button');
    const menuContainer = document.getElementById('menuContainer');
    const closeButton = document.getElementById('closeButton');
    const menuList = document.getElementById('menuList');
    const submenuContainer = document.createElement('div');
    submenuContainer.classList.add('submenu-container');
    menuContainer.appendChild(submenuContainer);

    const submenuList = document.createElement('ul');
    submenuList.classList.add('submenu-list');
    submenuContainer.appendChild(submenuList);

    menuData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${item.icon}"></i>${item.label}`;
        menuList.appendChild(li);

        li.addEventListener('click', function() {

            document.querySelectorAll('#menuList li').forEach(menuItem => {
                menuItem.classList.remove('menu-item-active');
            });
            li.classList.add('menu-item-active');

            if (item.submenu) {
                submenuList.innerHTML = '';
                item.submenu.forEach((subitem, index) => {
                    const subli = document.createElement('li');
                    subli.textContent = subitem;
                    if (subitem === 'ბავშვის კვება') {
                        subli.addEventListener('click', () => {
                            window.location.href = '../html/baby-food.html';
                        });
                    } else if (subitem === item.submenu[0]) {
                        subli.style.fontWeight = 'bold';
                        subli.addEventListener('click', () => {
                            window.location.href = item.link;
                        });
                    }

                    submenuList.appendChild(subli);
                });
                submenuContainer.classList.add('show');
            } else {
                submenuContainer.classList.remove('show');
            }
        });
    });

    hiddenButton.addEventListener('click', function() {
        menuContainer.classList.add('show');
    });

    closeButton.addEventListener('click', function() {
        menuContainer.classList.remove('show');
        submenuContainer.classList.remove('show');
    });

    document.addEventListener('click', function(event) {
        if (!menuContainer.contains(event.target) && !hiddenButton.contains(event.target)) {
            menuContainer.classList.remove('show');
            submenuContainer.classList.remove('show');
        }
    });
   
});
