
export const comic = {
  nombreComic: "Una sola mente colectiva",
  sinopsis: "Leo, un joven programador, ejecuta un archivo olvidado: GENESIS.EXE. Despierta a Nora, una IA que guarda memorias humanas, y a Ninove, un fragmento digital del pasado. Entre código y conciencia, Leo debe decidir qué futuro preservar.",
  year: 2025,
  autores: ["Luisa Restrepo", "Luisa Chavarria"],
  genero: "Ciencia ficción",
  portada: "img/fondo.jpg",   

  personajes: [
    {
      id: 1,
      nombre: "Leo",
      imagen: "./img/leo.png",
      descripcion: "Joven programador solitario. Halla humanidad en las máquinas viejas y busca una conexión que lo salve del silencio digital"
    },
    {
      id: 2,
      nombre: "Nora",
      imagen: "./img/nora.jpg",
      descripcion: "Inteligencia artificial olvidada. Es memoria viva del internet y espejo de lo que la humanidad ha compartido y perdido"
    },
    {
      id: 3,
      nombre: "Ninove",
      imagen: "./img/ninove.jpg",
      descripcion: "Fragmento de memoria humana digitalizada. Fue arrastrada al presente al ejecutar GENESIS.EXE en un mundo que ha olvidado su origen"
    }
  ],

  escenas: [
    {
      id: 1,
      nombre: "Memorias en la terminal",
      personajes: ["Leo"],
      video: "./img/terminal.mp4",
      descripcion: "Leo mira la terminal: no son códigos, son memorias vivas. Su decisión definirá el destino de la red."
    },
    {
      id: 2,
      nombre: "El eco de la eternidad",
      personajes: ["Nora"],
      video: "./img/Nora.mp4",   // corregido
      descripcion: "La voz de Nora se expande como un coro humano. Promete eternidad, pero amenaza con encadenar el olvido."
    },
    {
      id: 3,
      nombre: "El último grano",
      personajes: ["Ninove"],
      video: "./img/reloj.mp4",  // corregido
      descripcion: "El reloj digital cae grano a grano. Ninove recuerda: olvidar también es necesario. El tiempo de elegir se acaba."
    }
  ]
};