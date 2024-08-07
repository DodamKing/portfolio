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
    color: 0x2b28,
    shininess: 42.00,
    waveHeight: 20.00,
    waveSpeed: 1.05,
    zoom: 0.65
})

// Typing effect
const phrases = [
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    document.getElementById('typing-text').innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();

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

// Formspree form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you would typically send this data to a server
    // For this example, we'll just log it to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form
    this.reset();

    // Show a success message (you can replace this with a more user-friendly notification)
    alert('보내는 척만 해봤습니다!');
});