// Sticky nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal-on-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

// Force all external links to open in a new tab
document.querySelectorAll('a[href^="http"]').forEach((a) => {
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener noreferrer');
});
