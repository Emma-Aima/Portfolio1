 // Close mobile nav when clicking on a link
 const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');
 mobileNavLinks.forEach(link => {
     link.addEventListener('click', () => {
         mobileNav.classList.remove('active');
         overlay.classList.remove('active');
         document.body.style.overflow = '';
     });
 });
 
 // Header scroll effect
 window.addEventListener('scroll', () => {
     const header = document.getElementById('header');
     if (window.scrollY > 100) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });

 // Animation on scroll
 const fadeElements = document.querySelectorAll('.fade-in');
        
 const fadeInOnScroll = () => {
     fadeElements.forEach(element => {
         const elementTop = element.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;
         
         if (elementTop < windowHeight - 100) {
             element.style.opacity = '1';
             element.style.transform = 'translateY(0)';
         }
     });
 };
 
 // Initialize elements as invisible
 fadeElements.forEach(element => {
     element.style.opacity = '0';
     element.style.transform = 'translateY(20px)';
     element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 });
 
 window.addEventListener('load', fadeInOnScroll);
 window.addEventListener('scroll', fadeInOnScroll);

 document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars when they come into view
    const skillItems = document.querySelectorAll('.skill-item');
    
    const animateSkills = () => {
        skillItems.forEach(item => {
            const skillBar = item.querySelector('.skill-progress');
            const percent = item.querySelector('.skill-info span:last-child').textContent;
            
            // Reset width for animation
            skillBar.style.width = '0';
            
            // Set the final width after a small delay
            setTimeout(() => {
                skillBar.style.width = percent;
            }, 100);
        });
    };
    
    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe the skills container
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        observer.observe(skillsContainer);
    }
    
    // Additional hover effects
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const skillBar = this.querySelector('.skill-progress');
            skillBar.style.transform = 'scaleY(1.2)';
            skillBar.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            const skillBar = this.querySelector('.skill-progress');
            skillBar.style.transform = 'scaleY(1)';
        });
    });
});

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.overlay');
        const closeBtn = document.querySelector('.close-btn');

        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
        });
        
        const fadeInElements = document.querySelectorAll('.fade-in');
        const delayElements = document.querySelectorAll('.delay-1, .delay-2, .delay-3, .delay-4');

        window.addEventListener('scroll', () => {
            fadeInElements.forEach((element) => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;

                if (elementPosition < screenPosition) {
                    element.classList.add('fade-in-active');
                }
            });

            delayElements.forEach((element) => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;

                if (elementPosition < screenPosition) {
                    element.classList.add('fade-in-active');
                }
            });
        });
