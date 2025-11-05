// ====================================================
// 1. Variables
// ====================================================
const scoreElements = document.querySelectorAll(".contador")
let marcador = 0


const escenarios = document.querySelectorAll('.escenario')
const flecha1 = document.querySelector('.flecha1')
const flecha2 = document.querySelector('.flecha2')
const indicadores = document.querySelectorAll('.indicador')
let escenarioActual = 0

// ARREGLO DE RUTAS DE IMAGEN PARA LOS INDICADORES
// Usamos los escenarios confirmados: Mesa, Mar, Paisaje.
const miniaturasEscenarios = [
  'mesa.png',      // Escenario 1: Mesa
  'mar.jpg',       // Escenario 2: Mar
  'paisaje.jpeg'   // Escenario 3: Paisaje
];


// ====================================================
// 2. Funciones de Navegación
// ====================================================

function cambiarEscenario(direccion) {
    // 1. Ocultar el estado activo del escenario/indicador actual
    escenarios[escenarioActual].classList.remove('activo')
    indicadores[escenarioActual].classList.remove('activo')

    // 2. Calcular el nuevo índice y aplicar límites (clamping)
    escenarioActual += direccion

    // Asegurar que no excedemos los límites (corrección implícita de errores)
    if (escenarioActual < 0) escenarioActual = 0
    if (escenarioActual >= escenarios.length) escenarioActual = escenarios.length - 1


    // 3. Activar el nuevo escenario/indicador
    escenarios[escenarioActual].classList.add('activo')
    indicadores[escenarioActual].classList.add('activo')


    // 4. Actualizar el estado visual de las flechas
    actualizarFlechas()
}

function irAEscenario(indice) {
    // Verifica que el índice sea válido
    if (indice >= 0 && indice < escenarios.length) {
        // 1. Ocultar el estado activo del escenario/indicador actual
        escenarios[escenarioActual].classList.remove('activo')
        indicadores[escenarioActual].classList.remove('activo')


        // 2. Actualizar el índice directamente
        escenarioActual = indice


        // 3. Activar el nuevo escenario/indicador
        escenarios[escenarioActual].classList.add('activo')
        indicadores[escenarioActual].classList.add('activo')


        // 4. Actualizar el estado visual de las flechas
        actualizarFlechas()
    }
}

function actualizarFlechas() {
    // Flecha Anterior (flecha2)
    if (escenarioActual === 0) {
        flecha2.classList.add('oculta')
    } else {
        flecha2.classList.remove('oculta')
    }


    // Flecha Siguiente (flecha1)
    if (escenarioActual === escenarios.length - 1) {
        flecha1.classList.add('oculta')
    } else {
        flecha1.classList.remove('oculta')
    }
}


// ====================================================
// 3. Función para Miniaturas (Nueva funcionalidad)
// ====================================================

function cargarMiniaturas() {
  indicadores.forEach((indicador, indice) => {
    // Solo carga la miniatura si hay una ruta definida en el arreglo
    if (miniaturasEscenarios[indice]) {
      const img = document.createElement('img');
      img.src = miniaturasEscenarios[indice];
      img.alt = `Miniatura Escenario ${indice + 1}`;
      img.classList.add('miniatura-escenario');

      // Limpia el contenido (por si era un punto) y inserta la imagen
      indicador.innerHTML = '';
      indicador.appendChild(img);
    }
  });
}

// ====================================================
// 4. Funciones de Clickeo de Elementos de Juego
// ====================================================

function activarClickEn(elementos, claseAnimacion) {
    elementos.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.add(claseAnimacion)
            marcador++
            scoreElements.forEach((s) => (s.textContent = marcador))
        })
        item.addEventListener(
            "animationend",
            () => {
                item.style.display = "none"
            },
            { once: true }
        )
    })
}


function inicializarElementosClickeables() {
    const frutas = document.querySelectorAll(".fruta")
    const mariposas = document.querySelectorAll(".mariposa1, .mariposa2, .mariposa3, .mariposa4, .abeja, .mariquita")
    const peces = document.querySelectorAll(".pez1, .pez2, .pez3, .pez4, .estrellita, .pulpo")

    activarClickEn(frutas, "saltar")
    activarClickEn(mariposas, "meneo-vertical")
    activarClickEn(peces, "meneo-horizontal")
}


// ====================================================
// 5. Event Listeners
// ====================================================

// Clicks en las flechas
flecha1.addEventListener('click', () => {
    // Ya no es necesario el IF aquí, la función cambiarEscenario lo maneja
    cambiarEscenario(1)
})

flecha2.addEventListener('click', () => {
    // Ya no es necesario el IF aquí, la función cambiarEscenario lo maneja
    cambiarEscenario(-1)
})


// Clicks en los indicadores
indicadores.forEach(indicador => {
    indicador.addEventListener('click', () => {
        const nuevoIndice = parseInt(indicador.getAttribute('data-indice'))
        irAEscenario(nuevoIndice)
    })
})


// Teclado (con validación de límites para evitar errores)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        // Solo intenta cambiar si no estamos en el último
        if (escenarioActual < escenarios.length - 1) { 
            cambiarEscenario(1)
        }
    } else if (e.key === 'ArrowLeft') {
        // Solo intenta cambiar si no estamos en el primero
        if (escenarioActual > 0) { 
            cambiarEscenario(-1)
        }
    } else if (e.key >= '1' && e.key <= '3') {
        const indice = parseInt(e.key) - 1
        // Solo cambia si el índice existe
        if (indice >= 0 && indice < escenarios.length) { 
            irAEscenario(indice)
        }
    }
})


// ====================================================
// 6. Inicialización
// ====================================================
cargarMiniaturas() // ¡Carga las miniaturas primero!
actualizarFlechas()
inicializarElementosClickeables()

// Asegurarse de que el primer escenario esté activo al inicio
if (escenarios.length > 0) {
    escenarios[escenarioActual].classList.add('activo')
    indicadores[escenarioActual].classList.add('activo')
}