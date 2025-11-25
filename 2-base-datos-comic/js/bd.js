(() => {
  const comics = [
    {
      titulo: "Una sola mente colectiva",
      nombreCamile: "Luisa Restrepo, Luisa Chavarria",
      sinopsis: "En un mundo donde las mentes se conectan, una sola mente colectiva lucha por la libertad",
      year: 2025,
      genero: ["Ciencia ficción"],
      personajes: ["Leo", "Nora", "Ninove"],
      portada: "./images/portada.jpg",
      escenas: [
        {
          id: "1",
          nombre: "Una sola mente colectiva",
          personajes: ["Leo", "Nora", "Ninove"],
          imagen: "./images/portada.jpg"
        },
        {
          id: "2",
          nombre: "Madame Uppercut",
          personajes: ["Jane Wilson"],
          imagen: "./images/madame.jpg"
        },
        {
          id: "3",
          nombre: "Eternal Flame",
          personajes: ["Unknown"],
          imagen: "./images/flame.jpg"
        }
      ]
    }
  ];


  window.getComics = () => comics;
})();