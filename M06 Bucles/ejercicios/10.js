function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if(num === 10 || num === 5){
    return true;
  } else {
    return false;
  }
}
 //Estoy usando un if con un "Or" para ver si num es 10 o 5, em uno u otro de estos 
 //dos casos retorna "true", caso contrario "false"
module.exports = esDiezOCinco;
