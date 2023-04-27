const catalogoProductos = [
    {
      idProducto:0,
      nombreProducto:"Remera DryFit",
      precioProducto: 3300,
      stock: 10,
    },
    {
      idProducto:1,
      nombreProducto:"Remera Cool Elastic",
      precioProducto: 3500,
      stock: 11,
    },
    {
      idProducto:2,
      nombreProducto:"Short Webenit",
      precioProducto: 2200,
      stock: 12,
    },
    {
      idProducto:3,
      nombreProducto:"Medias",
      precioProducto: 1500,
      stock: 25,
    },
    {
      idProducto:4,
      nombreProducto:"Pollera Dama",
      precioProducto: 5000,
      stock: 100,
    },
  {
    idProducto:5,
    nombreProducto:"Campera SoftShell",
    precioProducto: 5500,
    stock: 1,
  },
  {
    idProducto:6,
    nombreProducto:"Pantalon Largo SoftShell",
    precioProducto: 4000,
    stock: 350,
  },
  {
    idProducto:7,
    nombreProducto:"Buzo SoftShell",
    precioProducto: 5000,
    stock: 101,
  },
  {
    idProducto:8,
    nombreProducto:"Campera SoftShell",
    precioProducto: 5000,
    stock: 105,
  },
  {
    idProducto:9,
    nombreProducto:"Campera Rompeviento",
    precioProducto: 5800,
    stock: 410,
  },
  {
    idProducto:10,
    nombreProducto:"Camperon largo",
    precioProducto: 9500,
    stock: 110,
  },
]

function capturar() {

    data= [
      {
        idProducto: document.getElementById("IdProducto").value,
        cantidad: document.getElementById("amount").value
      }
    ]

  const Costo = catalogoProductos[data[0]["idProducto"]]["precioProducto"] * data[0]["cantidad"];

  console.log(Costo);
  
  document.getElementById('input').innerHTML = Costo ;
}


/*function addRowProduct(){
  var rowCount = $("#tableDetailBill tr").length;
  //alert(rowCount);
  $("#tableDetailBill").append('<tr>' + 
  '<td>' + '<select id="IdProducto" name="IdProducto" style="width:650px" class="form-control" required>'+ 
  '<option disabled selected>Producto</option> <option value="1">Remera Dry Fit</option> ' +
  '<option value="2">Remera Cool Elastic </option>'+
  '<option value="3">Short Webenit</option>'+
  '<option value="4">Medias</option>'+
  '<option value="5">Pollera Dama</option>'+
  '<option value="6">Campera SoftShell</option>'+
  '<option value="7">Pantalon Largo SoftShell</option>'+
  '<option value="8">Buzo SoftShell</option>'+
  '<option value="9">Campera SoftShell</option>'+
  '<option value="10">Campera Rompeviento</option>'+
  '<option value="11">Camperon largo</option>' + '</td>'+
  '<td>' + '<input type="text" class="form-control" placeholder="cantidad" aria-label="cantidad" id="amount" name="amount"required>' +  '</td>');
}*/

