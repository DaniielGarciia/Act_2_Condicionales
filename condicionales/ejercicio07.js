/* Funcion que dara inicio al ejercicio 7 en el formato Js cuando se haga clic en el botón */ 
function ejercicio7() {

// Designacion de variable para almacenar el valor numerico de dolares ingresado por el usuario. 
let dolares = Number(prompt("¿Cuántos dólares quieres convertir?"));

// Variable para usar en el switch para elegir la moneda a la que se desea convertir los dólares. Se le pide al usuario que ingrese el nombre de la moneda a la que desea convertir sus dólares, y se almacena en la variable "moneda". El usuario debe escribir exactamente "Euros", "Pesos" o "Soles" y e caso del nombre digitado hara la conversion del mismo bajo la operacion designada.
let moneda = prompt("¿A qué moneda quieres convertir tus dólares? Escribe una de las siguientes: Euros, Pesos o Soles");

// Metodo switch con la variable "moneda" y los casos para cada conversion que se hara segun la respuesta dada por el usuario.
switch (moneda) {
  
  // Caso de "Euros" donde se usara una variable para hacer la conversion de dolares con una tasa fija (El valor puesto corresponde al dia de hoy 11/04/2026).

    case "Euros":
    // En la variable se hara la operacionde multiplicar los dolares ingresados por la tasa de conversion a euros (0.85) y se mostrara el resultado con un alert para mostrar el resultado de la conversion con dos decimales usando el metodo toFixed(2) en el cual se uso en otro ejercicio (Ejercicio 6).
    let euros = dolares * 0.85;
    alert(`${dolares} dólares = ${euros.toFixed(2)} Euros`);
    break;

    case "Pesos":
    // Aqui igual pero en el valor de los pesos colombianos.
    let pesos = dolares * 3636;
    alert(`${dolares} dólares = ${pesos.toFixed(2)} Pesos colombianos`);
    break;
  
    case "Soles":
    // Aqui igual pero en el valor de los soles peruanos.
    let soles = dolares * 3.37;
    alert(`${dolares} dólares = ${soles.toFixed(2)} Soles peruanos`);
    break;
  
    // En caso de que el usuario ingrese un nombre de moneda que no sea "Euros", "Pesos" o "Soles", se ejecutará el bloque default, mostrando un mensaje de error indicando que la moneda no es reconocida y recordando al usuario las opciones válidas.
    default:
    alert("Moneda no reconocida. Solo puedes elegir: Euros, Pesos o Soles.");
}
}