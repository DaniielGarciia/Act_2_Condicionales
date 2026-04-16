/* Funcion que dara inicio al ejercicio 11 en el formato Js cuando se haga clic en el botón */ 
function ejercicio11() {

// Se inicializa una variable para almacenar la contraseña ingresada por el metodo prompt.
  let clave = prompt("Escribe la contraseña:");

// Como se solicito que se repita el proceso hasta que se ingrese la contraseña correcta, se utiliza un bucle while para verificar si la contraseña ingresada es incorrecta. Si lo es, se muestra un mensaje de error y se solicita nuevamente la contraseña.  

while (clave !== "SESAMO123") {
  alert("Contraseña incorrecta. Inténtalo de nuevo.");
  clave = prompt("Escribe la contraseña:");
}
// Si la contraseña ingresada es correcta, se muestra un mensaje de éxito y se concede el acceso.
alert("¡Contraseña correcta! Acceso concedido.");

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}