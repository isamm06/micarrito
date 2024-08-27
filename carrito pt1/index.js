const milibreria = [
  {
    id: 1,
    imagen: `Assets/1_HarryPotter.webp`,
    titulo: "Harry Potter (Saga completa)",
    genero: "Fantasia",
    autor: "J.K Rowling",
    año: "1997-2007",
    edad_recomendada: "8-18",
    editorial: "Salamandra",
    precio: 133062,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 2,
    imagen: `Assets/2_Bajo_La_Misma_Estrella.webp`,
    titulo: "Bajo la misma estrella",
    genero: "Juvenil",
    autor: "John Green",
    año: 2012,
    edad_recomendada: "15",
    editorial: "Punto De Lectura",
    precio: 15201,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 3,
    imagen: `Assets/3_Caraval.webp`,
    titulo: "Caraval (Trilogia)",
    genero: "Fantasia",
    autor: "Stephanie Garber",
    año: 2016,
    edad_recomendada: "13-19",
    editorial: "Flatiron Books",
    precio: 62000,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 4,
    imagen: `Assets/4_Los_Juegos_Del_Hambre.webp`,
    titulo: "Los Juegos Del Hambre (Trilogia+precuela)",
    genero: "Aventura",
    autor: "Suzanne Collins",
    año: 2008,
    edad_recomendada: "14+",
    editorial: "Scholastic Press",
    precio: 132700,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 5,
    imagen: `Assets/5_Divergente.webp`,
    titulo: "Divergente (Saga Completa)",
    genero: "Aventura",
    autor: "Veronica Roth",
    año: 2014,
    edad_recomendada: "13+",
    editorial: "Molino",
    precio: 68462,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 6,
    imagen: `Assets/6_Coraline.webp`,
    titulo: "Coraline",
    genero: "Literatura, Ficcion",
    autor: "Neil Gaiman",
    año: 2002,
    edad_recomendada: "8-10",
    editorial: "Salamandra",
    precio: 15499,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 7,
    imagen: `Assets/7_Mujercitas.webp`,
    titulo: "Mujercitas",
    genero: "Novela",
    autor: "Louisa May",
    año: 1868,
    edad_recomendada: "15-99",
    editorial: "Trillas",
    precio: 4600,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 8,
    imagen: `Assets/8_Las_Ventajas_De_Ser_Invisible.webp`,
    titulo: "Las Ventajas De Ser Invisible",
    genero: "Juvenil",
    autor: "Stephen Chbosky",
    año: 1999,
    edad_recomendada: "15+",
    editorial: "Alfaguara",
    precio: 22199,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },

  {
    id: 9,
    imagen: `Assets/9_Las_Cronicas_De_Narnia.jpeg`,
    titulo: "Las Cronicas De Narnia",
    genero: "Juvenil",
    autor: "Clive Staples Lewis",
    año: "1950-1956",
    edad_recomendada: "12+",
    editorial: "Destino",
    precio: 114000,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },

  {
    id: 10,
    imagen: `Assets/10_Dune.jpg`,
    titulo: "Dune",
    genero: "Novela",
    autor: "Frank Herbert",
    año: 1965,
    edad_recomendada: "12+",
    editorial: "Debolsillo",
    precio: 32899,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },

  {
    id: 11,
    imagen: `Assets/11_Asesinato_Para_Principiantes.webp`,
    titulo: "Asesinato Para Principiantes (+desaparicion)",
    genero: "Misterio",
    autor: "Holly Jackson",
    año: 2020,
    edad_recomendada: "14+",
    editorial: "Planeta",
    precio: 50850,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },

  {
    id: 12,
    imagen: `Assets/12_Por_Trece_Razones.jpg`,
    titulo: "Por Trece Razones",
    genero: "Novela",
    autor: "Jay Asher",
    año: 2007,
    edad_recomendada: "15-18",
    editorial: "VR Editoras",
    precio: 15300,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },

  {
    id: 13,
    imagen: `Assets/13_Yo_Antes_De_Ti.jpg`,
    titulo: "Yo Antes de ti(Trilogia)",
    genero: "Romance",
    autor: "Jojo Moyes",
    año: 2012,
    edad_recomendada: "18+",
    editorial: "Debolsillo",
    precio: 59999,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 14,
    imagen: `Assets/14_Crepusculo.jfif`,
    titulo: "Crepusculo",
    genero: "Romance",
    autor: "Stephanie Meyer",
    año: "2005-2020",
    edad_recomendada: "12+",
    editorial: "Alfaguara",
    precio: 106000,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 15,
    imagen: `Assets/15_Percy_Jackson.jpg`,
    titulo: "Percy Jackson (saga completa)",
    genero: "Literatura",
    autor: "Rick Riordan",
    año: "2005",
    edad_recomendada: "14+",
    editorial: "Salamandra",
    precio: 85000,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 16,
    imagen: `Assets/16_Wigetta.jpg`,
    titulo: "Wigetta en el planeta de mimisiku",
    genero: "Aventura",
    autor: "Vegetta777, Willyrex",
    año: "2017",
    edad_recomendada: "10+",
    editorial: "Planeta",
    precio: 162899,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 17,
    imagen: `Assets/17_Los_Chicos_De_Los_Que_Me_Enamore.jpg`,
    titulo: "A todos los chicos de los que me enamore",
    genero: "Novela",
    autor: "Jenny Han",
    año: "2016",
    edad_recomendada: "14+",
    editorial: "Destino",
    precio: 30000,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 18,
    imagen: `Assets/18_It.jfif`,
    titulo: "It",
    genero: "Terror",
    autor: "Stephen King",
    año: "1986",
    edad_recomendada: "18+",
    editorial: "Debolsillo",
    precio: 33999,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 19,
    imagen: `Assets/19_El_Resplandor.jfif`,
    titulo: "El Resplandor",
    genero: "Terror",
    autor: "Stephen King",
    año: "1977",
    edad_recomendada: "18+",
    editorial: "Debolsillo",
    precio: 32000,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
  {
    id: 20,
    imagen: `Assets/20_Carrie.jpg`,
    titulo: "Carrie",
    genero: "Terror",
    autor: "Stephen King",
    año: "1974",
    edad_recomendada: "16+",
    editorial: "Debolsillo",
    precio: 11999,
    mostrarDetalles: function () {
      alert(
        `Posicion en la libreria ${this.id} \n Titulo: ${this.titulo} \n Genero: ${this.genero} \n Autor: ${this.autor}\n Año De Lanzamiento: ${this.año} \n Edad recomendada: ${this.edad_recomendada} \n Editorial: ${this.editorial} \n Precio: ${this.precio}`
      );
    },
  },
];

function mostrarlibreria(unalibreria) {
  let contenedor = document.getElementById(`contenedor`);
  contenedor.innerHTML = "";

  unalibreria.forEach((libro) => {
    let card = document.createElement("div");
    let imagen = document.createElement("img");
    let titulo = document.createElement("h5");
    let info = document.createElement("p");
    let genero = document.createElement("P");
    let precio = document.createElement("p");
    let boton = document.createElement("button");
    let input = document.createElement("input");

    imagen.src = libro.imagen;
    titulo.textContent = libro.titulo;
    info.textContent = libro.autor;
    genero.textContent = `Genero: ${libro.genero}`;
    precio.textContent = `$ ${libro.precio}`;
    boton.textContent = "Carrito";
    boton.onclick = function () {
      agregar(libro, input.value);
      let carro = document.getElementById("carrito")
      carro.classList.remove("oculto")
      mostrarCarro(
        
      )
    };
    input.type = "number";
    input.placeholder = " Cantidad ";
    input.min = 1;
    input.max = 1000;
    imagen.onclick = function () {
      libro.mostrarDetalles();
    };

    let textos = document.createElement("div");
    let botones = document.createElement("div");

    textos.append(titulo, info, genero);

    botones.append(boton, input);
    card.append(imagen, textos, precio, botones);

    contenedor.appendChild(card);

    precio.classList.add("precio");
    card.classList.add("card");
    boton.classList.add("boton");
    titulo.classList.add("titulo");
    textos.classList.add("textos");
    imagen.classList.add("imagen");
    botones.classList.add("botones");
    input.classList.add("input");
  });
}

const carrito = [];

function agregar(libro, input) {
  input = parseInt(input);
  if (input > 0 && typeof(input)==="number") {
    const productoEncontrado = carrito.find(itemCarro => itemCarro.id === libro.id);
    if (productoEncontrado) {
      productoEncontrado.input = input;
    } else {
      libro.input = input;
      carrito.push(libro);
    }
  } else {
    console.log("Ingrese valores validos");
  }
}



function filtrargeneros(value) {
  const filtro = milibreria.filter((item) => item.genero === value);
  if (value == "Todos") {
    return mostrarlibreria(milibreria);
  }
  mostrarlibreria(filtro);
}

function buscar(value) {
  const valorbuscado = document.getElementById("buscador").value.toLowerCase();
  const filtro = milibreria.filter((item) =>
    item.titulo.toLowerCase().includes(valorbuscado)
  );

  mostrarlibreria(filtro);
}

function mostrarCarro(){

carrito.forEach(elementos => {
  let lista = document.getElementById("tablita")
  let cosita = document.createElement("tr")
  cosita.innerHTML = `
            <td>
              <img src="${elementos.imagen}" alt="">
            </td>
            <td>
              <h5>${elementos.titulo}</h5>
            </td>
            <td>
              <p>${elementos.precio}</p>
            </td>
            <td>
              <p>${elementos.input}</p>
            </td>
            <td>
              <p>${elementos.input*elementos.precio}</p>
            </td>
            <td>
              <button> </button>
            </td>
  `
lista.appendChild("cosita");

});


  
}






mostrarlibreria(milibreria);
