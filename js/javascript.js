document.addEventListener('DOMContentLoaded', () => {

  const baseDeDatos = [
    {
      id:0,
      nombre:"Remera DryFit",
      precio: 3300,
      imagen: 'aps2.jpeg'
    },
    {
      id:1,
      nombre:"Remera Cool Elastic",
      precio: 3500,
      imagen: 'karate.jpeg',
    },
    {
      id:2,
      nombre:"Short Webenit",
      precio: 2200,
      imagen: 'shortWeb.jpeg',
    },
    {
      id:3,
      nombre:"Medias",
      precio: 1500,
      imagen: 'karate.jpeg',
    },
    {
      id:4,
      nombre:"Musculosa Dama",
      precio: 3300,
      imagen: 'musculosa.jpeg',
    },
  {
    id:5,
    nombre:"Campera SoftShell",
    precio: 5500,
    imagen: 'camperaUnion.jpeg',
  },
  {
    id:6,
    nombre:"Pantalon Largo SoftShell",
    precio: 4000,
    imagen: 'pantalonLargo.jpeg',
  },
  {
    id:7,
    nombre:"Buzo SoftShell",
    precio: 5000,
    imagen: 'buzo.jpeg',
  },
  {
    id:8,
    nombre:"Campera Microfibra",
    precio: 6000,
    imagen: 'camperamuni.jpeg',
  },
  {
    id:9,
    nombre:"Campera Rompeviento",
    precio: 5800,
    imagen: 'camperaChero.jpeg',
  },
  {
    id:10,
    nombre:"Chomba Spum",
    precio: 4500,
    imagen: 'chomba.jpeg',
  },

  ];

  let carrito = [];
  const divisa = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = 
  document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const miLocalStorage = window.localStorage;
  const DOMbotonFinalizar = document.querySelector('#boton-finalizar');

  //Dibuja todos los productos*/

  function renderizarProductos() {
      baseDeDatos.forEach((info) => {
          const miNodo = document.createElement('div');
          miNodo.classList.add('card', 'col-sm-4');
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('card-body');
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('card-title');
          miNodoTitle.textContent = info.nombre;
          const miNodoImagen = document.createElement('img');
          miNodoImagen.classList.add('img-fluid');
          miNodoImagen.setAttribute('src', info.imagen);
          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('card-text');
          miNodoPrecio.textContent = `${divisa}${info.precio}`; 
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-primary');
          miNodoBoton.textContent = '+';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
          miNodoCardBody.appendChild(miNodoImagen);
          miNodoCardBody.appendChild(miNodoTitle);
          miNodoCardBody.appendChild(miNodoPrecio);
          miNodoCardBody.appendChild(miNodoBoton);
          miNodo.appendChild(miNodoCardBody);
          DOMitems.appendChild(miNodo);
      });
  }

  function anyadirProductoAlCarrito(evento) {
      carrito.push(evento.target.getAttribute('marcador'))
      renderizarCarrito();
      guardarCarritoEnLocalStorage();
  }


  function renderizarCarrito() {
      DOMcarrito.textContent = '';
      const carritoSinDuplicados = [...new Set(carrito)];
      carritoSinDuplicados.forEach((item) => {
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              return itemId === item ? total += 1 : total;
          }, 0);
          const miNodo = document.createElement('li');
          miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
          miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-danger', 'mx-5');
          miBoton.textContent = 'X';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
      });
      DOMtotal.textContent = calcularTotal();
  }

  function borrarItemCarrito(evento) {
      const id = evento.target.dataset.item;
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      renderizarCarrito();
      guardarCarritoEnLocalStorage();

  }

  function calcularTotal() {
      return carrito.reduce((total, item) => {
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          return total + miItem[0].precio;
      }, 0).toFixed(2);
  }

  function vaciarCarrito() {
      carrito = [];
      renderizarCarrito();
      localStorage.clear();
  }

  function guardarCarritoEnLocalStorage () {
      miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage () {
      if (miLocalStorage.getItem('carrito') !== null) {
          carrito = JSON.parse(miLocalStorage.getItem('carrito'));
      }
  }

  function finalizarComprar(){
      alert("MUCHAS GRACIAS POR SU COMPRA");
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);
  DOMbotonFinalizar.addEventListener('click', finalizarComprar);

  // Inicio
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
});