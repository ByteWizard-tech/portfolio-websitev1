/* ═══════════════════════════════════════
   SCROLL REVEAL (Intersection Observer)
   ═══════════════════════════════════════ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ═══════════════════════════════════════
   NAVBAR — scroll effect & active link
   ═══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Navbar background on scroll
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active nav link based on scroll
    let currentSection = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

/* ═══════════════════════════════════════
   MOBILE NAV TOGGLE
   ═══════════════════════════════════════ */
const navToggle = document.getElementById('navToggle');
const navLinksContainer = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinksContainer.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinksContainer.classList.remove('open');
    });
});

