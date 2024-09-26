document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const carousel = document.querySelector('.carousel');
    const carouselWrap = document.querySelector('.carousel-wrap');
    let startX = 0;
    let endX = 0;

    function showSlide(index) {
        const slideCount = slides.length;

       
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100; 
        carousel.style.transform = `translateX(${offset}%)`; 

        console.log(`Showing slide ${currentIndex} with offset ${offset}%`);
    }

    function nextSlide() {
        console.log('Next slide');
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        console.log('Previous slide');
        showSlide(currentIndex - 1);
    }

   
    carouselWrap.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    carouselWrap.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });

    carouselWrap.addEventListener('touchend', function() {
        if (startX > endX + 50) {
            nextSlide(); 
        } else if (startX < endX - 50) {
            prevSlide(); 
        }
    });

   
    document.querySelector('.carousel-nav.prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-nav.next').addEventListener('click', nextSlide);

    showSlide(currentIndex);
});

