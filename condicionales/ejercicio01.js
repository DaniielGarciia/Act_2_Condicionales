/* Funcion que dara inicio al ejercicio 1 en el formato Js cuando se haga clic en el botón */ 
function ejercicio1() {

/* Mensaje para solicitar la edad con el "prompt" donde sera igual a la variable "edad" */
let edad = prompt("¿Cuántos años tienes?");

// Convierto lo que escribió a número
edad = Number(edad);

// "isNaN" es una función que revisa si el valor ingresado por el prompt es un número, si el valor ingresado no es un numero sino tipo string  mostrara un mensaje de error, si el numero es menor a 18 mostrara un mensaje de acceso denegado y si es mayor o igual a 18 mostrara un mensaje de bienvenida.a
if (isNaN(edad)) {
  alert("Ingresaste un valor no válido. Por favor ingresa un número.");
} else if (edad < 18) {
  alert("Acceso denegado. Eres menor de edad.");
} else {
  alert("Bienvenido. Eres mayor de edad.");
}
}