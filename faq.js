

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Show slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.querySelector('.faq-overlay').classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            // Animate overlay
            setTimeout(() => {
                slide.querySelector('.faq-overlay').classList.add('active');
            }, 100);
        }
    });
}

// Next/Prev functions
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize
showSlide(currentSlide);


document.addEventListener("DOMContentLoaded", () => {

    const faqHeading = document.querySelector(".faq-heading");

    function animateFaqHeading() {
        const windowHeight = window.innerHeight;
        const elementTop = faqHeading.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            faqHeading.classList.add("active");
        }
    }

    window.addEventListener("scroll", animateFaqHeading);
    animateFaqHeading(); // run on page load
});