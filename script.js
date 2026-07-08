document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = "Thanks! We'll be in touch shortly to get your vehicle scheduled.";
    form.reset();
  });
}

/* Scroll-triggered reveal animations */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach((el) => revealObserver.observe(el));

/* Parallax hero background + scroll progress bar */
const heroBg = document.getElementById('hero-bg');
const progressBar = document.getElementById('scroll-progress');

function onScroll() {
  const scrollY = window.scrollY;

  if (heroBg) {
    heroBg.style.transform = `translateY(${scrollY * 0.25}px)`;
  }

  if (progressBar) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  }
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});

onScroll();
