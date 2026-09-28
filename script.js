const grid = document.getElementById('project-grid');
const projectsSection = document.getElementById('projecten');
const cards = [...document.querySelectorAll('.project-card')];
const details = [...document.querySelectorAll('.project-detail')];

function closeAll() {
  cards.forEach(card => {
    card.classList.remove('active');
    card.querySelector('.project-trigger').setAttribute('aria-expanded', 'false');
  });
  details.forEach(detail => { detail.hidden = true; });
  projectsSection.classList.remove('open-on-last-row');
}

function columnCount() {
  const columns = getComputedStyle(grid).gridTemplateColumns;
  return Math.max(1, columns.split(' ').filter(Boolean).length);
}

function placeDetail(card, detail) {
  const columns = columnCount();
  const index = cards.indexOf(card);
  const rowEndIndex = Math.min(cards.length - 1, Math.floor(index / columns) * columns + columns - 1);
  cards[rowEndIndex].after(detail);
  projectsSection.classList.toggle('open-on-last-row', rowEndIndex === cards.length - 1);
}

cards.forEach(card => {
  const trigger = card.querySelector('.project-trigger');
  trigger.addEventListener('click', () => {
    const detail = document.querySelector(`[data-detail="${card.dataset.project}"]`);
    const alreadyOpen = card.classList.contains('active');
    closeAll();
    if (alreadyOpen) return;

    placeDetail(card, detail);
    card.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
    detail.hidden = false;

    requestAnimationFrame(() => {
      const y = detail.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
});

document.querySelectorAll('.close-project').forEach(button => {
  button.addEventListener('click', () => {
    const detail = button.closest('.project-detail');
    const card = document.querySelector(`[data-project="${detail.dataset.detail}"]`);
    closeAll();
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const active = document.querySelector('.project-card.active');
    if (!active) return;
    const detail = document.querySelector(`[data-detail="${active.dataset.project}"]`);
    placeDetail(active, detail);
  }, 80);
});

// v24: prevent the client strip from drifting before the user reaches it.
// This makes the mobile carousel enter from its intended first full logo.
(() => {
  const marquee = document.querySelector('.client-marquee');
  const track = document.querySelector('.client-track');
  if (!marquee || !track || !('IntersectionObserver' in window)) return;
  track.classList.add('marquee-waiting');
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      track.classList.remove('marquee-waiting');
      observer.disconnect();
    }
  }, { threshold: 0.15 });
  observer.observe(marquee);
})();
