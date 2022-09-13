'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var Decimal = 0;
  for (let i = 0; i < num.length; i++) {
    Decimal = (num[i] * Math.pow(2, num.length -1 -i)) + Decimal ;   
  }
  return Decimal;

}

function DecimalABinario(num) {
  // tu codigo aca
  var binario=[];
  while (num!==0){
    binario= (num%2)+binario;
    num= Math.floor(num / 2);
    }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}