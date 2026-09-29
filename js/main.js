// Jaydee & Andrea — wedding invitation scripts
// play the hero entrance as soon as the page loads
document.getElementById('hero').classList.add('show');

// ----- FAQ accordion -----
const faqList = document.getElementById('faqList');
if (faqList) {
  faqList.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close any other open item (accordion behavior)
      faqList.querySelectorAll('.faq-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
    });
  });
}
// ----- Hero RSVP button scrolls to the RSVP section -----
const heroRsvp = document.getElementById('heroRsvp');
const rsvpSection = document.querySelector('.rsvp');
if (heroRsvp && rsvpSection) {
  heroRsvp.addEventListener('click', (e) => {
    // if no external RSVP link is set, smooth-scroll to the RSVP section
    if (heroRsvp.getAttribute('href') === '#') {
      e.preventDefault();
      rsvpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}


// ----- Background music toggle -----
(function () {
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  if (!audio || !btn) return;
  const TARGET = 0.6;
  let fadeTimer = null;
  let resumeOnReturn = false;

  function fadeTo(vol, done) {
    clearInterval(fadeTimer);
    fadeTimer = setInterval(() => {
      const step = vol > audio.volume ? 0.05 : -0.08;
      const next = audio.volume + step;
      if ((step > 0 && next >= vol) || (step < 0 && next <= vol)) {
        audio.volume = vol; clearInterval(fadeTimer); if (done) done();
      } else { audio.volume = Math.max(0, Math.min(1, next)); }
    }, 60);
  }
  function setUI(playing) {
    btn.classList.toggle('playing', playing);
    btn.setAttribute('aria-pressed', String(playing));
    btn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
  }
  function play() {
    audio.volume = 0;
    audio.play().then(() => { setUI(true); fadeTo(TARGET); }).catch(() => setUI(false));
  }
  function pause() {
    fadeTo(0, () => audio.pause());
    setUI(false);
  }
  btn.addEventListener('click', () => {
    btn.classList.remove('hint');
    if (audio.paused || btn.getAttribute('aria-pressed') === 'false') play(); else pause();
  });
  // pause when the guest switches apps/tabs, resume when they come back
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeOnReturn = !audio.paused;
      if (resumeOnReturn) { audio.pause(); }
    } else if (resumeOnReturn) {
      audio.play().catch(() => setUI(false));
    }
  });
})();

// ----- Fade-up on scroll -----
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  // tag the direct content of each content section for staggered reveal
  const targets = [];
  document.querySelectorAll('.savedate, [aria-label="Venue"], .attire, .rsvp').forEach(sec => {
    Array.from(sec.children).forEach(child => {
      // skip background/overlay layers, flourishes, and dividers (their lines must not be transformed)
      if (child.classList.contains('vp') ||
          child.classList.contains('rule-flourish') ||
          child.classList.contains('between-divider') ||
          child.tagName === 'STYLE') return;
      child.classList.add('reveal');
      targets.push(child);
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  targets.forEach((t, i) => {
    t.style.transitionDelay = (Math.min(i % 6, 5) * 0.08) + 's';
    io.observe(t);
  });
}
  
