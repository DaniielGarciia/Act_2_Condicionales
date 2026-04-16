/* Funcion que dara inicio al ejercicio 19 en el formato Js cuando se haga clic en el botón */ 
function ejercicio19() {
// Se declara la variable opcion para almacenar la elección del usuario en el menú. Se usará un ciclo do-while para mostrar el menú repetidamente hasta que el usuario elija salir (opción 3).
let opcion;
// Se inicia el ciclo do-while para mostrar el menú y procesar la opción del usuario sin cortes del mismo ciclo. Dentro del ciclo, se muestra un prompt con las opciones disponibles y se convierte la entrada a un número usando Number().
do {
  
  // Se da un menu con tres opciones cada uno con su salto de linea o espacio: Saludar, Despedirse y Salir. El usuario debe ingresar el número de la opción que desea ejecutar.
  opcion = Number(prompt("MENÚ: \n1. Saludar \n2. Despedirse \n3. Salir \n\nEscribe el número de tu opción:"));

  // Se usa el ciclo switch para evaluar la opción ingresada por el usuario. Dependiendo del caso, se muestra un mensaje de saludo, despedida o salida. Si el usuario ingresa una opción no válida, se muestra un mensaje de error y se pide que elija otra.
  switch (opcion) {
    case 1:
      alert("¡Hola! ¿Cómo estás? ¡Bienvenido!");
      break;
    case 2:
      alert("¡Hasta luego! Que tengas un buen día.");
      break;
    case 3:
      alert("Saliendo del menú...");
      break;
    default:
      alert("Opción inválida. Por favor elige 1, 2 o 3.");
  }
// El ciclo do-while se repetirá mientras la opción ingresada por el usuario no sea 3 (Salir). Esto permite que el usuario interactúe con el menú varias veces hasta que decida salir.
} while (opcion !== 3);

// Se muestra un mensaje final indicando que el programa ha terminado después de que el usuario elija salir del menú.
document.write("<p>El programa terminó. Gracias por usar este ejercicio.</p>");

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );
}