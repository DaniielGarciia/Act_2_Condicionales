/* Funcion que dara inicio al ejercicio 3 en el formato Js cuando se haga clic en el botón */ 
function ejercicio3() {

// Variables para almacenar el número ingresado por el usuario y la entrada del prompt. Se utiliza un ciclo do-while para validar que el usuario ingrese un número válido, evitando que se ingresen textos o se deje el campo vacío. El ciclo continuará hasta que se ingrese un número válido.
let numero;
let entrada;
// Validación para asegurarse de que el usuario ingrese un número válido y no ingrese texto o deje el campo vacío. El ciclo se repetirá hasta que se ingrese un número válido o se cumpla la condición impuesta.
do {
  entrada = prompt("Por favor, escribe un número para saber si es par o impar:");
  numero = Number(entrada);

  /* este recurso de comparación lo aprendi viendo videos para validar entradas y no repetir código en las mismas preguntas como aqui que se revisara que la entrada tenga algo y además que sea un numero y no letras o tipo String y dara el alert correspondiente */
  
  if (!entrada || isNaN(numero)) {
    alert("No ingresaste un número válido. Intenta de nuevo.");
  }
// Si esto esta bien y se ingresa un numero se saldra del ciclo y se evaluara si es par o impar, pero si no se ingresa un numero se repetira el ciclo hasta que se ingrese un numero valido.
} while (!entrada || isNaN(numero));

// Operacion para determinar si el número es par o impar utilizando el operador módulo (%). Si el resultado de numero % 2 es igual a 0, entonces el número es par; de lo contrario, es impar. Se muestra un mensaje al usuario indicando si el número ingresado es par o impar.
if (numero % 2 === 0) {
  alert(numero + " es un número PAR.");
} 
// Si el número no es par, se ejecuta el bloque else, indicando que el número es impar.
else {
  alert(numero + " es un número IMPAR.");
}
}
