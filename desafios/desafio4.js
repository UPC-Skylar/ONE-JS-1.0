console.log("Bienvenido al programa");

let nombre = "Jack";
console.log(`¡Hola, ${nombre}!`);

let name = "Jack";
alert(`¡Hola, ${nombre}!`);

let lenguajeFav = prompt(
  "¿Cuál es el lenguaje de programación que más te gusta?"
);
console.log(lenguajeFav);

let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

let value1 = 9;
let value2 = 12;
let result = value2 - value1;
console.log(`La diferencia entre ${value1} y ${value2} es igual a ${result}.`);

let edad = prompt("Ingresa tu edad");
edad >= 18 ? alert("Eres mayor de edad") : alert("Eres menor de edad");

let number = parseInt(prompt("Ingrese un número"));
if (number === 0) {
  alert("El número ingresado es cero");
} else if (number < 0) {
  alert("El número es negativo");
} else {
  alert("El número es positivo");
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let nota = 7;
if (nota >= 7) {
  alert("Aprobado");
} else {
  alert("Reprobado");
}

console.log(Math.random());

console.log(Math.floor(Math.random() * 9 + 1));

console.log(Math.floor(Math.random() * 999 + 1));
