/* Funcion que dara inicio al ejercicio 14 en el formato Js cuando se haga clic en el botón */ 
function ejercicio14() {

// Declaramos una variable para almacenar los productos de la compra el cual con las llaves [] se indica que es un array. 
let compras = [];

// Le solicitamos al usuario que ingrese 5 productos utilizando un ciclo for y el método prompt para obtener la entrada del usuario. En este cada producto ingresado se agrega al array compras utilizando el método push.

// El ciclo for tiene una variable i que se inicializa en 0 y se ejecuta mientras i sea menor que 5, incrementándose en 1 en cada iteración. Dentro del ciclo, se muestra un mensaje al usuario para que ingrese el producto correspondiente al número de iteración (i + 1) para que sea más claro. Cada producto ingresado se almacena en la variable producto y luego se agrega al array compras.

for (let i = 0; i < 5; i++) {
  let producto = prompt("Escribe el nombre del producto de tu lista de compras " + (i + 1) + ":");
  compras.push(producto);
}

// Imprimimos en la página todos los productos teniendo en cuenta que el array compras contiene los productos ingresados por el usuario. Para mostrar la lista de compras, se utiliza un ciclo for para recorrer cada elemento del array y se escribe cada producto dentro de una etiqueta <li> para crear una lista ordenada en HTML.
document.write(" <h2> Lista de compras: </h2> ");
document.write("<ul>");
// El ciclo for tiene una variable i que se inicializa en 0 y se ejecuta mientras i sea menor que la longitud del array compras (compras.length), incrementándose en 1 en cada iteración. Dentro del ciclo, se escribe cada producto del array compras dentro de una etiqueta <li> para crear una lista ordenada en HTML.
for (let i = 0; i < compras.length; i++) {
  document.write("<li>" + compras[i] + "</li>");
}
document.write("</ul>");

// Como se crea en la pagina de los ejercicios el boton sera para volver al menu de los ejercicios.
document.write("<hr> <a href='index.html'> <button> Volver al menú de los ejercicios </button></a>" );

}
