function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  if(a >= 0 && a < 10) {
    return true; 
  }  else  {
    return false;
  }
} 
//El test esta mal y el ejercicio estan mal planteados

//Estoy usando un if con un && para retornar "true" si el numero "a" es positivo o menor a 10

module.exports = esPositivoOInferiorA10;