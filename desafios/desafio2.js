//Apartado 1
let day = prompt(
  "¿Que día de la semana es?\nDigite correctamente alguna de estas opciones:\nLunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo"
);
day == "Sábado" || day == "Domingo"
  ? alert("¡Buen fin de semana!")
  : alert("¡Buena semana!");
//Apartado 2
let number = parseInt(prompt("Elija un número"));
number < 0
  ? alert("El numero es negativo")
  : number > 0
  ? alert("El número es positivo")
  : alert("El número es cero");
//Apartado 3
let puntuacionJugador = parseInt(prompt("Ingrese su puntuación"));
if (puntuacionJugador < 0 || puntuacionJugador > 100)
  alert("Ingrese una puntuación entre 0 y 100.");
puntuacionJugador === 100
  ? alert("¡Felicidades, has ganado!")
  : alert("Intenta nuevamente para ganar");
//Apartado 4
let saldoCuenta = 100; //Supongamos que tiene 100USD en su cuenta
alert(`El saldo de tu cuenta es: ${saldoCuenta}`);
//Apartado 5
let nombre = prompt("Ingresa tu nombre");
alert(`Bienvenido, ${nombre}`);
