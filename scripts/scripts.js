const darkModeToggle = document.getElementById('checkbox');
        const body = document.body;
        const header = document.querySelector('header');
    
        // Check for saved 'darkMode' in localStorage
        let darkMode = localStorage.getItem('darkMode');
    
        const enableDarkMode = () => {
          body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
        }
    
        const disableDarkMode = () => {
          body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', null);
        }
    
        // If the user already visited and enabled darkMode
        // start things off with it on
        if (darkMode === 'enabled') {
          enableDarkMode();
          darkModeToggle.checked = true;
        }
    
        // When someone clicks the button
        darkModeToggle.addEventListener('click', () => {
          darkMode = localStorage.getItem('darkMode'); 
          if (darkMode !== 'enabled') {
            enableDarkMode();
          } else {  
            disableDarkMode(); 
          }
        });
    
        // Header scroll effect
        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        });
    
        // Intersection Observer for fade-in effect
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
    
        document.querySelectorAll('.fade-in, .stagger-fade-in').forEach(el => {
          observer.observe(el);
        });