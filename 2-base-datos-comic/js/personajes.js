import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const idPersonaje = parseInt(params.get("id"));
const contenedor = document.getElementById("personaje-detalle");

if (idPersonaje && contenedor) {
  const personaje = comic.personajes.find(p => p.id === idPersonaje);

  if (personaje) {
    // Ajustar ruta para que funcione desde /html/
    const rutaImagen = personaje.imagen.replace("./", "../");

    contenedor.innerHTML = `
      <h2>Personaje</h2>
      <h1 class="nombre">${personaje.nombre}</h1>
      <img src="${rutaImagen}" class="imagen-personaje" alt="${personaje.nombre}">
      <p class="descripcion">${personaje.descripcion}</p>
    `;
  } else {
    contenedor.innerHTML = `<p>Personaje no encontrado</p>`;
  }
}