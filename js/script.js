document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const categorySection = document.getElementById('category-section');
    const carousel = document.getElementById('carousel');
    const cancelIcon = document.querySelector('.cancel-icon');
    const header = document.querySelector('header');
    const senterButtons = document.querySelector('.senter-buttons');
    const saleSliderDot = document.querySelector('.sale-slider-dot');
    let currentIndex = 0;

    const categories = [
        {
            headline: 'ტექნიკა',
            image: 'Image/category-item-image/1.png',
            items: [
                { name: 'მობილური და აქსესუარები', link: '#' },
                { name: 'კომპიუტერული ტექნიკა', link: '#' },
                { name: 'ტელევიზორები', link: '#' },
                { name: 'მუსიკალური ტექნიკა', link: '#' },
                { name: 'წვრილი ტექნიკა', link: '#' },
                { name: 'გეიმინგი', link: '#' },
                { name: 'აუდიოტექნიკა', link: '#' }
            ]
        },
        {
            headline: 'ბავშვის მოვლა',
            image: 'Image/category-item-image/2.png',
            link: '../html/baby-care.html',
            items: [
                { name: 'ბავშვის კვება', link: '../html/baby-food.html' },
                { name: 'საბავშვო ინვენტარი', link: '#' },
                { name: 'ბავშვის ტანსაცმელი', link: '#' },
                { name: 'აქსესუარები', link: '#' },
                { name: 'ბავშვის ჰიგიენა', link: '#' }
            ]
        },
        {
            headline: 'სახლი & მოვლა',
            image: 'Image/category-item-image/3.png',
            items: [
                { name: 'ავეჯი', link: '#' },
                { name: 'სამზარეულო & სერვირება', link: '#' },
                { name: 'ტექსტილი', link: '#' },
                { name: 'საფეხმავლო ნივთები', link: '#' },
                { name: 'აბაზანა', link: '#' },
                { name: 'დეკორი', link: '#' },
                { name: 'გათბობა', link: '#' }
            ]
        },
        {
            headline: 'თავის მოვლა',
            image: 'Image/category-item-image/4.png',
            items: [
                { name: 'სხეულის მოვლა', link: '#' },
                { name: 'სახის მოვლა', link: '#' },
                { name: 'თმის მოვლა', link: '#' },
                { name: 'დეკორატიული კოსმეტიკა', link: '#' },
                { name: 'პარფიუმერია', link: '#' },
                { name: 'ჰიგიენა', link: '#' },
                { name: 'კოსმეტიკური ნაკრებები', link: '#' }
            ]
        },
        {
            headline: 'სათამაშოები',
            image: 'Image/category-item-image/5.png',
            items: [
                { name: 'მობილური და აქსესუარები', link: '#' },
                { name: 'კომპიუტერული ტექნიკა', link: '#' },
                { name: 'ტელევიზორები', link: '#' },
                { name: 'მსხვილი ტექნიკა', link: '#' },
                { name: 'წვრილი ტექნიკა', link: '#' },
                { name: 'გეიმინგი', link: '#' },
                { name: 'აუდიო ტექნიკა', link: '#' }
            ]
        },
        {
            headline: 'ბარი & სხვა',
            image: 'Image/category-item-image/6.png',
            items: [
                { name: 'ღვინო', link: '#' },
                { name: 'ლუდი', link: '#' },
                { name: 'ვისკი', link: '#' },
                { name: 'ცქრიალა & შამპანიური', link: '#' },
                { name: 'ჯინი', link: '#' },
                { name: 'ტეკილა', link: '#' },
                { name: 'რომი', link: '#' }
            ]
        },
        {
            headline: 'წვეულება',
            image: 'Image/category-item-image/7.png',
            items: [
                { name: 'ბუშტები', link: '#' },
                { name: 'დეკორაციები', link: '#' },
                { name: 'ტორტის გაფორმება', link: '#' },
                { name: 'მაგიდის სერვირება', link: '#' },
                { name: 'კონფეტი', link: '#' },
                { name: 'კოსტუმები', link: '#' },
                { name: 'ჰელოვინი', link: '#' },
                { name: 'განათება', link: '#' }
            ]
        },
        {
            headline: 'წიგნები',
            image: 'Image/category-item-image/8.png',
            items: [
                { name: 'ბესტსელერი', link: '#' },
                { name: 'მხარვტული ლიტერატურა', link: '#' },
                { name: 'არამხატვრული', link: '#' },
                { name: 'საბავშვო ლიტერატურა', link: '#' },
                { name: 'თინეიჯერებისთვის', link: '#' },
                { name: 'ინგლისურენოვანი', link: '#' },
                { name: 'აქსესუარები კითხვისთვის', link: '#' }
            ]
        },
        {
            headline: 'ეზო & მებაღეობა',
            image: 'Image/category-item-image/9.png',
            items: [
                { name: 'ეზო & ვერანდის მოწყობა', link: '#' },
                { name: 'მცენარეების მოვლა', link: '#' },
                { name: 'ბაღის & ეზოს ინვენტარი', link: '#' },
                { name: 'ინსტრუმენტები', link: '#' },
                { name: 'ეზოს დეკორაცია', link: '#' }
            ]
        },
        {
            headline: 'საკანცელარიო ნივთები',
            image: 'Image/category-item-image/10.png',
            items: [
                { name: 'საოფისე', link: '#' },
                { name: 'სასკოლო', link: '#' },
                { name: 'ბლოკნოტი', link: '#' },
                { name: 'ხატისთვის  აქსესუარები', link: '#' },
                { name: 'სახისა და თმის აქსესუარები', link: '#' },
                { name: 'კრაფტები', link: '#' }
            ]
        },
        {
            headline: 'დასვენება & მოგზაურობა',
            image: 'Image/category-item-image/11.png',
            items: [
                { name: 'სამგზავრო ჩანთები', link: '#' },
                { name: 'ჩემოდნები', link: '#' },
                { name: 'ლაშქრობა', link: '#' },
                { name: 'ტანსაცმელი', link: '#' },
                { name: 'თევზაობა', link: '#' },
                { name: 'თერმო პროდუქტები', link: '#' }
            ]
        },
        {
            headline: 'ცხოველების მოვლა',
            image: 'Image/category-item-image/12.png',
            items: [
                { name: 'ძაღლი', link: '#' },
                { name: 'კატა', link: '#' },
                { name: 'თევზები', link: '#' },
                { name: 'ფრინველები', link: '#' },
                { name: 'მღრღნელები', link: '#' }
            ]
        },
        {
            headline: 'ჯანმრთელობა',
            image: 'Image/category-item-image/13.png',
            items: [
                { name: 'მედიკამენტები', link: '#' },
                { name: 'პირბადე', link: '#' },
                { name: 'ბახილი', link: '#' },
                { name: 'სამედიცინო ინვენტარი', link: '#' }
            ]
        },
        {
            headline: 'ფიტნესი',
            image: 'Image/category-item-image/14.png',
            items: [
                { name: 'წონებით ვარჯიში', link: '#' },
                { name: 'იოგა', link: '#' },
                { name: 'ჯვებითი დანამატები', link: '#' },
                { name: 'აქსესუარები', link: '#' },
                { name: 'სპორტული ფეხსაცმელი', link: '#' }
            ]
        },
        {
            headline: 'რემონტი & ხელსაწყოები',
            image: 'Image/category-item-image/15.png',
            items: [
                { name: 'ხელსაწყოები', link: '#' },
                { name: 'სამშენებლო მასალები', link: '#' },
                { name: 'სანტექნიკა', link: '#' },
                { name: 'გათბობა & გაგრილება', link: '#' },
                { name: 'შპალერი', link: '#' },
                { name: 'ბაღის ხელსაწყოები ', link: '#' }
            ]
        },
        {
            headline: 'ავტომობილი',
            image: 'Image/category-item-image/16.png',
            items: [
                { name: 'აქსესუარები', link: '#' },
                { name: 'ხელსაწყოები', link: '#' },
                { name: 'წმენდა & ავტოქიმია', link: '#' },
                { name: 'ზეთი, ანტიფრიზი და ფილტრი', link: '#' },
                { name: 'საბურავები', link: '#' },
                { name: 'ხუნდები', link: '#' },
                { name: 'ფილტრები', link: '#' },
                { name: 'აკუმულატორი', link: '#' }
            ]
        }
    ];

    function renderCategories() {
        const scrollableContent = document.querySelector('.scrollable-content');
        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('category-item');

            const categoryHeader = document.createElement('div');
            categoryHeader.classList.add('category-header');

            const headline = document.createElement('h3');
            headline.textContent = category.headline;

            const image = document.createElement('img');
            image.src = category.image;
            image.alt = category.headline + ' Image';

            categoryHeader.appendChild(headline);
            categoryHeader.appendChild(image);

            const itemList = document.createElement('ul');
            category.items.forEach(item => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = item.link;
                link.textContent = item.name;
                listItem.appendChild(link);
                itemList.appendChild(listItem);
            });

            categoryItem.appendChild(categoryHeader);
            categoryItem.appendChild(itemList);

            scrollableContent.appendChild(categoryItem);
        });
    }

  
    if (!burgerMenu) {
        console.error('burgerMenu element not found');
    } else {
        burgerMenu.addEventListener('click', () => {
            if (categorySection.style.display === 'none' || categorySection.style.display === '') {
                categorySection.style.display = 'flex';
                categorySection.classList.add('active');
                header.classList.add('disabled');
                senterButtons.classList.add('hidden'); // Hide senter-buttons
                saleSliderDot.classList.add('hidden'); 
            } else {
                categorySection.style.display = 'none';
                categorySection.classList.remove('active');
                header.classList.remove('disabled'); 
                senterButtons.classList.remove('hidden'); 
                saleSliderDot.classList.remove('hidden'); // Show sale-slider-dot
            }
        });
    }

    if (cancelIcon) {
        cancelIcon.addEventListener('click', () => {
            categorySection.style.display = 'none';
            categorySection.classList.remove('active');
            header.classList.remove('disabled');
            senterButtons.classList.remove('hidden'); // Show senter-buttons
            saleSliderDot.classList.remove('hidden'); 
        });
    } else {
        console.error('cancelIcon element not found');
    }


    function updateCarousel() {
        const slideWidth = document.querySelector('.carousel-slide').clientWidth;
        carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = document.querySelectorAll('.carousel-slide').length - 1;
        }
        updateCarousel();
    }

    function nextSlide() {
        if (currentIndex < document.querySelectorAll('.carousel-slide').length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    if (carousel) {
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    } else {
        console.error('carousel element not found');
    }

    document.addEventListener('click', event => {
        if (event.target.matches('.category-header h3')) {
            const categoryHeadline = event.target.textContent.trim();
            console.log('Clicked category:', categoryHeadline); // Debug log
            const category = categories.find(cat => cat.headline === categoryHeadline);
            if (category && category.link) {
                console.log('Navigating to:', category.link); // Debug log
                window.location.href = category.link;
            } else {
                console.error('Category not found or link missing for headline:', categoryHeadline);
            }
        }
    });

    renderCategories();
});