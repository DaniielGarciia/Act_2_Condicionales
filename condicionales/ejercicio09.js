/* Funcion que dara inicio al ejercicio 9 en el formato Js cuando se haga clic en el botón */ 
function ejercicio9() {

// Declaracion de la variable y solicitd de numero al usuario.
let N = Number(prompt("¿Hasta qué número quieres hacer la operacion de sumar numeros entre si?"));

// Ciclo FOR para sumar los numeros desde 1 hasta N que sera el número ingresado.
let suma1 = 0;
// se declara el ciclo for con la variable i que inicia en 1, se establece la condicion de que i sea menor o igual a N (numero ingresado) y se incrementa i en cada iteracion del ciclo.

for (let i = 1; i <= N; i++) {
  suma1 = suma1 + i;
}
// Se genera el texto que se mostrara en la pagina con el resultado de la suma realizada con el ciclo while, utilizando document.write para mostrar el resultado en la pagina web. 
document.write("<h2> La suma de los números (n+n+n)... con el ciclo For es : " + suma1 + "</h2>");


// Se hace similiar pero iniciamos una variable suma2 en 0 y una variable i en 1, luego se utiliza un ciclo while para sumar los numeros desde 1 hasta N, incrementando i en cada iteracion del ciclo. Finalmente se muestra el resultado utilizando document.write.
let suma2 = 0;
let i = 1;
while (i <= N) {
  suma2 = suma2 + i;
  i++;
}
// Se genera el texto que se mostrara en la pagina con el resultado de la suma realizada con el ciclo while, utilizando document.write para mostrar el resultado en la pagina web.
document.write("<h2> La suma de los números (n+n+n)... con el ciclo While es : " + suma2 + "</h2>");



// Se hace similiar pero iniciamos una variable suma3 en 0 y una variable j en 1, luego se utiliza un ciclo do-while para sumar los numeros desde 1 hasta N, incrementando j en cada iteracion del ciclo. Finalmente se muestra el resultado utilizando document.write.
let suma3 = 0;
let j = 1;
do {
  suma3 = suma3 + j;
  j++;
} while (j <= N);

// Se genera el texto que se mostrara en la pagina con el resultado de la suma realizada con el ciclo do-while, utilizando document.write para mostrar el resultado en la pagina web.
document.write("<h2>La suma de los números (n+n+n)... con Do - While es: " + suma3 + "</h2>");

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}