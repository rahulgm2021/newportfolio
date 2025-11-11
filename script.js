// Smooth scroll for contact button
const contactButton = document.querySelector('.contact-button');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.cert-card, .achievement-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Animate geometric shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        shape.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
});

// Add floating animation for geometric shapes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
        }
    }
`;
document.head.appendChild(style);

// Social media link handlers (update with actual URLs)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        // Add your social media URLs here
        const href = icon.getAttribute('href');
        if (!href || href === '#') {
            e.preventDefault();
            // You can add alert or console.log here
            console.log('Add your social media URLs in the HTML');
        }
    });
});

// Contact email click handler
const contactEmail = document.querySelector('.contact-email span');
if (contactEmail) {
    contactEmail.style.cursor = 'pointer';
    contactEmail.addEventListener('click', () => {
        window.location.href = 'mailto:your.email@example.com';
    });
}

// Add hover effect to certification cards
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--yellow-accent)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--text-black)';
    });
});
