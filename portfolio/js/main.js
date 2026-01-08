// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Initialize Typed.js
const typed = new Typed('#typed', {
  strings: [
    'Software Engineer',
    'Backend Architect',
    'Cloud Solutions Specialist',
    'Full-Stack Developer'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const startCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + '+';
      }
    };
    updateCount();
  });
};

// Intersection Observer for Counters
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounters();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  observer.observe(statsSection);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Navbar height offset
        behavior: 'smooth'
      });
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.height = '70px';
    nav.style.lineHeight = '70px';
  } else {
    nav.style.height = '80px';
    nav.style.lineHeight = '80px';
  }
});
