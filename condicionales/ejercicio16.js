/* Funcion que dara inicio al ejercicio 16 en el formato Js cuando se haga clic en el botón */ 
function ejercicio16() {
// Creamos una variable donde definimos sus atributos para representar un auto ({})
let auto = {marca: "Toyota", modelo: "Prado", año: 2015
};
// Creamos con document.write del auto original con sus atributos definidos en la variable auto. 

document.write("<h2> Informacion del Auto: </h2>");
// Como auto es un objeto, accedemos a sus atributos con la notacion de punto (.) y los mostramos con document.write.
document.write("Marca: " + auto.marca + "<br>");
document.write("Modelo: " + auto.modelo + "<br>");
document.write("Año: " + auto.año + "<br>");

// Se solicita al usuario el nuevo año del vehiculo y para actualizar el objeto entonces declaramos otra variable para almacenar el nuevo año, y luego asignamos ese valor al atributo año del objeto auto.
let nuevoAño = Number(prompt("¿Cuál es el nuevo año del auto?"));
auto.año = nuevoAño;
// Finalmente, mostramos la informacion del auto actualizado con document.write, accediendo a sus atributos con la notacion de punto (.) para mostrar el nuevo año.
document.write("<h2> Informacion del Auto actualizado: </h2>");
document.write("Marca: " + auto.marca + "<br>");
document.write("Modelo: " + auto.modelo + "<br>");
document.write("Año: " + auto.año + "<br>");

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}
