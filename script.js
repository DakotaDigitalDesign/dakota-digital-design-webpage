// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active section tracking
    let activeSection = 'home';
    const navTabs = document.querySelectorAll('.nav-tab');
    const mobileContactBtn = document.querySelector('.mobile-contact-btn');
    
    // Smooth scroll function
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    }
    
    // Set active navigation tab
    function setActiveSection(sectionId) {
        activeSection = sectionId;
        navTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.section === sectionId) {
                tab.classList.add('active');
            }
        });
    }
    
    // Add click listeners to navigation tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            scrollToSection(tab.dataset.section);
        });
    });
    
    // Mobile contact button
    if (mobileContactBtn) {
        mobileContactBtn.addEventListener('click', () => {
            scrollToSection('contact');
        });
    }
    
    // Scroll spy functionality
    function handleScroll() {
        const sections = ['home', 'services', 'portfolio', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    if (activeSection !== section) {
                        setActiveSection(section);
                    }
                    break;
                }
            }
        }
    }
    
    // Throttled scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 10);
    });
    
    // CTA Button functionality
    const ctaButtons = document.querySelectorAll('.btn-cta, .btn[data-action="contact"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // If the button text contains "website" or "consultation", scroll to contact
            const buttonText = button.textContent.toLowerCase();
            if (buttonText.includes('website') || buttonText.includes('consultation') || buttonText.includes('quote')) {
                e.preventDefault();
                scrollToSection('contact');
            }
        });
    });
    
    // "See Our Work" button functionality
    const seeWorkButtons = document.querySelectorAll('.btn');
    seeWorkButtons.forEach(button => {
        if (button.textContent.includes('See Our Work')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToSection('portfolio');
            });
        }
    });
    
    // Phone number buttons
    const phoneButtons = document.querySelectorAll('.btn');
    phoneButtons.forEach(button => {
        if (button.textContent.includes('Call (701)')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'tel:7018409830';
            });
        }
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Basic validation
            if (!data.name || !data.email || !data.project) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission (in a real implementation, this would send to a server)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you within 2 hours.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize animation styles
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add scroll listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial animation check
    animateOnScroll();
    
    // Hero card floating animation enhancement
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        let mouseX = 0;
        let mouseY = 0;
        let cardX = 0;
        let cardY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 50;
            mouseY = (e.clientY - window.innerHeight / 2) / 50;
        });
        
        function animateCard() {
            cardX += (mouseX - cardX) * 0.1;
            cardY += (mouseY - cardY) * 0.1;
            
            if (heroCard) {
                heroCard.style.transform = `translate(${cardX}px, ${cardY}px)`;
            }
            
            requestAnimationFrame(animateCard);
        }
        
        animateCard();
    }
    
    // Button click effects
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Parallax effect for hero section
    function parallaxScroll() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    }
    
    // Throttled parallax scroll
    let parallaxTimeout;
    window.addEventListener('scroll', () => {
        if (parallaxTimeout) {
            clearTimeout(parallaxTimeout);
        }
        parallaxTimeout = setTimeout(parallaxScroll, 10);
    });
    
    // Counter animation for portfolio results
    function animateCounters() {
        const counters = document.querySelectorAll('.result-number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isDollar = target.includes('$');
            const isPlus = target.includes('+');
            
            let numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
            let current = 0;
            const increment = numericTarget / 100;
            
            const updateCounter = () => {
                if (current < numericTarget) {
                    current += increment;
                    let displayValue = Math.ceil(current);
                    
                    if (isDollar) {
                        counter.textContent = `$${displayValue}K+`;
                    } else if (isPercentage) {
                        counter.textContent = `${displayValue}%`;
                    } else if (isPlus) {
                        counter.textContent = `${displayValue}+`;
                    } else {
                        counter.textContent = displayValue;
                    }
                    
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Check if counter is in viewport
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                updateCounter();
            }
        });
    }
    
    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        counterObserver.observe(portfolioSection);
    }
    
    // Smooth reveal animations for sections
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Apply reveal animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(section);
    });
    
    // Header background opacity on scroll
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const opacity = Math.min(scrolled / 100, 0.95);
            navigation.style.backgroundColor = `rgba(255, 255, 255, ${0.8 + opacity * 0.2})`;
        });
    }
});

// Service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('SW registered'))
        .catch(error => console.log('SW registration failed'));
}