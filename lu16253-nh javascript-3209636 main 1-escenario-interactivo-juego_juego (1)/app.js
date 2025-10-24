/*1.capturar variables  */

const frutas = document.querySelectorAll(".fruta")
const score = document.querySelector(".contador")
let marcador = 0
let i = 0

console.log(frutas) //no puede tener null//
console.log(score)

//2. crear las funciones//

frutas.forEach( item => {
    //console.log("Elemento", item )//
   

    item.addEventListener("click", () =>{
        item.classList.add("saltar")
        i++
        score.textContent = i
})

item.addEventListener("animationend", () => {
    item.stye.display.add = "none"
}, {once:true})
})

//3. llamar eventos//