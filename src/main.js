  // Reveal sections as they enter the viewport; keep the page usable without IntersectionObserver.
  document.documentElement.classList.add('reveal-ready');
  const revealTargets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      revealObserver.observe(element);
    });
  } else {
    revealTargets.forEach(element => element.classList.add('is-visible'));
  }
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiry-form');
const note = document.getElementById('form-note');
const submitButton = document.getElementById('form-submit');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const originalButtonText = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.innerHTML = 'Sending…';
  note.textContent = 'Sending your enquiry. Please wait.';

  try {
    const response = await fetch('https://formsubmit.co/ajax/rrk736@gmail.com', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    const result = await response.json();

    if (!response.ok || result.success !== 'true') {
      throw new Error(result.message || 'Email service error');
    }

    form.reset();
    note.textContent = 'Thank you! Your enquiry has been sent successfully. Our team will get back to you.';
  } catch (error) {
    note.textContent = 'We could not send your enquiry right now. Please email rrk736@gmail.com directly.';
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  }
});

  
  // Staggered entrance for capability, industry and leadership cards.
  const livelyTargets = document.querySelectorAll(
    '.capability-row, .industry-card, .leader-card, .principle-band, .signal-strip > div, .method-steps > div'
  );
  livelyTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${(index % 4) * 85}ms`;
  });
  if ('IntersectionObserver' in window) {
    const livelyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -25px 0px' });
    livelyTargets.forEach(element => livelyObserver.observe(element));
  } else {
    livelyTargets.forEach(element => element.classList.add('is-visible'));
  }

  // Small pointer-follow highlight on cards for a more tactile interface.
  document.querySelectorAll('.industry-card, .leader-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    });
  });


  // Subtle pointer parallax makes the hero illustration feel tactile, not static.
  const heroArt = document.querySelector('.hero-art');
  const motionOff = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroArt && !motionOff && window.matchMedia('(pointer:fine)').matches) {
    heroArt.addEventListener('pointermove', (event) => {
      const bounds = heroArt.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width - 0.5;
      const py = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroArt.style.transform = `perspective(1000px) rotateY(${px * 3.5}deg) rotateX(${-py * 3.5}deg) translateY(-3px)`;
    });
    heroArt.addEventListener('pointerleave', () => {
      heroArt.style.transform = '';
    });
  }


  // Back to top / logo links: the #top target is the sticky header, so scroll to 0 explicitly.
  document.querySelectorAll('a[href="#top"]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', location.pathname + location.search);
    });
  });
