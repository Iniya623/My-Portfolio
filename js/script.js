// ==================== 
// TYPING ANIMATION 
// ==================== 
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Blink cursor after typing completes
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.animation = 'blink 1s infinite';
            }
        }
    }
    
    type();
}

// Initialize typing animation on page load
window.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typingText');
    if (typingText) {
        const texts = [
            'Hello, I\'m Esakkiammal',
            'Welcome to My Portfolio',
            'Java Full Stack Developer'
        ];
        let currentIndex = 0;
        
        function cycleTexts() {
            typeWriter(typingText, texts[currentIndex], 100);
            currentIndex = (currentIndex + 1) % texts.length;
            
            // Wait for typing to complete + delay before next text
            setTimeout(() => {
                // Clear text quickly
                typingText.textContent = '';
                setTimeout(cycleTexts, 500);
            }, texts[currentIndex === 0 ? texts.length - 1 : currentIndex - 1].length * 100 + 2000);
        }
        
        cycleTexts();
    }
});

// ==================== 
// NAVIGATION 
// ==================== 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    lastScroll = currentScroll;
});

// ==================== 
// SMOOTH SCROLL 
// ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 
// INTERSECTION OBSERVER FOR ANIMATIONS 
// ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Stagger animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Stagger animation for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Stagger animation for about cards
const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Stagger animation for resume sections
const resumeSections = document.querySelectorAll('.resume-section-content');
resumeSections.forEach((section, index) => {
    section.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(section);
});

// ==================== 
// PARTICLES ANIMATION 
// ==================== 
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.backgroundColor = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = '0.6';
        
        // Animate particle movement
        particle.style.animation = `particleFloat ${duration}s ${delay}s infinite ease-in-out`;
        
        particlesContainer.appendChild(particle);
    }
}

// Add particle float animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
        }
        25% {
            transform: translate(20px, -20px) scale(1.2);
            opacity: 0.8;
        }
        50% {
            transform: translate(-20px, 20px) scale(0.8);
            opacity: 0.4;
        }
        75% {
            transform: translate(20px, 20px) scale(1.1);
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// ==================== 
// SKILL BAR ANIMATION 
// ==================== 
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target;
            const width = progress.style.width;
            progress.style.width = '0';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
            skillObserver.unobserve(progress);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ==================== 
// PROJECT CARD HOVER EFFECTS 
// ==================== 
const projectCardImages = document.querySelectorAll('.project-image img');
projectCardImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== 
// ACTIVE NAV LINK HIGHLIGHTING 
// ==================== 
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath.split('/').pop() || 
            (currentPath === '/' || currentPath.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Update active link on page load
window.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ==================== 
// LOADING ANIMATION (OPTIONAL) 
// ==================== 
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ==================== 
// PARALLAX EFFECT 
// ==================== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.profile-image-wrapper, .hero-text');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ==================== 
// SOCIAL ICON ANIMATIONS 
// ==================== 
const socialIcons = document.querySelectorAll('.social-icon, .footer-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== 
// SMOOTH PAGE TRANSITIONS 
// ==================== 
document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname && 
        link.pathname !== window.location.pathname) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Add fade out effect
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    }
});

// Restore opacity on page load
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

// ==================== 
// FORM VALIDATION (IF NEEDED) 
// ==================== 
// This section can be expanded if contact forms are added later

// ==================== 
// UTILITY FUNCTIONS 
// ==================== 
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler for better performance
const handleScroll = debounce(() => {
    // Scroll-related functions can be added here
}, 10);

window.addEventListener('scroll', handleScroll);

