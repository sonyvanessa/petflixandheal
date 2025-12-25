// ================================
// SERVICES SECTION ANIMATION
// ================================
const servicesContent = document.querySelector('.services-content');

function revealServices() {
    const windowHeight = window.innerHeight;
    const elementTop = servicesContent.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
        servicesContent.classList.add('visible');
    }
}

window.addEventListener('scroll', revealServices);
revealServices(); // trigger on page load

// ================================
// REVIEWS SLIDER & ANIMATION
// ================================
const reviewsTrack = document.getElementById("reviewsTrack");
const reviews = document.querySelectorAll(".review");
let currentIndex = 0;

function updateReviewPosition() {
    const reviewWidth = reviews[0].offsetWidth;
    reviewsTrack.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;
}

function prevReview() {
    if (currentIndex > 0) currentIndex--;
    updateReviewPosition();
}

function nextReview() {
    if (currentIndex < reviews.length - 1) currentIndex++;
    updateReviewPosition();
}

window.addEventListener("resize", updateReviewPosition);

// Reviews fade-in animation
function revealReviews() {
    const windowHeight = window.innerHeight;
    reviews.forEach((review, index) => {
        const elementTop = review.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            setTimeout(() => review.classList.add('visible'), index * 200);
        }
    });
}

window.addEventListener('scroll', revealReviews);
revealReviews(); // trigger on load

// ================================
// COME VISIT US TODAY ANIMATION
// ================================
const contactSection = document.querySelector('.contactpreview');
const contactLines = contactSection.querySelectorAll('p, b, span');

function revealContact() {
    const windowHeight = window.innerHeight;
    const elementTop = contactSection.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
        contactSection.classList.add('slide-in');
    }
    contactLines.forEach((line, i) => {
        const lineTop = line.getBoundingClientRect().top;
        if (lineTop < windowHeight - 50) {
            setTimeout(() => line.classList.add('visible'), i * 150);
        }
    });
}

window.addEventListener('scroll', revealContact);
revealContact();

// ================================
// REVIEWS IMAGE ANIMATION (from left)
// ================================
const reviewImage = document.querySelector('.review-image');

function revealReviewImage() {
    if (!reviewImage) return;
    const windowHeight = window.innerHeight;
    const elementTop = reviewImage.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
        reviewImage.classList.add('visible');
        window.removeEventListener('scroll', revealReviewImage);
    }
}

window.addEventListener('scroll', revealReviewImage);
revealReviewImage();

// Reviews section scroll-based reveal
const reviewsSection = document.querySelector('.reviews');
const reviewHeading = document.querySelector('.reviews-content h2');
const reviewStars = document.querySelector('.stars');
const reviewItems = document.querySelectorAll('.review');

function revealReviewsScroll() {
    const windowHeight = window.innerHeight;

    if (reviewHeading) {
        const top = reviewHeading.getBoundingClientRect().top;
        if (top < windowHeight - 100) reviewHeading.classList.add('visible');
    }

    if (reviewStars) {
        const top = reviewStars.getBoundingClientRect().top;
        if (top < windowHeight - 100) reviewStars.classList.add('visible');
    }

    // Staggered reveal for review texts
    reviewItems.forEach((review, index) => {
        const top = review.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            setTimeout(() => review.classList.add('visible'), index * 200);
        }
    });
}

window.addEventListener('scroll', revealReviewsScroll);
revealReviewsScroll(); // trigger on load

// ================================
// ABOUT US ANIMATION
// ================================
const aboutSection = document.querySelector('.aboutus');
if (aboutSection) {
    const aboutElements = aboutSection.querySelectorAll('h1, p, a');

    function revealAbout() {
        const windowHeight = window.innerHeight;
        const elementTop = aboutSection.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            aboutElements.forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 200);
            });
            window.removeEventListener('scroll', revealAbout);
        }
    }

    window.addEventListener('scroll', revealAbout);
    revealAbout();
}

// Scroll-based reveal for About Us
const aboutText = document.querySelector('.aboutus-text');
const aboutImage = document.querySelector('.aboutus-image');
const aboutButton = document.querySelector('.buttonabout');

function revealAboutUs() {
    const windowHeight = window.innerHeight;

    if (aboutText) {
        const textTop = aboutText.getBoundingClientRect().top;
        if (textTop < windowHeight - 100) {
            aboutText.classList.add('visible');
        }
    }

    if (aboutImage) {
        const imageTop = aboutImage.getBoundingClientRect().top;
        if (imageTop < windowHeight - 100) {
            aboutImage.classList.add('visible');
        }
    }

    if (aboutButton) {
        const buttonTop = aboutButton.getBoundingClientRect().top;
        if (buttonTop < windowHeight - 100) {
            aboutButton.classList.add('visible');
        }
    }
}

window.addEventListener('scroll', revealAboutUs);
revealAboutUs(); // trigger on load

