const images = [
    "images/logo.png",
    "images/grass_cutting.jpg",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
];


let current = 0;
const slideImage = document.getElementById("slideImage");

document.querySelector(".left").addEventListener("click", () => {
    current--;
    if (current < 0) current = images.length - 1;
    slideImage.src = images[current];
});

document.querySelector(".right").addEventListener("click", () => {
    current++;
    if (current >= images.length) current = 0;
    slideImage.src = images[current];
});

/* ================= TESTIMONIAL SLIDER ================= */

let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(() => {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
}, 4000);


/* ================= SCROLL REVEAL ================= */

function revealOnScroll() {
    let reveals = document.querySelectorAll("section");

    reveals.forEach(section => {
        let windowHeight = window.innerHeight;
        let revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            section.classList.add("reveal", "active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* Animated Counter */
const counters = document.querySelectorAll('.counter');

function startCounters() {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(update, 10);
            } else {
                counter.innerText = target + "+";
            }
        };
        update();
    });
}

window.addEventListener("scroll", () => {
    const stats = document.querySelector(".stats-section");
    const position = stats.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
        startCounters();
    }
});

/* Simple Search Function */
const searchInput = document.querySelector(".search-box input");
const searchBtn = document.getElementById("searchBtn");

function performSearch() {
    const query = searchInput.value.toLowerCase();

    const sections = document.querySelectorAll("section, .services");

    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(query)) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        performSearch();
    }
});

setInterval(() => {
    current++;
    if (current >= images.length) current = 0;
    slideImage.src = images[current];
}, 5000);



