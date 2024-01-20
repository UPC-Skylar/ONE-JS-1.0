//Estas son las variables
let numeroSecreto = Math.floor(Math.random() * (10 - 1) + 1);
let intentos = 1;
let numeroUsuario = 0;
let maximosIntentos = 3;
//Realizar la comparación
while (numeroUsuario !== numeroSecreto) {
  numeroUsuario = parseInt(prompt("Indicame un numero por favor"));
  if (numeroUsuario === numeroSecreto) {
    alert(
      `Acertaste, el número es ${numeroSecreto}, felicitaciones! 🎖️\nTu número de intentos fue: ${intentos}`
    );
  } else if (numeroUsuario > numeroSecreto) {
    alert("El número secreto es menor");
  } else {
    alert("El número secreto es mayor");
  }
  intentos++;
  if (intentos > maximosIntentos) {
    alert(
      `Llegaste al número máximo de ${maximosIntentos} intentos, perdiste! 🫵🏼😂`
    );
    break;
  }
}
