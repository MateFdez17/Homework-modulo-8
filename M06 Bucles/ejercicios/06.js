function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num >= 100 && num < 1000) {
    return true;
  } else {
    return false;
  }
}
//Estoy usando un if con un "&&" para encerrar las caracteristicas de todos los numeros de tres digitos, 
//para en este caso retornar "true", y para qe en caso contrario retornar "false"
module.exports = tieneTresDigitos;
