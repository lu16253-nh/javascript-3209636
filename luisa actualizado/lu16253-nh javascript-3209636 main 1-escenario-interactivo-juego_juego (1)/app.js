const scoreElements = document.querySelectorAll(".contador")
let marcador = 0

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

const frutas = document.querySelectorAll(".fruta")
const mariposas = document.querySelectorAll(".mariposa1, .mariposa2, .mariposa3, .mariposa4, .abeja, .mariquita")
const peces = document.querySelectorAll(".pez1, .pez2, .pez3, .pez4, .estrellita, .pulpo")

activarClickEn(frutas, "saltar")
activarClickEn(mariposas, "meneo-vertical")
activarClickEn(peces, "meneo-horizontal")
