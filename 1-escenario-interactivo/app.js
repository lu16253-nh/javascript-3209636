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


const miniaturasEscenarios = [
    'mesa.png',      // Escenario 1: Mesa (Frutas)
    'mar.jpg',       // Escenario 2: Mar (Peces)
    'paisaje.jpeg'   // Escenario 3: Paisaje (Mariposas)
];



const audioFrutas = new Audio('frutas.mp3');
const audioMariposas = new Audio('mariposas.mp3');
const audioPeces = new Audio('peces.mp3');



function cambiarEscenario(direccion) {
    
    escenarios[escenarioActual].classList.remove('activo')
    indicadores[escenarioActual].classList.remove('activo')

    escenarioActual += direccion

    if (escenarioActual < 0) escenarioActual = 0
    if (escenarioActual >= escenarios.length) escenarioActual = escenarios.length - 1

    escenarios[escenarioActual].classList.add('activo')
    indicadores[escenarioActual].classList.add('activo')

    actualizarFlechas()
}

function irAEscenario(indice) {
    
    if (indice >= 0 && indice < escenarios.length) {
        
        escenarios[escenarioActual].classList.remove('activo')
        indicadores[escenarioActual].classList.remove('activo')

        escenarioActual = indice

        escenarios[escenarioActual].classList.add('activo')
        indicadores[escenarioActual].classList.add('activo')

        actualizarFlechas()
    }
}

function actualizarFlechas() {
    
    if (escenarioActual === 0) {
        flecha2.classList.add('oculta')
    } else {
        flecha2.classList.remove('oculta')
    }

    if (escenarioActual === escenarios.length - 1) {
        flecha1.classList.add('oculta')
    } else {
        flecha1.classList.remove('oculta')
    }
}


function cargarMiniaturas() {
    indicadores.forEach((indicador, indice) => {
        
        if (miniaturasEscenarios[indice]) {
            const img = document.createElement('img');
            img.src = miniaturasEscenarios[indice];
            img.alt = `Miniatura Escenario ${indice + 1}`;
            img.classList.add('miniatura-escenario');

            
            indicador.innerHTML = '';
            indicador.appendChild(img);
        }
    });
}



function activarClickEn(elementos, claseAnimacion, audioClick) {
    elementos.forEach((item) => {
        item.addEventListener("click", () => {
            
      
            audioClick.pause();
            audioClick.currentTime = 0; 
            audioClick.play().catch(e => console.log("Error al reproducir audio:", e));
            
          
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


    activarClickEn(frutas, "saltar", audioFrutas)
    activarClickEn(mariposas, "meneo-vertical", audioMariposas)
    activarClickEn(peces, "meneo-horizontal", audioPeces)
}


flecha1.addEventListener('click', () => {
    cambiarEscenario(1)
})

flecha2.addEventListener('click', () => {
    cambiarEscenario(-1)
})


indicadores.forEach(indicador => {
    indicador.addEventListener('click', () => {
        const nuevoIndice = parseInt(indicador.getAttribute('data-indice'))
        irAEscenario(nuevoIndice)
    })
})


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        
        if (escenarioActual < escenarios.length - 1) { 
            cambiarEscenario(1)
        }
    } else if (e.key === 'ArrowLeft') {
        
        if (escenarioActual > 0) { 
            cambiarEscenario(-1)
        }
    } else if (e.key >= '1' && e.key <= '3') {
        const indice = parseInt(e.key) - 1
        
        if (indice >= 0 && indice < escenarios.length) { 
            irAEscenario(indice)
        }
    }
})


cargarMiniaturas() 
actualizarFlechas()
inicializarElementosClickeables()

if (escenarios.length > 0) {
    escenarios[escenarioActual].classList.add('activo')
    indicadores[escenarioActual].classList.add('activo')
}