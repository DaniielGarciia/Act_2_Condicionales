/* Funcion que dara inicio al ejercicio 4 en el formato Js cuando se haga clic en el botón */ 
function ejercicio4() {

  // Variable para almacenar el número ingresado por el usuario. En este caso, se utiliza el método prompt para solicitar al usuario que ingrese un número del 1 al 7, y se convierte a un número utilizando Number() para asegurarse de que se pueda comparar correctamente en el switch. De no ser un valor entre 1 y 7, se mostrará un mensaje de error.

let dia = Number(prompt("Escribe un número del 1 al 7:"));

// metodo switch con la variale dia para evaluar el dia ingresado en numero con este en los casos sera la opcion o decicion que se mostrara en este caso con un mensaje con la funcion alert para dar la informacion correspondiente.
switch (dia) {
  case 1:
    alert("El día 1 es: Lunes");
    break;
  case 2:
    alert("El día 2 es: Martes");
    break;
  case 3:
    alert("El día 3 es: Miércoles");
    break;
  case 4:
    alert("El día 4 es: Jueves");
    break;
  case 5:
    alert("El día 5 es: Viernes");
    break;
  case 6:
    alert("El día 6 es: Sábado");
    break;
  case 7:
    alert("El día 7 es: Domingo");
    break;
  // Si el número ingresado no coincide con ninguno de los casos anteriores, se ejecutará el bloque default, mostrando un mensaje de error indicando al usario que solo se pueden y se permite ingresar números del 1 al 7.
    
  default:
    alert("Error: solo puedes ingresar un número del 1 al 7.");
}
}