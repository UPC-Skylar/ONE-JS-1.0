//Estas son las variables
let numeroSecreto = 8;
let numeroUsuario = parseInt(prompt("Indicame un numero por favor"));
console.log(numeroUsuario);
//Realizar la comparación
numeroUsuario === numeroSecreto
  ? alert(`Acertaste, el número es ${numeroSecreto}, felicitaciones! 🎖️`)
  : alert("No acertaste, vuelve a intentarlo");
