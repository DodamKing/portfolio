// Typing effect
const phrases = [
    "Full-Stack Developer",
    "JavaScript Enthusiast",
    "Problem Solver",
    "Continuous Learner"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function getRandomTypingSpeed(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function typeEffect() {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingTextElement = document.getElementById('typing-text');

    if (!isDeleting && currentCharIndex <= currentPhrase.length) {
        typingTextElement.textContent = currentPhrase.slice(0, currentCharIndex);
        currentCharIndex++;
    }

    if (isDeleting && currentCharIndex >= 0) {
        typingTextElement.textContent = currentPhrase.slice(0, currentCharIndex);
        currentCharIndex--;
    }

    if (currentCharIndex === currentPhrase.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Wait for 2 seconds after completing the phrase
        return;
    }

    if (currentCharIndex === 0 && isDeleting) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? getRandomTypingSpeed(30, 50) : getRandomTypingSpeed(40, 80);
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate elements
gsap.from("h1", {opacity: 0, y: -50, duration: 1, ease: "power3.out"});

// Section animations
document.querySelectorAll('.section').forEach((section) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
    });
});

// Skill animations
gsap.to(".skill", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.7)"
});

// Project animations
document.querySelectorAll('.project').forEach((project, i) => {
    gsap.to(project, {
        scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Timeline animation
document.querySelectorAll('.timeline-container').forEach((container, i) => {
    gsap.to(container, {
        scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Contact links animation
gsap.to(".contact-links a", {
    scrollTrigger: {
        trigger: ".contact-links",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power3.out"
});

// Thumbnail click handler
document.querySelectorAll('.project').forEach(project => {
    const mainImage = project.querySelector('#main-image');
    const thumbnails = project.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImage.src = this.src;
            mainImage.alt = this.alt;
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});