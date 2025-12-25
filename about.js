// Scroll-based animations for About Us page
document.addEventListener("DOMContentLoaded", () => {
    // Select all text and images except hero image
    const animatedElements = document.querySelectorAll(
        ".about-intro .about-line, " +    // Serving our community text
        ".hospital h2, .hospital p, .hospital-gallery img, " +  // Hospital section
        ".team-section h2, .team-section p, .team-member img, .team-member h3, .team-member p" // Team section
    );

    // Initially hide all elements
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.7s ease-out";
    });

    // Function to check if element is in viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
        );
    }

    // Animate elements on scroll
    function animateOnScroll() {
        animatedElements.forEach(el => {
            if (isInViewport(el)) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    // Run on page load and scroll
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
});

// Slide-in animation for SERVING COMMUNITY box
const aboutIntro = document.querySelector(".about-intro");

const introObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.3 }
);

if (aboutIntro) {
    introObserver.observe(aboutIntro);
}

