let nombreDeUsuario= prompt ("Ingresa su nombre");
alert("Bienvenido/a" + " "+ nombreDeUsuario);

const catalogoProductosVerano = [
    {
      idProducto:1,
      nombreProducto:"Remera DryFit",
      precioProducto: 3300,
      stock: 10,
    },
    {
      idProducto:2,
      nombreProducto:"Remera Cool Elastic",
      precioProducto: 3500,
      stock: 11,
    },
    {
      idProducto:3,
      nombreProducto:"Short DryFit",
      precioProducto: 2200,
      stock: 12,
    },
    {
      idProducto:4,
      nombreProducto:"medias",
      precioProducto: 1500,
      stock: 25,
    },
    {
      idProducto:5,
      nombreProducto:"Pollera Dama",
      precioProducto: 5000,
      stock: 100,
    },
]

const catalogoProductosInvierno = [
  {
    idProducto:1,
    nombreProducto:"Campera SoftShell",
    precioProducto: 5500,
    stock: 1,
  },
  {
    idProducto:2,
    nombreProducto:"Pantalon Largo SoftShell",
    precioProducto: 4000,
    stock: 350,
  },
  {
    idProducto:3,
    nombreProducto:"Buzo SoftShell",
    precioProducto: 5000,
    stock: 101,
  },
  {
    idProducto:4,
    nombreProducto:"Campera SoftShell",
    precioProducto: 5000,
    stock: 105,
  },
  {
    idProducto:5,
    nombreProducto:"Campera Rompeviento",
    precioProducto: 5800,
    stock: 410,
  },
  {
    idProducto:6,
    nombreProducto:"Camperon largo",
    precioProducto: 9500,
    stock: 110,
  },
]

let seccion = prompt("A que seccion desea ingresar?: \n *Seccion Verano \n *Seccion Invierno");

function mostrarCatalogo(catalogo) {
  console.log("Catalogo productos", seccion, ":");
  for (let i = 0; i < catalogo.length; i++) {
    alert(`${i + 1}. ${catalogo[i].nombreProducto} - $${catalogo[i].precioProducto}`);
  }
}

switch (seccion) {
    case "Verano":
      mostrarCatalogo(catalogoProductosVerano);
      const prodElegidoVer = prompt("¿Qué producto desea? Recuerde ingresar el nro tal cual ve en el catalogo");
      const productoBuscadoVer = catalogoProductosVerano.find( pev => pev.idProducto == prodElegidoVer );
      console.log(productoBuscadoVer);
      break;
    case "Invierno":
      mostrarCatalogo(catalogoProductosInvierno);
      const prodElegidoInv = prompt("¿Qué producto desea? Recuerde ingresar el nro tal cual ve en el catalogo");
      const productoBuscadoInv = catalogoProductosVerano.find( pei => pei.idProducto == prodElegidoInv );
      console.log(productoBuscadoInv);
      break;
    default:
      alert("No ingresó un valor correcto");
      break;
}



