// Dark is the default. A reader's explicit choice takes precedence on later visits.
try {
  const saved = localStorage.getItem('twish-guide-theme');
  if (saved === 'light') document.documentElement.dataset.theme = 'light';
} catch {
  /* The default still works if browser storage is unavailable. */
}
