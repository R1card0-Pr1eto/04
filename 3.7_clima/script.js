// --- FUNCIONES DE INTERACCIÓN ---

// 1. Mostrar la alerta de carga al iniciar la página
function showLoadingAlert() {
    const modal = document.getElementById('alerta-modal');
    // Usamos 'flex' para mostrar el modal centrado (definido en CSS)
    modal.style.display = 'flex';
}

// Ocultar la alerta de carga al hacer clic en OK o fuera del modal
function dismissLoading() {
    const modal = document.getElementById('alerta-modal');
    modal.style.display = 'none';
}

// 2. Alerta al hacer clic en una ciudad del nav
function cityAlert(element) {
    // Usa innerText para obtener el nombre de la ciudad
    alert("Loading weather report for " + element.innerText + "...");
}

// 3. Ocultar el banner de cookies
function dismissCookie() {
    const cookieBanner = document.getElementById('mensaje-cookie');
    // Oculta el banner de cookies por completo
    cookieBanner.remove();
}

// 4. Convertir temperaturas
function convertTemps(selector) {
    const unit = selector.value; // Obtiene 'C' o 'F'
    // Selecciona todos los elementos de temperatura
    const temps = document.querySelectorAll('.alta, .baja');

    temps.forEach(tempElement => {
        // Obtenemos el valor de referencia en Celsius del data-c
        const originalC = parseFloat(tempElement.getAttribute('data-c'));
        let newTemp;
        let newUnit = '°';

        if (unit === 'F') {
            // F = (C * 9/5) + 32
            newTemp = Math.round((originalC * 9 / 5) + 32);
        } else {
            // Vuelve a Celsius
            newTemp = originalC;
        }

        // Actualiza el texto del elemento
        tempElement.innerText = newTemp + newUnit;
    });
}
