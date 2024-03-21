function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if(valor === true) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}
console.log(esVerdadero(true));
//Estoy usando un if para retornar el texto "Soy verdadero" en caso de que valor sea igual a "true" 
//y en caso contrario "Soy falso"
module.exports = esVerdadero;
