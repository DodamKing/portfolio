// Animated background
VANTA.WAVES({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    // color: 0x2b28,
    color: 0x1A4A3D,
    shininess: 42.00,
    waveHeight: 20.00,
    waveSpeed: 1.05,
    zoom: 0.5,
})

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
        setTimeout(typeEffect, 2000); // 문구 완성 후 2초 대기
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
// gsap.from(".section", {opacity: 0, y: 50, duration: 1, stagger: 0.2, ease: "power3.out"});
// gsap.from(".skill", {opacity: 0, scale: 0.5, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)"});

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

// 썸네일 클릭
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

// 버튼 표시/숨김 처리
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// 버튼 클릭 시 맨 위로 스크롤
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 마우스 따라옴
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});