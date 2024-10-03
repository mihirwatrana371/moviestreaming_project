document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        document.querySelector('.hero-carousel').style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.carousel-next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentSlide);

    const menuIcon = document.getElementById('menu-icon');
    const menuDropdown = document.getElementById('menu-dropdown');

    menuIcon.addEventListener('click', () => {
        menuDropdown.style.display = menuDropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target)) {
            menuDropdown.style.display = 'none';
        }
    });

    // Vertical Carousel for Recommended Movies
    let currentRecommendedSlide = 0;
    const recommendedSlides = document.querySelectorAll('.recommended-item');

    function showRecommendedSlide(index) {
        if (index >= recommendedSlides.length - 1) {
            currentRecommendedSlide = 0;
        } else if (index < 0) {
            currentRecommendedSlide = recommendedSlides.length - 2;
        } else {
            currentRecommendedSlide = index;
        }

        document.querySelector('.recommended-carousel').style.transform = `translateY(-${currentRecommendedSlide * 50}%)`;
    }

    document.querySelector('.recommended-prev').addEventListener('click', () => {
        showRecommendedSlide(currentRecommendedSlide - 1);
    });

    document.querySelector('.recommended-next').addEventListener('click', () => {
        showRecommendedSlide(currentRecommendedSlide + 1);
    });

    showRecommendedSlide(currentRecommendedSlide);
    // Login popup code
    const loginButton = document.querySelector('.login-button');
    const loginPopup = document.getElementById('login-popup');
    const closeButton = document.querySelector('.close-button');

    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });

});
