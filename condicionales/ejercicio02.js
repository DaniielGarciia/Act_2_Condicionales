
/* Funcion que dara inicio al ejercicio 2 en el formato Js cuando se haga clic en el botón */ 
function ejercicio2() {

/*** En este ejercicio, se le pedirá al usuario que elija un topping para su helado de los entregados en el ejercicio 2. 
 * El precio base del helado es de $5, y cada topping tiene un costo adicional que se suma al precio base.:
- Oreo: $2
- KitKat: $3
- Brownie: $4
 */ 

/*Bajo el prompt se le preguntara al usuario que topping quiere*/
let topping = prompt("¿Qué topping quieres para tu helado? Oreo, KitKat o Brownie");
/* Variable con el precio base para sumar el valor del topping a este al seleccionarlo*/
let precioBase = 5;
/**
 * Se declara una variable en 0 para almacenar el precio adicional del topping seleccionado. Luego, se utiliza un switch para asignar el precio correcto según el topping elegido por el usuario. Si el topping no es reconocido, se muestra un mensaje de error. Finalmente, si el topping es válido, se calcula y muestra el precio total del helado sumando el precio base y el precio adicional del topping.
 */
let precioExtraTopping = 0;

/* Con el metodo switch se declara la condicion y segun el caso o la solucion propuesta tomara la accion correspondiente declarada en cada caso */
switch (topping) {
  
  case "Oreo":
    
  /* Valor del topping que tomara la variable antes puesta inicializada con un valor en 0*/
  precioExtraTopping = 2;
  /* descanso del case con el break */  
  break;
  
  /* Valor del topping que tomara la variable antes puesta inicializada con un valor en 0*/
  case "KitKat":
    precioExtraTopping = 3;
    break;
  /* Valor del topping que tomara la variable antes puesta inicializada con un valor en 0*/
    case "Brownie":
    precioExtraTopping = 4;
    break;
  /* El default permite que en caso de que el usuario ingrese un topping no reconocido en los casos, se muestra un mensaje de error donde damos un alert al usuario. */  
  default:
    alert("El topping ingresado no fue reconocido. Recuerda que solo hay Oreo, KitKat o Brownie.");
}

/* Si el topping fue válido y es mayor que 0, sumamos los precios y mostramos el total en un alert */
if (precioExtraTopping > 0) {
  let total = precioBase + precioExtraTopping;
  alert("El precio total de tu helado mas el topping es de: $ " + total + ". Gracias por tu compra.");
}
} 
