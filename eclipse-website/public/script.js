// Custom Cursor - Ultra Fluid
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const cursorSpeed = 1; // Instant
    const followerSpeed = 0.15; // Smooth follow
    
    cursorX += (mouseX - cursorX) * cursorSpeed;
    cursorY += (mouseY - cursorY) * cursorSpeed;
    
    followerX += (mouseX - followerX) * followerSpeed;
    followerY += (mouseY - followerY) * followerSpeed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor Hover Effects
const hoverElements = document.querySelectorAll('a, button, .faq-question, .module-header, #prevModule, #nextModule');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1200;
            let start = null;
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            
            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
            
            requestAnimationFrame(animation);
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    lastScroll = currentScroll;
});

// Section Reveal on Scroll - Smooth
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 100);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize first section if exists
const homeSection = document.querySelector('#home');
if (homeSection) {
    homeSection.classList.add('visible');
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle clicked
        if (!isActive) {
            faqItem.classList.add('active');
        } else {
            faqItem.classList.remove('active');
        }
    });
});

// Module Categories Accordion
document.querySelectorAll('.module-header').forEach(header => {
    header.addEventListener('click', () => {
        const moduleCategory = header.parentElement;
        const isActive = moduleCategory.classList.contains('active');
        
        // Close all
        document.querySelectorAll('.module-category').forEach(category => {
            if (category !== moduleCategory) {
                category.classList.remove('active');
            }
        });
        
        // Toggle clicked
        if (!isActive) {
            moduleCategory.classList.add('active');
        } else {
            moduleCategory.classList.remove('active');
        }
    });
});

// Module Slider
const slides = document.querySelectorAll('.module-slide');
if (slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slider = document.getElementById('moduleSlider');
    const prevBtn = document.getElementById('prevModule');
    const nextBtn = document.getElementById('nextModule');
    const categoryIndicator = document.getElementById('categoryIndicator');

    const categories = ['COMBAT', 'MISC', 'VISUAL', 'MOVEMENT', 'PLAYER', 'CORE', 'DEBUG'];

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        categoryIndicator.textContent = `${categories[currentSlide]} (${currentSlide + 1}/${totalSlides})`;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });
    }

    // Initialize
    updateSlider();
}

// Donate Modal
const modal = document.getElementById('donateModal');
const donateBtn = document.getElementById('donateBtn');
const modalClickArea = document.getElementById('modalClickArea');

if (donateBtn) {
    donateBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

if (modalClickArea) {
    modalClickArea.addEventListener('click', (e) => {
        if (e.target === modalClickArea) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('✓ Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('✗ Failed to copy');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 2500);
}

// Ripple Effect
document.querySelectorAll('button, a').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Parallax Effect - Removed for stability

// Console Easter Egg
console.log('%c🚀 Eclipse Client', 'color: #9933ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #9933ff;');
console.log('%c💜 Made with love by Sebastianuul', 'color: #b366ff; font-size: 16px;');
console.log('%c🎮 Best Minecraft Client Ever!', 'color: #fff; font-size: 14px;');
