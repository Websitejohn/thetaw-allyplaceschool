document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.banner');
    const bannerWrapper = document.querySelector('.banner-wrapper');
    const leftArrow = document.querySelector('.scroll-arrow.left a img');
    const rightArrow = document.querySelector('.scroll-arrow.right a img');
    let currentIndex = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            bannerWrapper.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        }
    }

    leftArrow.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection((currentIndex - 1 + sections.length) % sections.length);
    });

    rightArrow.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection((currentIndex + 1) % sections.length);
    });

    function autoScroll() {
        scrollToSection((currentIndex + 1) % sections.length);
    }

    setInterval(autoScroll, 10000); // Change every 10 seconds
});
