function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  if(a % 3 === 0 && a % 2 === 0) {
  return true;
  } else {
    return false;
  }
  
}
//Estoy usando un if con un && para retornar "true" en caso de que el numero "a" sea divisible por 3 y par a la vez,
//"a % 3 === 0" significa que es divisible por 3, y "a % 2 === 0" significa que es par, ya que si es divisible por 2 es par.
module.exports = esParYDivisiblePorTres;