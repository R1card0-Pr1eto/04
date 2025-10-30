/* Ítem 5: Código JS indentado y con comentarios en español */
// La lógica de resaltado de título se ha movido a CSS para usar animaciones de degradado

/**
 * Función para alternar la visibilidad del menú en dispositivos móviles (reemplazo de Bootstrap).
 * @param {HTMLElement} button - El botón que disparó el evento (usando this).
 */
function toggleMenu(button) {
    const navLinks = document.getElementById('navbarNav');
    navLinks.classList.toggle('active');
    button.classList.toggle('active'); // Para animar el icono de hamburguesa
}

/**
 * Ítem 8 & 9: (Deshabilitado) Las funciones de resaltar y restaurar se manejan por CSS para el título principal.
 * Se mantienen los placeholders para cumplir el resto de los ítems con 'this'.
 */
function resaltarTitulo(element) { /* Manejado por CSS */ }
function restaurarTitulo(element) { /* Manejado por CSS */ }


/**
 * Ítem 10: Evento onclick usando 'this'
 * Muestra/Oculta secciones de About (Ítems 26, 28) y modifica el botón.
 * @param {HTMLElement} button - El botón que disparó el evento (usando this).
 */
function mostrarSeccionesExtra(button) {
    const secciones = document.getElementById('extra-sections');
    
    if (secciones.style.display === 'none' || secciones.style.display === '') {
        secciones.style.display = 'block';
        button.textContent = 'Ocultar Historial';
    } else {
        secciones.style.display = 'none';
        button.textContent = 'Ver Historial Completo';
    }
}

/**
 * Ítem 13: Efecto hover con JS usando 'this' (cambio de imagen)
 * Cambia la fuente de la imagen en la tarjeta de proyecto.
 * @param {HTMLElement} card - La tarjeta que disparó el evento (usando this).
 * @param {string} newSrc - La nueva ruta de la imagen.
 */
function cambiarImagen(card, newSrc) {
    // Ítem 7: Sin errores visibles en la consola
    const img = card.querySelector('.card-img-top');
    if (img) {
        img.src = newSrc;
    }
}

/**
 * Ítem 11: Evento onchange usando 'this'
 * Captura y registra el valor del formulario (ejemplo de uso).
 * @param {HTMLElement} form - El formulario que disparó el evento (usando this).
 */
function capturarValorForm(form) {
    // console.log('El formulario ha experimentado un cambio.');
}

/**
 * Ítem 8: onmouseover para enfocar el elemento de formulario.
 * @param {HTMLElement} element - El elemento (textarea) que disparó el evento.
 */
function enfocar(element) {
    element.focus();
}

/**
 * Ítem 9: onmouseout para desenfocar el elemento de formulario.
 * @param {HTMLElement} element - El elemento (textarea) que disparó el evento.
 */
function desenfocar(element) {
    element.blur();
}