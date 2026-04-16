/* Funcion que dara inicio al ejercicio 15 en el formato Js cuando se haga clic en el botón */ 
function ejercicio15() {

// Declaramos la variable con los nombres y el arreglo de nombres en un array.
let nombres = ["Carlos", "María", "Sofía", "Luis", "Andrea"];

// Usamos una variable para almacenar el nombre que el usuario quiere buscar y un booleano para indicar si se encontró o no.
let buscar = prompt("¿Qué nombre quieres buscar?");
let encontrado = false;

// Iniciamos un ciclo For donde inicializamos una variable i en 0, mientras i sea menor que la longitud del arreglo de nombres, incrementamos i en cada iteración.
for (let i = 0; i < nombres.length; i++) {
  // Entonces si nombres en la posición i es igual al nombre que el usuario quiere buscar, cambiamos el valor de encontrado a true de lo contrario seguira.
  if (nombres[i] === buscar) {
    encontrado = true;
  }
}

// Si se encontró el nombre, mostramos un mensaje de alerta indicando que el nombre sí está en la lista, de lo contrario, mostramos un mensaje indicando que el nombre no está en la lista.
if (encontrado) {
  alert("¡El nombre '" + buscar + "' sí está en la lista!");
} else {
  alert("El nombre '" + buscar + "' NO está en la lista.");
}
}