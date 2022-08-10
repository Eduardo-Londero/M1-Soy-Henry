'use strict'

function BinarioADecimal(num) {
  //num ='1010' split()--> [1,0,1,0] reverse()-->[0,1,0,1]
  num = num.split('').reverse();// num =['0','1','0','1']
  //sum 2^Posicion * valor
  let result = 0;
  for (let i = 0; i < num.length; i++){
    result = result +(Math.pow(2, i) * parseInt(num[i]));//2^0 * 0;
  }
  return result;
}

function DecimalABinario(num) {
  let resultado = '';
  while (num > 0) {
    resultado = (num % 2) + resultado;
    num = Math.floor(num /2);
  }
return resultado;

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}