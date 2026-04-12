/* Funcion que dara inicio al ejercicio 6 en el formato Js cuando se haga clic en el botón */ 
function ejercicio6() {

// 3 Variables para almacenar las 3 notas pedidas al usuario.
let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

// Varible para almacenar el resultado y directamente dar el resultado al usuario con un alert.

let promedio = (nota1 + nota2 + nota3) / 3;

// alerta donde se dira el promedio al usuario donde plantera decimales tambien de poner en el ejercicio, de querer limitar el numero de decimales se puede usar el método toFixed() donde se determinara en el (n) cuantos desimales deseo proyectar. Para más precision se mostrara el resultado con 2 decimales al ejercicio planteado por lo que seria toFixed(2).

//alert("Tu promedio es: " + promedio);
alert("Tu promedio es: " + promedio.toFixed(2));

// En el metodo se tiene que si el resultado obtenido en promedio es mayor o igual a 6 se dara un mensaje de alerta que esta aprobado, pero si el resultado es menor a 6 se dara un mensaje de alerta que esta reprobado.
if (promedio >= 6) {
  alert("¡Felicidades! Estás APROBADO.");
} else {
  alert("Lo sentimos. Estás REPROBADO.");
}
}