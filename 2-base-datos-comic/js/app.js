document.addEventListener("DOMContentLoaded", () => {
  // Accedemos al cómic encapsulado desde bd.js
  const comic = getComics()[0];

  // Elementos del DOM
  const infoComic = document.querySelector(".info-comic");
  const listaCapitulos = document.querySelector(".lista-capitulos");

  // Renderizar información principal del cómic
  infoComic.innerHTML = `
    <h2>${comic.titulo}</h2>
    <p><strong>Autores:</strong> ${comic.nombreCamile}</p>
    <p><strong>Sinopsis:</strong> ${comic.sinopsis}</p>
    <p><strong>Género:</strong> ${comic.genero.join(", ")}</p>
    <p><strong>Personajes:</strong> ${comic.personajes.join(", ")}</p>
  `;

  // Renderizar escenas como tarjetas
  comic.escenas.forEach((escena) => {
    const miCard = document.createElement("div");
    miCard.classList.add("tarjeta-comic");
    miCard.innerHTML = `
      <img src="${escena.imagen}" alt="${escena.nombre}" />
      <p>${escena.nombre}</p>
    `;
    listaCapitulos.appendChild(miCard);
  });

  // Interactividad del modal
  const modal = document.getElementById("modal-personaje");
  const modalImg = document.getElementById("modal-img");
  const modalTitulo = document.getElementById("modal-titulo");
  const cerrarModal = document.getElementById("cerrar-modal");

  // Delegación: clic en personajes
  document.querySelector(".contenedor-tarjetas")?.addEventListener("click", (e) => {
    const tarjeta = e.target.closest(".tarjeta-personaje");
    if (!tarjeta) return;

    const imgSrc = tarjeta.querySelector("img")?.getAttribute("src");
    const nombre = tarjeta.querySelector("h3")?.textContent || "";

    if (imgSrc) modalImg.setAttribute("src", imgSrc);
    modalTitulo.textContent = nombre;
    modal.classList.remove("oculto");
  });

  // Delegación: clic en escenas
  document.querySelector(".lista-capitulos")?.addEventListener("click", (e) => {
    const card = e.target.closest(".tarjeta-comic");
    if (!card) return;

    const img = card.querySelector("img")?.getAttribute("src");
    const nombre = card.querySelector("p")?.textContent || "";

    if (img) modalImg.setAttribute("src", img);
    modalTitulo.textContent = nombre;
    modal.classList.remove("oculto");
  });

  // Cerrar modal
  cerrarModal?.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  document.getElementById("modal-overlay")?.addEventListener("click", () => {
    modal.classList.add("oculto");
  });
});