const scoreElements = document.querySelectorAll(".contador")
let marcador = 0


const escenarios = document.querySelectorAll('.escenario')
const flecha1 = document.querySelector('.flecha1')
const flecha2 = document.querySelector('.flecha2')
const indicadores = document.querySelectorAll('.indicador')
let escenarioActual = 0

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


flecha1.addEventListener('click', () => {
  if (escenarioActual < escenarios.length - 1) {
    cambiarEscenario(1)
  }
})

flecha2.addEventListener('click', () => {
  if (escenarioActual > 0) {
    cambiarEscenario(-1)
  }
})


indicadores.forEach(indicador => {
  indicador.addEventListener('click', () => {
    const nuevoIndice = parseInt(indicador.getAttribute('data-indice'))
    irAEscenario(nuevoIndice)
  })
})


document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    cambiarEscenario(1)
  } else if (e.key === 'ArrowLeft') {
    cambiarEscenario(-1)
  } else if (e.key >= '1' && e.key <= '3') {
    
    const indice = parseInt(e.key) - 1
    irAEscenario(indice)
  }
})


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

actualizarFlechas()
inicializarElementosClickeables()