/* Funcion que dara inicio al ejercicio 12 en el formato Js cuando se haga clic en el botón */ 
function ejercicio12() {


// Se declara una variable y se pide bajo el prompt que el usuario ingrese un número para mostrar sus potencias. Se convierte a número con Number() para asegurarnos de que se pueda realizar la operación matemática correctamente.
let numero = Number(prompt("Escribe un número para ver sus potencias:"));

// Iniciamos con la versión utilizando el bucle FOR para mostrar las potencias del número ingresado.
document.write("<h2> Primeras 5 potencias con el cilo For: </h2> ");
// Se utiliza un bucle for, se declara una variable i que inicia en 1 y se incrementa hasta 5. En cada iteración, se calcula la potencia utilizando Math.pow() el cual es un recurso consultado por internet de la libreria y se muestra el resultado en la página por medio del document.write y la declaracion de metodo y al final un salto de linea.
for (let i = 1; i <= 5; i++) {
  document.write(numero + "^" + i + " = " + Math.pow(numero, i) + "<br>");
}

// Iniciamos con la versión utilizando el bucle WHILE para mostrar las potencias del número ingresado.
document.write("<h2> Primeras 5 potencias con el cilo While: </h2> ");
// Se declara una variable i que inicia en 1 y se incrementa dentro del bucle mientras sea menor o igual a 5. En cada iteración, se calcula la potencia utilizando Math.pow() y se muestra el resultado en la página por medio del document.write y la declaracion de metodo y al final un salto de linea.
let i = 1;
while (i <= 5) {
  document.write(numero + "^" + i + " = " + Math.pow(numero, i) + "<br>");
  i++;
}

// Iniciamos con la versión utilizando el bucle DO-WHILE para mostrar las potencias del número ingresado.
document.write("<h2>Potencias con DO-WHILE:</h2>");
// Se declara una variable j que inicia en 1 y se incrementa dentro del bucle mientras sea menor o igual a 5. En cada iteración, se calcula la potencia utilizando Math.pow() y se muestra el resultado en la página por medio del document.write y la declaracion de metodo y al final un salto de linea. El bucle do-while garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa desde el principio.
let j = 1;
do {
  document.write(numero + "^" + j + " = " + Math.pow(numero, j) + "<br>");
  j++;
} while (j <= 5);

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}