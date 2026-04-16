/* Funcion que dara inicio al ejercicio 8 en el formato Js cuando se haga clic en el botón */ 
function ejercicio8() {
  
// En este ejercicio y en los demás se pide mostrar en el HTML los números del 10 al 1, para esto se piden usar diferentes tipos de bucles como for, while o do-while. A continuación, se presentan las tres versiones para lograr el mismo resultado de una manera simple usando document.write para mostrar los números en el HTML.

// Se presenta el ciclo for donde se inicializa una variable (i) en 10, se establece la condición de que i sea mayor o igual a 1, y se decrementa i en cada iteración(i--). Dentro del ciclo, se escribe el valor de i seguido de un espacio para mostrar los números del 10 al 1 en el HTML.

document.write("<h2> Cuenta regresiva con el ciclo For: </h2>");

// Ciclo donde la variable i se inicializa en 10, se establece la condicion de 1 sea mayor igual a 1 y se usa para decrementar en cada uno de los ciclos.
for (let i = 10; i >= 1; i--) {
  document.write(i + " ");
}


document.write("<h2> Cuenta regresiva con el ciclo While: </h2>");

// En este caso, se utiliza un ciclo while donde se inicializa una variable (i) en 10, y mientras i sea mayor o igual a 1, se escribe el valor de i seguido de un espacio. Después de escribir el valor, se decrementa i en cada iteración para continuar la cuenta regresiva hasta llegar al numero 1.
let i = 10;
while (i >= 1) {
  document.write(i + " ");
  i--;
}


document.write(" <h2>Cuenta regresiva con el ciclo DO-WHILE: </h2> ");

// Finalmente, se muestra el ciclo do-while donde se inicializa una variable (o) en 10, y se ejecuta el bloque de código dentro del do mientras o sea mayor o igual a 1. Dentro del bloque, se escribe el valor de o seguido de un espacio, y luego se decrementa o en cada iteración para continuar la cuenta regresiva hasta llegar al numero 1.
let o = 10;

do { document.write(o + " "); o--;
} while (o >= 1);

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}