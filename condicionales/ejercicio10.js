/* Funcion que dara inicio al ejercicio 10 en el formato Js cuando se haga clic en el botón */ 
function ejercicio10() {

// Metodo for para imprimir los multiplos de 5 del 1 al 50
// Se continua usando el document.write para mostrar los resultados en la pagina web.

// El document.write se utiliza para mostrar un encabezado en la pagina web indicando que los numeros mostrados son los multiplos de 5 hasta el 50 utilizando el ciclo for como es solicitado.
document.write("<h2> Múltiplos de numero 5 hasta el 50 con For: </h2>");

// ciclo for donde se inicializa una variable i en 1, se establece la condicion que i es menor igual a 50 y se incrementara en cada iteracion. Dentro del ciclo se verifica si i es un multiplo de 5 utilizando el operador modulo (%), si es asi se imprime el valor de i seguido de un espacio.
  for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    document.write(i + " ");
  }
}

// El document.write se utiliza para mostrar un encabezado en la pagina web indicando que los numeros mostrados son los multiplos de 5 hasta el 50 utilizando el ciclo while como es solicitado.
document.write("<h2>Múltiplos de 5 con WHILE:</h2>");

// Se inicializa una variable i en 1, se establece la condicion que i es menor igual a 50 y se incrementara en cada intento. Dentro del ciclo se verifica si i es un multiplo de 5 utilizando el operador modulo (%), de esta manera si es asi se imprime el valor de i seguido de un espacio.
let i = 1;
while (i <= 50) {
  if (i % 5 === 0) {
    document.write(i + " ");
  }
  i++;
}

// El document.write se utiliza para mostrar un encabezado en la pagina web indicando que los numeros mostrados son los multiplos de 5 hasta el 50 utilizando el ciclo do-while como es solicitado.
document.write("<h2>Múltiplos de 5 con DO-WHILE:</h2>");

// Se inicializa una variable j en 1, se establece la condicion que j es menor igual a 50 y se incrementara en cada intento. Dentro del ciclo se verifica si j es un multiplo de 5 utilizando el operador modulo (%), de esta manera si es asi se imprime el valor de j seguido de un espacio.
let j = 1;
do {
  if (j % 5 === 0) {
    document.write(j + " ");
  }
  j++;
} while (j <= 50);

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}