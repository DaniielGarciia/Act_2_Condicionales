/* Funcion que dara inicio al ejercicio 18 en el formato Js cuando se haga clic en el botón */ 
function ejercicio18() {

  // Declaramos las variables necesarias para el ejercicio. Iniciamos el total en 0 y pedimos el precio del producto al usuario.
let total = 0;
let precio = Number(prompt("Ingresa el precio del producto (Para terminar ingresa 0):"));
// Usamos un ciclo while para seguir pidiendo precios hasta que el usuario ingrese 0. Dentro del ciclo, sumamos el precio al total.
while (precio !== 0) {
  total = total + precio;
  // Pedimos el precio del siguiente producto al usuario.
  precio = Number(prompt("Ingresa el precio de otro producto (0 para terminar):"));
}
// Al terminar el ciclo y tener el total de los productos, mostramos un resumen del carrito.
document.write("<h2> Resumen del carrito de comprar: </h2>");
document.write("El total antes de descuento es: $" + total.toFixed(2) + "<br>");

// Usamos un ciclor if para verificar si el total supera los $100. Si es así, calculamos el descuento del 10% (total * 0.10) y mostramos el total con descuento. Si no, mostramos que no aplica descuento y el total final.
if (total > 100) {
  // Creamos la variable descuento para almacenar el monto del descuento y luego calculamos el total con descuento restando el descuento al total original.
  let descuento = total * 0.10;
  // Usamos otra variable para almacenar el valor total con descuento y poder mostrarlo al usuario.
  let totalConDescuento = total - descuento;
  
  // Mostramos el descuento aplicado y el total final con descuento al usuario.
  document.write("Descuento aplicado (10%): -$" + descuento.toFixed(2) + "<br>");
  //Usamos un strong para resaltar el total final con descuento. Ademas del else para mostrar el total de la cuenta sino se aplica el descuento.
  document.write("<strong>Total final: $" + totalConDescuento.toFixed(2) + "</strong>");
} else {
  document.write("No se aplica el descuento (el total no supera los $100). <br>");
  document.write("<strong> Total final a pagar: $" + total.toFixed(2) + "</strong>");
}

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}