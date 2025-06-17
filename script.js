// Cambiar imagen al hacer clic
function cambiarImagen(img, event) {
    event?.stopPropagation();
    
    const personajes = {
        'Denji': ['Denji.png', 'denji2.png'],
        'Sendo': ['sendo1.png', 'sendo2.png'],
        'Dante': ['dante.png', 'dante2.png'],
        'Genji': ['genji1.png', 'genji2.png']
    };
    
    const imagenes = personajes[img.alt];
    if (!imagenes) return;
    
    const esSegundaImagen = img.src.includes(imagenes[1]);
    img.src = `img/${esSegundaImagen ? imagenes[0] : imagenes[1]}`;
}

// Función para verificar si una tarjeta se sale del viewport
function verificarPosicionTarjeta(tarjeta, desplegable) {
    const rectTarjeta = tarjeta.getBoundingClientRect();
    const rectDesplegable = desplegable.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Si la tarjeta desplegable se sale por la derecha, moverla hacia la izquierda
    if (rectTarjeta.right + 350 > viewportWidth) {
        desplegable.style.left = '-350px';
        desplegable.style.marginLeft = '-15px';
    } else {
        desplegable.style.left = '100%';
        desplegable.style.marginLeft = '15px';
    }
}

// Mostrar/ocultar información de tarjeta
function toggleTarjeta(tarjeta, personaje) {
    const desplegable = document.getElementById(`info-${personaje}`);
    const galeria = document.getElementById('galeria');
    const tarjetaExpandida = document.querySelector('.tarjeta-desplegable.expandida');
    
    // No permitir abrir otra tarjeta si ya hay una expandida
    if (tarjetaExpandida && tarjetaExpandida.id !== `info-${personaje}`) return;
    
    // Limpiar estado anterior
    document.querySelectorAll('.tarjeta-desplegable, .tarjeta').forEach(el => {
        el.classList.remove('expandida', 'activa');
    });
    
    // Alternar tarjeta actual
    const estaExpandida = desplegable.classList.contains('expandida');
    if (!estaExpandida) {
        // Verificar posición antes de expandir
        verificarPosicionTarjeta(tarjeta, desplegable);
        
        desplegable.classList.add('expandida');
        tarjeta.classList.add('activa');
        galeria.classList.add('comprimida');
        
        // Prevenir scroll horizontal solo cuando sea necesario
        if (window.innerWidth < 1200) {
            document.body.style.overflowX = 'hidden';
        }
    } else {
        galeria.classList.remove('comprimida');
        document.body.style.overflowX = 'auto';
    }
}

// Cerrar tarjeta
function cerrarTarjeta(event, personaje) {
    event?.stopPropagation();
    
    const desplegable = document.getElementById(`info-${personaje}`);
    const galeria = document.getElementById('galeria');
    
    desplegable.classList.remove('expandida');
    galeria.classList.remove('comprimida');
    document.querySelectorAll('.tarjeta').forEach(t => t.classList.remove('activa'));
    document.body.style.overflowX = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Manejar tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const tarjetaExpandida = document.querySelector('.tarjeta-desplegable.expandida');
            if (tarjetaExpandida) {
                const personaje = tarjetaExpandida.id.replace('info-', '');
                cerrarTarjeta(e, personaje);
            }
        }
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        const tarjetaExpandida = document.querySelector('.tarjeta-desplegable.expandida');
        if (!tarjetaExpandida) return;
        
        const tarjetaActiva = document.querySelector('.tarjeta.activa');
        if (!tarjetaActiva?.contains(e.target) && !tarjetaExpandida.contains(e.target)) {
            const personaje = tarjetaExpandida.id.replace('info-', '');
            cerrarTarjeta(e, personaje);
        }
    });

    // Manejar redimensionamiento de ventana
    window.addEventListener('resize', function() {
        const tarjetaExpandida = document.querySelector('.tarjeta-desplegable.expandida');
        if (tarjetaExpandida) {
            const tarjetaActiva = document.querySelector('.tarjeta.activa');
            if (tarjetaActiva) {
                verificarPosicionTarjeta(tarjetaActiva, tarjetaExpandida);
            }
        }
    });

    // Agregar smooth scrolling para mejor UX
    document.querySelectorAll('.tarjeta').forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            // Pequeño delay para permitir que la animación se complete
            setTimeout(() => {
                if (this.classList.contains('activa')) {
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }, 300);
        });
    });
});

// Funciones de utilidad para mejorar la experiencia
function precargarImagenes() {
    const imagenes = [
        'img/Denji.png', 'img/denji2.png',
        'img/sendo1.png', 'img/sendo2.png',
        'img/dante.png', 'img/dante2.png',
        'img/genji1.png', 'img/genji2.png'
    ];
    
    imagenes.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Precargar imágenes cuando se carga la página
document.addEventListener('DOMContentLoaded', precargarImagenes);