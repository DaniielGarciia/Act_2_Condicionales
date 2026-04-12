/* Funcion que dara inicio al ejercicio 8 en el formato Js cuando se haga clic en el botón */ 
function ejercicio8() {
  
// En este ejercicio y en los demás se pide mostrar en el HTML los números del 10 al 1, para esto se pueden usar diferentes tipos de bucles como for, while o do-while. A continuación, se presentan las tres versiones para lograr el mismo resultado de una manera simple usando document.write para mostrar los números en el HTML.

// Se presenta el ciclo for donde se inicializa una variable (i) en 10, se establece la condición de que i sea mayor o igual a 1, y se decrementa i en cada iteración(i--). Dentro del ciclo, se escribe el valor de i seguido de un espacio para mostrar los números del 10 al 1 en el HTML.
document.write("<h2> Cuenta regresiva con el ciclo FOR: </h2>");

for (let i = 10; i >= 1; i--) {
  document.write(i + " ");
}


document.write("<h2> Cuenta regresiva con el cicloWHILE: </h2>");

let i = 10;
while (i >= 1) {
  document.write(i + " ");
  i--;
}


document.write(" <h2>Cuenta regresiva con el ciclo DO-WHILE: </h2> ");

let j = 10;
do { document.write(j + " "); j--;
} while (j >= 1);
}
