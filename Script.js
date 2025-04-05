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
