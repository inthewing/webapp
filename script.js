// Counter functionality
let counterValue = 0;

function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
    addCounterAnimation('increment');
}

function decrementCounter() {
    counterValue--;
    updateCounterDisplay();
    addCounterAnimation('decrement');
}

function updateCounterDisplay() {
    const counterElement = document.getElementById('counter-value');
    counterElement.textContent = counterValue;
    
    // Add color coding based on value
    if (counterValue > 0) {
        counterElement.style.color = '#059669'; // green
    } else if (counterValue < 0) {
        counterElement.style.color = '#dc2626'; // red
    } else {
        counterElement.style.color = '#1e293b'; // default
    }
}

function addCounterAnimation(type) {
    const counterElement = document.getElementById('counter-value');
    counterElement.style.transform = 'scale(1.2)';
    counterElement.style.transition = 'transform 0.2s ease';
    
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 200);
}

// Smooth scrolling to features section
function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form
    event.target.reset();
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Navigation highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Add active state styles for navigation
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #2563eb !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Scroll event listener for navigation highlighting
window.addEventListener('scroll', updateActiveNavLink);

// Intersection Observer for animations
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
    const animatedElements = document.querySelectorAll('.feature-card, .counter-section, .contact-form');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Add mobile menu styles
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-links li {
            margin: 0.5rem 0;
        }
    }
`;
document.head.appendChild(mobileStyle);

// Keyboard navigation support
document.addEventListener('keydown', (event) => {
    // ESC key to close mobile menu
    if (event.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('mobile-open');
    }
    
    // Arrow keys for counter
    if (event.key === 'ArrowUp') {
        incrementCounter();
    } else if (event.key === 'ArrowDown') {
        decrementCounter();
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('Simple Web App loaded successfully!');
    
    // Add some initial interactivity
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Add click effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
        });
    });
});
