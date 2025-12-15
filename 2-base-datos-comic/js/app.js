import { comic } from "./bd.js";

document.addEventListener("DOMContentLoaded", () => {
  // comic proveniente de la base de datos (js/bd.js)

  const infoComic = document.querySelector(".info-comic");
  const listaCapitulos = document.querySelector(".lista-capitulos");

  if (infoComic) {
    infoComic.innerHTML = `
      <h2>${comic.titulo}</h2>
      <p><strong>Autores:</strong> ${comic.autores || "Sin especificar"}</p>
      <p><strong>Sinopsis:</strong> ${comic.sinopsis}</p>
      <p><strong>Género:</strong> ${comic.genero.join(", ")}</p>
      <p><strong>Personajes:</strong> ${comic.personajes.join(", ")}</p>
    `;
  }

  if (listaCapitulos && comic.escenas) {
    comic.escenas.forEach((escena) => {
      const miCard = document.createElement("div");
      miCard.classList.add("tarjeta-comic");
      miCard.innerHTML = `
        <a class="episode" href="#">
          <img src="${escena.imagen}" alt="${escena.nombre}" />
          <p>${escena.nombre}</p>
        </a>
      `;
      listaCapitulos.appendChild(miCard);
    });
  }

  // Carrusel del hero
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    let current = 0;
    const showSlide = (i) => {
      slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    };
    showSlide(current);
    let autoplay = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4000);

    prevBtn?.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
      clearInterval(autoplay);
      autoplay = setInterval(() => { current = (current + 1) % slides.length; showSlide(current); }, 4000);
    });

    nextBtn?.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
      clearInterval(autoplay);
      autoplay = setInterval(() => { current = (current + 1) % slides.length; showSlide(current); }, 4000);
    });
  }

  const modal = document.getElementById("modal-personaje");
  const modalImg = document.getElementById("modal-img");
  const modalTitulo = document.getElementById("modal-titulo");
  const cerrarModal = document.getElementById("cerrar-modal");

  document.querySelector(".contenedor-tarjetas")?.addEventListener("click", (e) => {
    const tarjeta = e.target.closest(".tarjeta-personaje");
    if (!tarjeta) return;

    const href = tarjeta.dataset.href;
    if (href) {
      window.location.href = href;
      return;
    }

    const imgSrc = tarjeta.querySelector("img")?.getAttribute("src");
    const nombre = tarjeta.querySelector("h3")?.textContent || "";

    if (imgSrc && modalImg) modalImg.setAttribute("src", imgSrc);
    if (modalTitulo) modalTitulo.textContent = nombre;
    if (modal) modal.classList.remove("oculto");
  });

  document.querySelector(".card-container")?.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const href = card.dataset.href;
    if (href) {
      window.location.href = href;
      return;
    }

    const imgSrc = card.querySelector("img")?.getAttribute("src");
    const nombre = card.querySelector("h1")?.textContent || "";

    if (imgSrc && modalImg) modalImg.setAttribute("src", imgSrc);
    if (modalTitulo) modalTitulo.textContent = nombre;
    if (modal) modal.classList.remove("oculto");
  });

  document.querySelector(".lista-capitulos")?.addEventListener("click", (e) => {
    const card = e.target.closest(".tarjeta-comic");
    if (!card) return;

    const img = card.querySelector("img")?.getAttribute("src");
    const nombre = card.querySelector("p")?.textContent || "";

    if (img && modalImg) modalImg.setAttribute("src", img);
    if (modalTitulo) modalTitulo.textContent = nombre;
    if (modal) modal.classList.remove("oculto");
  });

  cerrarModal?.addEventListener("click", () => {
    if (modal) modal.classList.add("oculto");
  });

  document.getElementById("modal-overlay")?.addEventListener("click", () => {
    if (modal) modal.classList.add("oculto");
  });
});