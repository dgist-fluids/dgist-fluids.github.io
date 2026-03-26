// ── Scroll Reveal (IntersectionObserver) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

// ── Smart Navbar (hide on scroll down, show on scroll up) ──
(function() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll && currentScroll > 80) {
          navbar.classList.add('nav-hidden');
        } else {
          navbar.classList.remove('nav-hidden');
        }
        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ── Research Card Spotlight Hover ──
document.querySelectorAll('[data-spotlight]').forEach(card => {
  const spotlight = card.querySelector('.card-spotlight');
  if (!spotlight) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(74,158,255,0.08), transparent 40%)`;
  });
  card.addEventListener('mouseleave', () => {
    spotlight.style.background = 'none';
  });
});
