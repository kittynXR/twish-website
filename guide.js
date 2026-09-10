// The entire guide, catalog and help work without JS, in the default dark theme.
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  const updateThemeLabel = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    themeToggle.textContent = `${next === 'dark' ? 'Dark' : 'Light'} mode`;
    themeToggle.setAttribute('aria-label', `Switch to ${next} mode`);
  };
  themeToggle.hidden = false;
  updateThemeLabel();
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('twish-guide-theme', next); } catch { /* Optional preference only. */ }
    updateThemeLabel();
  });
}
const chapters = [...document.querySelectorAll('.chapter')];
const links = [...document.querySelectorAll('.contents a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const current = entries.find((entry) => entry.isIntersecting);
    if (!current) return;
    for (const link of links) {
      if (link.hash === `#${current.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-10% 0px -70% 0px' });
  chapters.forEach((chapter) => observer.observe(chapter));
}
