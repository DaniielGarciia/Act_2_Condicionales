/* Funcion que dara inicio al ejercicio 13 en el formato Js cuando se haga clic en el botón */ 
function ejercicio13() {

  // Iniciamos una variable la cual se llamará numero, esta  se usara para almacenar el número ingresado por el usuario.
let numero;

// Se utiliza un metodo do-while para pedir números al usuario. El bucle se detiene cuando el usuario ingresa un número negativo.
do {
  // Se le pide al usuario que ingrese un número, y se convierte a tipo Number para asegurarnos de que sea un valor numérico.
  numero = Number(prompt("Escribe un número que quieras (Si quieres salir, escribe un número negativo):"));
// Si el número ingresado es mayor o igual a 0, se muestra un mensaje indicando que se ha ingresado un número positivo.
  if (numero >= 0) {

// Con esto quedara un registro de los números positivos que se han ingresado antes de que el usuario ingrese un número negativo para salir del programa.
    document.write("Número positivo ingresado: " + numero + "<br>");
  }
// El bucle continuará ejecutándose hasta que el usuario ingrese un número negativo, momento en el cual se mostrará un mensaje indicando que se ha ingresado un número negativo y que el programa ha terminado.
} while (numero >= 0);
// Se muestra un mensaje indicando que se ha ingresado un número negativo y que el programa ha flinalizado.
document.write("<p>Ingresaste un número negativo. Has terminado el programa.</p>");

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}