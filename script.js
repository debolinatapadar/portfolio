const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
window.addEventListener('pointermove', (event) => {
  if (!dot || !ring) return;
  dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  ring.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

document.querySelectorAll('a, button, .project').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    ring?.style.setProperty('height', '44px');
    ring?.style.setProperty('width', '44px');
  });
  element.addEventListener('mouseleave', () => {
    ring?.style.setProperty('height', '29px');
    ring?.style.setProperty('width', '29px');
  });
});

document.querySelectorAll('.tilt-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (window.innerWidth < 760) return;
    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    card.style.transform = `perspective(900px) rotateX(${y * -2.3}deg) rotateY(${x * 2.3}deg) translateY(-5px)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
});
