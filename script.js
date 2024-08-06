document.addEventListener('DOMContentLoaded', function() {
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselSlides.length;
        showSlide(currentIndex);
    });

    // Carousel automatic slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselSlides.length;
        showSlide(currentIndex);
    }, 5000);
});
