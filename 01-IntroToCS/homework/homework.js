'use strict'

function BinarioADecimal(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  let bina = [];
    let resul = 0;
    let coci = 2;
    let resto = 0;

    while (num > 1) {

        resto = num % coci; // guardamos el resto
        num = Math.floor(num / coci); // Guardamos el cociente
        bina.unshift(resto); // vamos armando el numero binario
        // con los restos que obtenemos
        // de las divisiones sucesivas
    }

    bina.unshift(num) // este puede ser un 1 o un 0,
        // por ello lo agregamos al bina-rio
    return bina.join('');


}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}