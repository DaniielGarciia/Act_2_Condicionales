/* Funcion que dara inicio al ejercicio 17 en el formato Js cuando se haga clic en el botón */ 
function ejercicio17() {
// Iniciamos una variable vacía para almacenar los estudiantes en un array.
let estudiantes = [];
// Iniciamos un ciclo para pedir los datos de 3 estudiantes como maximo, pero se puede ajustar el número de iteraciones según se necesite.
for (let i = 0; i < 3; i++) {
  
  // Se almacenara en una variable la informacion del estudiante, que se pide al usuario como el nombre y la nota del estudiante mediante prompts. El nombre se almacena como una cadena de texto y la nota se convierte a un número decimal usando parseFloat.
  let nombre = prompt("Nombre del estudiante " + (i + 1) + ":");
  let nota = parseFloat(prompt("Nota del estudiante " + (i + 1) + ":"));

  // Se crea una variable con el noombre de estudiante y sus atributos u objetos. 
  let estudiante = {
    nombre: nombre,
    nota: nota
  };

  // Esta informacion del estudiante se agrega al array de estudiantes usando el método push, que añade el nuevo objeto al final del array.
  estudiantes.push(estudiante);
}

// Impirimo o muestro en el archivo html la informacion de los estudiantes usando un ciclo for para recorrer el array de estudiantes. Para cada estudiante, se accede a sus propiedades como nombre y nota usando la notación de punto (.) .
document.write("<h2>Lista de Estudiantes:</h2>");
for (let i = 0; i < estudiantes.length; i++) {
  document.write("Estudiante: " + estudiantes[i].nombre + " - Nota: " + estudiantes[i].nota + "<br>");
}

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}