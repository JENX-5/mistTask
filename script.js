// script.js — safe registration of handlers (no crashes if elements missing)
document.addEventListener('DOMContentLoaded', function () {
  // Toggle text on Home page (triangle button)
  const triangleBtn = document.getElementById('triangle-btn');
  const toggleText = document.getElementById('toggle-text');

  if (triangleBtn) {
    triangleBtn.addEventListener('click', function () {
      // guard toggleText
      if (toggleText) {
        toggleText.classList.toggle('hidden');
        // update aria-pressed
        const pressed = triangleBtn.getAttribute('aria-pressed') === 'true';
        triangleBtn.setAttribute('aria-pressed', (!pressed).toString());
      }
    });
  }

  // Alert on About page
  const alertBtn = document.getElementById('alert-btn');
  if (alertBtn) {
    alertBtn.addEventListener('click', function () {
      // First try to read data attributes (so you can prefill)
      const presetName = alertBtn.dataset.name || '';
      const presetReg  = alertBtn.dataset.reg  || '';
      const presetPhone= alertBtn.dataset.phone|| '';

      // Ask in prompts only if preset values are empty
      const name = presetName || (prompt('Enter your name:', '') || '').trim();
      const reg  = presetReg  || (prompt('Enter registration number:', '') || '').trim();
      const phone= presetPhone|| (prompt('Enter phone number:', '') || '').trim();

      // Final display; always safe — no DOM writes that would crash
      alert(
        'Name: ' + (name || '(not provided)') + '\n' +
        'Registration No: ' + (reg || '(not provided)') + '\n' +
        'Phone: ' + (phone || '(not provided)')
      );
    });
  }
});