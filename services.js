document.addEventListener("DOMContentLoaded", () => {

    /* HERO TEXT ANIMATION */
    const heroText = document.querySelector(".services-hero h1");

    const heroObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroText.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    heroObserver.observe(heroText);


    /* SERVICE CARDS STAGGERED SCROLL ANIMATION */
    const cards = document.querySelectorAll(".service-card");

    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 150); // stagger effect
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => cardObserver.observe(card));

});