import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const idEscena = parseInt(params.get("id"));
const contenedor = document.getElementById("escena-detalle");

if (idEscena && contenedor) {
  const escena = comic.escenas.find(e => e.id === idEscena);

  if (escena) {
    // Ruta correcta desde /html/
    const rutaVideo = `../${escena.video}`;

    contenedor.innerHTML = `
      <h2 class="escenas">Escenas</h2>
      <video class="video-escena" controls>
        <source src="${rutaVideo}" type="video/mp4">
        Tu navegador no soporta el video.
      </video>
      <h2 class="titulo">${escena.nombre}</h2>
      <p class="descripcion">${escena.descripcion}</p>
    `;
  } else {
    contenedor.innerHTML = `<p>Escena no encontrada</p>`;
  }
}