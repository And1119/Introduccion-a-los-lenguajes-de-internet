const abrirBtn = document.getElementById('abrirModalBtn');
const cerrarBtn = document.getElementById('cerrarModalBtn');
const overlay = document.getElementById('modalOverlay');
const modal = overlay.querySelector('.modal');

let lastFocusedElement = null;

function openModal() {
  lastFocusedElement = document.activeElement;
  overlay.classList.add('visible');
  overlay.setAttribute('aria-hidden', 'false');
  // poner foco en el modal para accesibilidad
  modal.focus();
  document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
  overlay.classList.remove('visible');
  overlay.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', handleKeyDown);
  if (lastFocusedElement) lastFocusedElement.focus();
}

function handleKeyDown(e) {
  if (e.key === 'Escape') {
    closeModal();
    return;
  }

  // Simple focus trap (ciclo cuando hay tab)
  if (e.key === 'Tab') {
    const focusable = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) {
      e.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  }
}

abrirBtn.addEventListener('click', openModal);
cerrarBtn.addEventListener('click', closeModal);

// Cerrar si se hace clic en el overlay (pero no en el modal)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});
