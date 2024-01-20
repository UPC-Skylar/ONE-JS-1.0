let num = 1;
while (num < 11) {
  console.log(num);
  num++;
}

let number = 10;
while (number >= 0) {
  console.log(number);
  number--;
}

let userNumber = 0;
while (userNumber <= 0) {
  userNumber = parseInt(prompt("Elige un número mayor que cero"));
  if (userNumber <= 0)
    alert("El número no es válido, ingrese un número mayor que cero");
}
while (userNumber >= 0) {
  console.log(userNumber);
  userNumber--;
}

let numeroUsuario = 0;
let i = 0;
while (numeroUsuario <= 0) {
  numeroUsuario = parseInt(prompt("Elige un número mayor que cero"));
  if (numeroUsuario <= 0)
    alert("El número no es válido, ingrese un número mayor que cero");
}
while (i <= numeroUsuario) {
  console.log(i);
  i++;
}
