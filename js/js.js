function CalcularPrecioFinal(precioUnitario, cantidad){
    let precioFinal = precioUnitario*cantidad;
    alert("El costo final es $" + precioFinal);
}

let producto = prompt("Seleccione un producto: \n 1- Camiseta Cool Elastic \n 2- Camiseta Dry Fit \n 3- Short Dry Fit \n 4- Medias", "");
let cantidad = prompt("Ingrese cual es la cantidad deseada de dicho producto", "");

switch (producto) {
    case "1":
      precioUnitario=3300;
      break;
    case "2":
      precioUnitario=2900;
      break;
    case "3":
        precioUnitario=2000;
      break;
    case "4":
      precioUnitario=1500
    break;
    default:
      alert("No ingresó un valor correcto")
      break;
  }

alert(CalcularPrecioFinal(precioUnitario,cantidad));