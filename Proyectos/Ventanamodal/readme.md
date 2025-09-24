DOCUMENTACIÓN - VENTANA MODAL INTERACTIVA

Archivo: index.html
-------------------
<!DOCTYPE html> → Declara que el documento es HTML5.
<html lang="es"> → Raíz HTML y define idioma español.
<head> → Inicio de la sección con metadatos.
  <meta charset="utf-8" /> → Codificación de caracteres UTF-8.
  <meta name="viewport" content="width=device-width,initial-scale=1" /> → Escalado correcto en dispositivos móviles.
  <title>Modal Interactivo</title> → Título en la pestaña del navegador.
  <link rel="stylesheet" href="style.css" /> → Conexión al archivo CSS.
</head>
<body>
  <button id="abrirModalBtn">Mostrar Términos</button> → Botón que abre el modal.

  <div id="modalOverlay" class="overlay" aria-hidden="true"> → Contenedor del overlay (fondo oscuro).
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalDesc" tabindex="-1">
      <h2 id="modalTitle">Términos y Condiciones</h2> → Título del modal.
      <p id="modalDesc">Este es un ejemplo de ventana modal creada con HTML, CSS y JavaScript.</p> → Texto descriptivo.
      <button id="cerrarModalBtn">Cerrar</button> → Botón para cerrar el modal.
    </div>
  </div>

  <script src="script.js"></script> → Conexión al archivo JavaScript.
</body>
</html>


Archivo: style.css
------------------
:root { --overlay-bg: rgba(0,0,0,0.5); } → Variable para el color del fondo oscuro.
html, body { height: 100%; margin: 0; font-family: Arial, Helvetica, sans-serif; } → Ajustes iniciales de página.

#abrirModalBtn { padding: 10px 18px; font-size: 16px; cursor: pointer; margin: 24px; } → Estilo para el botón abrir.

.overlay { position: fixed; inset: 0; display: none; justify-content: center; align-items: center; background-color: var(--overlay-bg); z-index: 1000; } → Overlay cubre toda la pantalla, oculto por defecto.

.overlay.visible { display: flex; } → Clase que muestra el overlay.

.modal { background: #ffffff; padding: 20px; border-radius: 8px; max-width: 520px; width: 90%; box-shadow: 0 8px 24px rgba(0,0,0,0.3); outline: none; } → Caja modal centrada con estilos visuales.

#cerrarModalBtn { margin-top: 16px; padding: 8px 14px; cursor: pointer; } → Estilo del botón cerrar.


Archivo: script.js
------------------
const abrirBtn = document.getElementById('abrirModalBtn'); → Referencia al botón abrir.
const cerrarBtn = document.getElementById('cerrarModalBtn'); → Referencia al botón cerrar.
const overlay = document.getElementById('modalOverlay'); → Referencia al overlay.
const modal = overlay.querySelector('.modal'); → Referencia al modal.

let lastFocusedElement = null; → Guarda el último elemento enfocado antes de abrir el modal.

function openModal() { → Abre el modal.
  lastFocusedElement = document.activeElement; → Guarda el foco actual.
  overlay.classList.add('visible'); → Muestra el modal.
  overlay.setAttribute('aria-hidden', 'false'); → Marca accesible el modal.
  modal.focus(); → Pone el foco en el modal.
  document.addEventListener('keydown', handleKeyDown); → Activa control de teclado.
}

function closeModal() { → Cierra el modal.
  overlay.classList.remove('visible'); → Oculta el modal.
  overlay.setAttribute('aria-hidden', 'true'); → Marca oculto para accesibilidad.
  document.removeEventListener('keydown', handleKeyDown); → Desactiva control de teclado.
  if (lastFocusedElement) lastFocusedElement.focus(); → Devuelve foco al elemento anterior.
}

function handleKeyDown(e) { → Maneja teclado.
  if (e.key === 'Escape') { closeModal(); return; } → Cierra con Escape.

  if (e.key === 'Tab') { → Controla tabulación dentro del modal.
    const focusable = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) { e.preventDefault(); return; }
    const first = focusable[0]; → Primer elemento enfocable.
    const last = focusable[focusable.length - 1]; → Último elemento enfocable.

    if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } → Ciclo al primero.
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } → Ciclo al último.
  }
}

abrirBtn.addEventListener('click', openModal); → Abre modal al hacer clic.
cerrarBtn.addEventListener('click', closeModal); → Cierra modal al hacer clic.
overlay.addEventListener('click', (e) => { if (e.target === overlay) { closeModal(); } }); → BONUS: cierra al hacer clic en el fondo.
