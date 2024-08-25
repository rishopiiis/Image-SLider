
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = index => {
    // Ensure index is within bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Update the slider position
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Initialize slider
showSlide(currentIndex);
