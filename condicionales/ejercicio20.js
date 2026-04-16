/* Funcion que dara inicio al ejercicio 20 en el formato Js cuando se haga clic en el botón */ 
function ejercicio20() {
// Se crea una variable con un arreglo de 5 números enteros
let numeros = [10, 20, 30, 40, 50];

document.write("<h2>Ejercicio de array: </h2>");
document.write(numeros.join(", "));

// Se crean variables para el nuevo número y la posición donde reemplazar este número.
let nuevoNumero = Number(prompt("¿Qué número quieres poner?"));
let posicion = Number(prompt("¿En qué posición lo pones? (0 al 4)"));

// Se valida que la posición sea válida antes de actualizar el array.
if (posicion < 0 || posicion > 4) {
  // Si la posición no es válida, se muestra un mensaje de error.
  alert("Posición inválida. Solo puedes usar del 0 al 4.");
} else {
  // Si la posición es válida, se actualiza el número en el array y se muestra el array actualizado.
  numeros[posicion] = nuevoNumero;
  document.write("<h2>Se actualizo el Array: </h2>");
  document.write(numeros.join(", "));
}

// Se muestra un mensaje indicando que el ejercicio ha terminado.
document.write("<h2>Ejercicio terminado</h2>");

// menu de regresar al index.html
document.write("<button><a href='index.html'>Regresar al menú de los ejercicios.</a></button>");
}