import { comic } from "../img/bd.js"


const param = new URLSearchParams(window.location.search);
const nombrePersonaje = param.get("nombre")

const contendedorPersonajes = document.querySelector(".persoanajes")

contendedorPersonajes.innerHTML  =`

/* div y class de imagen de los personajes 


div class informacion personajes
*/

` 