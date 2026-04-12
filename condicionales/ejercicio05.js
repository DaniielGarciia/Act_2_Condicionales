/* Funcion que dara inicio al ejercicio 5 en el formato Js cuando se haga clic en el botón */ 
function ejercicio5() {

  // Se pedira 2 numeros entonces se tiene las 2 variables de estos numeros ingresados por el usuario
let num1 = Number(prompt("Escribe el primer número:"));
let num2 = Number(prompt("Escribe el segundo número:"));
// Se tendra una deccion del usuario por algun metodo que decida para operar estos dos numeros y esta sera la variable decicion para activar el switch.
let operacion = prompt("¿Qué operación quieres? Escribe: suma, resta, mult o div");
// Necesitamos una variable para almacenar el resultado de la operacion que se realiza.
let resultado;

// Usamos el metodo con la variable de decicion para activar el switch y dependiendo de lo que el usuario escriba se realizara la operacion correspondiente, si no se escribe ninguna de las opciones se activara el default y se le indicara al usuario que no se reconocio la operacion. 

// Algo a resaltar es que en este caso si se desea hacer el metodo infinito debemos usar ademas un ciclo Do-While.

switch (operacion) {
  
  // En este caso la suma se da al sumar o unir estos dos numeros obtenidos por eso el resultado sera igual a num1 + num2 y se mostrara el resultado con un alert indicando la operacion realizada y el resultado obtenido.
  // A comparacion de los anteriores ejercicios (1 - 4) se uso la comilla invertida para dar uso de otro tema aprendido en la clases vistas.
  
  case "suma":
    resultado = num1 + num2;
    alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
    break;

    //En este caso la resta es lo contrario a la suma entonces se usa el signo necesario (-).
  
  case "resta":
    resultado = num1 - num2;
    alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
    break;
  
    //Lo mismo para la multiplicacion pero con el signo de multiplicacion (*).
  case "mult":
    resultado = num1 * num2;
    alert(`Resultado: ${num1} × ${num2} = ${resultado}`);
    break;
  
    //lo mismo para la division pero con el signo de division (/).
    // Se tomo una decision y es que se usa el metodo if para comparar y definir si el numero es 0 dar claridad de que no se puede dividir entre 0, si no es === a 0 se hara la operacion.
  case "div":
    if (num2 === 0) {
      alert("Error: no se puede dividir entre 0.");
    } 
    else {
      resultado = num1 / num2;
      alert(`Resultado: ${num1} ÷ ${num2} = ${resultado}`);
    }
    break;
  
    // Si el usuario escribe algo diferente a los casos dados se activara el default y se le indicara que no se reconocio la operacion.

    default:
    alert("Operación no reconocida. Por favor escribe una de las opciones: suma, resta, mult o div.");
}
}